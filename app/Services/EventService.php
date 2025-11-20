<?php

namespace App\Services;

use App\Data\EventData;
use App\Models\Event;
use App\Models\Registry;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class EventService
{
    public function __construct()
    {
    }

    public function store(EventData $data): Event
    {
        $token = request()->bearerToken();

        [$id, $token] = explode('|', $token, 2);
        $tokenModel = \Laravel\Sanctum\PersonalAccessToken::find($id);

        if (! $tokenModel || ! hash_equals($tokenModel->token, hash('sha256', $token))) {
            abort(401, 'Invalid token');
        }
        $registry = Registry::find($tokenModel->registry_id);

        //$data->ip = request()->header('X-Forwarded-For') ?? request()->ip();

        $event = DB::transaction(function () use ($data) {
            $event = Event::where('ip', $data->ip)
                ->where('created_at', '>=', Carbon::now()->subSeconds(5))
                ->lockForUpdate()
                ->first();

            if($event){
                $event->component = $data->component;
                $event->save();
            }

            return $event;
        });

        if($event) {
            return $event;
        }

        if(!$registry->country_stats) {
            $data->country = 'unknown';
            $data->country_code = 'unknown';
            $data->city = 'unknown';
        }

        $data->eventable_type = Registry::class;
        $data->eventable_id = $registry->id;
        $data->created_at = Carbon::now();

        return Event::create($data->toArray());
    }
}
