<?php

namespace App\Services;

use App\Data\RegistryData;
use App\Models\Registry;
use Carbon\Carbon;

class RegistryService
{
    public function __construct()
    {
    }

    public function store(RegistryData $registryData): array
    {
        $user = auth()->user();

        $registryData->user_id = $user->id;

        $registry = Registry::create($registryData->toArray());

        $token = $user->createToken('registry_'.$registry->id);

        $accessToken = $token->accessToken;
        $accessToken->registry_id = $registry->id;
        $accessToken->save();

        return [
            'registry' => $registry,
            'token' => $token->plainTextToken,
        ];
    }

    public function show(Registry $registry, string $period = 'week'): array|null
    {
        $rawEvents = $registry->events()
            ->selectRaw('DATE(created_at) as date, component, COUNT(*) as total')
            ->groupByRaw('DATE(created_at), component')
            ->orderByRaw('DATE(created_at)');

        switch ($period) {
            case 'day':
                $rawEvents = $registry->events()
                    ->selectRaw("DATE_TRUNC('hour', created_at) AS date, component, COUNT(*) AS total")
                    ->whereDate('created_at', now()->toDateString())
                    ->groupByRaw("DATE_TRUNC('hour', created_at), component")
                    ->orderByRaw("DATE_TRUNC('hour', created_at)")
                    ->get();
                break;
            case 'month':
                $rawEvents = $rawEvents
                    ->where('created_at', '>=',Carbon::now()->subDays(30))
                    ->get();
                break;
            default:
                $rawEvents = $rawEvents
                    ->where('created_at', '>=',Carbon::now()->subDays(7))
                    ->get();
        }

        if(count($rawEvents) == 0) {
            return null;
        }

        $startOfMonth = Carbon::now()->subDays(30)->toDateString();
        $weekAgo = Carbon::now()->subDays(7)->toDateString();
        $startOfDay = Carbon::now()->startOfDay()->toDateString();

        $totals = [
            'total' => $registry->events()->count(),
            'month' => $registry->events()->where('created_at', '>=', $startOfMonth)->count(),
            'week' => $registry->events()->where('created_at','>=', $weekAgo)->count(),
            'day' => $registry->events()->where('created_at', '>=', $startOfDay)->count(),
        ];

        $analytics = $rawEvents->map(function ($events) use ($startOfMonth) {
            return collect($events->toArray());
        })->groupBy('component');

        $componentsAnalytics = $analytics->map(function ($events) {
            return $events->sum('total');
        });

        $countryAnalytics = $this->getCountryAnalytics($registry, $period);

        return [
            'totals' => $totals,
            'analytics' => $analytics->toArray(),
            'componentsAnalytics' => $componentsAnalytics->sortDesc()->toArray(),
            'countryAnalytics' => $countryAnalytics,
        ];
    }

    public function updateToken(Registry $registry): string
    {
        $registry->token()->delete();

        $token = auth()->user()->createToken('registry_'.$registry->id);

        $accessToken = $token->accessToken;
        $accessToken->registry_id = $registry->id;
        $accessToken->save();

        return $token->plainTextToken;
    }

    private function getCountryAnalytics(Registry $registry, string $period = 'week'): array
    {
        $events = $registry->events()
            ->where('created_at', '>=',Carbon::now()->subDays(7))
            ->get();

        $countries = $events->pluck('country_code', 'country')->toArray();
        $countries = array_unique($countries);

        $groupByCountries = $events->countBy('country')->sortDesc();

        $countryAnalytics = $groupByCountries->map(function ($eventsCount, $country) use ($countries) {
            return ['country' => $country, 'eventsCount' => $eventsCount, 'code' => $countries[$country] ?? null];
        });

        return $countryAnalytics->values()->toArray();
    }

    public function setUpCountryStat(Registry $registry, bool $allowCountryAnalytics): void
    {
        $registry->country_stats = $allowCountryAnalytics;
        $registry->save();
    }
}
