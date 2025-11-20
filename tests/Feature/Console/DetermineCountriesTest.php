<?php

namespace Tests\Feature\Console;

use App\Models\Event;
use App\Models\Registry;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class DetermineCountriesTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     */
    public function test_determine_countries(): void
    {
        User::factory()->count(2)->create();
        Registry::factory()->count(2)->create();
        Event::factory()->count(10)->create([
            'ip' => '8.8.8.8',
            'country' => null,
            'eventable_id' => 5,
        ]);

        Http::fake([
            'http://demo.ip-api.com/json/*' => Http::response([
                'country' => 'Ukraine',
                'country_code' => 'UK',
                'city' => 'Kiev',
            ], 200)
        ]);

        $this->artisan('app:determine-countries')
            ->assertExitCode(0);
    }
}
