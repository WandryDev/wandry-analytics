<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class RegistryData extends Data
{
    public function __construct(
        public string $name,
        public string $url,
        public ?int $user_id,
    ) {}
}
