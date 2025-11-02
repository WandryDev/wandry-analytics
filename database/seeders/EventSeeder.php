<?php

namespace Database\Seeders;

use App\Models\Event;
use App\Models\Registry;
use Illuminate\Database\Seeder;

class EventSeeder extends Seeder
{
    public function run(): void
    {
        $componentsNames = [
            'TextField',
            'ImageField',
            'FileField',
            'CheckboxField',
        ];
        Registry::all()->each(function ($registry) use ($componentsNames) {
            foreach ($componentsNames as $componentName) {
                Event::factory()->count(500)->create([
                    'eventable_id' => $registry->id,
                    'component' => $componentName,
                ]);
            }
        });
    }
}
