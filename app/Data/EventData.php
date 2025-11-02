<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class EventData extends Data
{
    public function __construct(
        public string $type,
        public string $component,
        public ?string $entity,
        public ?string $ip,
        public ?int $eventable_id,
        public ?int $eventable_type,
    ) {}
}
