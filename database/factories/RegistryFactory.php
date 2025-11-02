<?php

namespace Database\Factories;

use App\Models\Registry;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class RegistryFactory extends Factory
{
    protected $model = Registry::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'url' => $this->faker->url(),
            'user_id' => User::inRandomOrder()->first()->id,
        ];
    }
}
