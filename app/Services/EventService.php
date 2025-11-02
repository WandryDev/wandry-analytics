<?php

namespace App\Services;

use App\Data\EventData;
use App\Models\Event;
use App\Models\Registry;

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

        $data->ip = request()->ip() ?? '';
        $data->eventable_type = Registry::class;
        $data->eventable_id = $registry->id;

        return Event::create($data->toArray());
    }
}
