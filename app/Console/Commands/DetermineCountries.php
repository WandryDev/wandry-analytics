<?php

namespace App\Console\Commands;

use App\Models\Event;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Symfony\Component\Console\Attribute\AsCommand;

#[AsCommand('app:determine-countries')]
class DetermineCountries extends Command
{
    /**
     * Execute the console command.
     */
    public function handle()
    {
        $events = Event::whereNull('country')->where('eventable_id', '!=', 12)->limit(40)->get();

        foreach ($events as $event) {
            $response = Http::get('http://demo.ip-api.com/json/'.$event->ip);

            if($response->successful()) {
                try {
                    $data = $response->json();

                    $event->country = $data['country'];
                    $event->country_code = $data['countryCode'];
                    $event->city = $data['city'];
                    $event->save();
                } catch (\Exception $e) {
                    Log::error($e->getMessage());
                    Log::error($response->json());
                }
            } else {
                Log::error($response->json());
            }
        }
    }
}
