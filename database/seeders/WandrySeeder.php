<?php

namespace Database\Seeders;

use App\Models\Event;
use App\Models\Registry;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class WandrySeeder extends Seeder
{
    public function run(): void
    {
        $componentsNames = [
            'TextField',
            'ImageField',
            'FileField',
            'CheckboxField',
        ];
        $user = User::firstOrCreate(
            ['email' => 'wandry@test.com'],
            [
                'name' => 'Test User',
                'password' => 'fN7LiPUKur88xtY',
                'email_verified_at' => now(),
            ]
        );
        $registry = Registry::firstOrCreate(
            [
                'name' => 'wandry-ui',
                'user_id' => $user->id
            ], [
                'user_id' => $user->id,
                'url' => 'https://ui.wandry.com.ua',
                'name' => 'wandry-ui'
            ]);

        foreach ($componentsNames as $componentName) {
            for ($i = 0; $i <= 7; $i++) {
                if (!Event::where('eventable_id', $registry->id)->whereDate('created_at', Carbon::now()->endOfDay()->subDays($i))->exists()) {
                    for ($j = 0; $j <= 24; $j++) {
                        Event::factory()->count(rand(5, 40))->create([
                            'eventable_id' => $registry->id,
                            'component' => $componentName,
                            'created_at' => Carbon::now()->endOfDay()->subDays($i)->subHours($j)
                        ]);
                    }
                }
            }
        }
    }
}
