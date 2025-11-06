<?php

namespace Database\Factories;

use App\Models\Event;
use App\Models\Registry;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class EventFactory extends Factory
{
    protected $model = Event::class;

    public function definition(): array
    {
        return [
            'eventable_id' => Registry::inRandomOrder()->first()->id,
            'eventable_type' => Registry::class,
            'type' => 'install',
            'component' => $this->faker->word,
            'ip' => $this->faker->ipv4,
            'country' => $this->faker->country,
            'city' => $this->faker->city,
            'country_code' => $this->faker->countryCode,
            'created_at' => $this->faker->dateTimeBetween('-3 months', 'now'),
        ];
    }
}
