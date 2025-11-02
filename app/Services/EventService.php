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

        $registry = Registry::where('api_token', $token)->first();

        $data->ip = request()->ip() ?? '';
        $data->eventable_type = Registry::class;
        $data->eventable_id = $registry->id;

        return Event::create($data);
    }
}
