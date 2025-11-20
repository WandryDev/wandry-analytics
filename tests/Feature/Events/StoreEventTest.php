<?php

namespace Tests\Feature\Events;

use App\Models\Registry;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class StoreEventTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic feature test example.
     */
    public function test_event_store(): void
    {
        $user = User::factory()->create();
        $registry = Registry::factory()->create([
            'user_id' => $user->id
        ]);
        $token = $user->createToken('test-token');
        $accessToken = $token->accessToken;
        $accessToken->registry_id = $registry->id;
        $accessToken->save();

        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token->plainTextToken,
        ])->postJson('/api/v1/registry/install', [
                'type' => 'install',
                'component' => 'TestComponent',
                'ip' => '127.0.0.1',
            ]);

        $response->assertStatus(201);
        $this->assertDatabaseHas('events', [
            'type' => 'install',
            'component' => 'TestComponent',
            'ip' => '127.0.0.1',
            'country' => 'unknown',
            'city' => 'unknown',
            'country_code' => 'unknown',
        ]);
    }
}
