<?php

namespace App\Actions\Events;


use App\Data\EventData;
use App\Models\Event;

class CreateEvent
{
    public function handle(array $data)
    {
        $eventData = EventData::from($data);

        return Event::create();
    }
}
