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

    public function store(RegistryData $registryData): Registry
    {
        $user = auth()->user();

        $registryData->user_id = $user->id;

        $registry = Registry::create($registryData->toArray());

        $token = $user->createToken('registry_'.$registry->id);

        $accessToken = $token->accessToken;
        $accessToken->registry_id = $registry->id;
        $accessToken->save();

        return $registry;
    }

    public function show(Registry $registry): array|null
    {
        $rawEvents = $registry->events()
            ->whereYear('created_at', now()->year)
            ->get()->groupBy('component');

        if(count($rawEvents) == 0) {
            return null;
        }

        $totals = [
            'year' => $rawEvents->count(),
            'month' => $rawEvents->where('created_at','>=', Carbon::now()->subDays(30))->count(),
            'day' => $rawEvents->where('created_at', '>=', Carbon::now()->startOfDay())->count(),
        ];

        $analytics = $rawEvents->map(function ($item) use ($registry) {
            return [
                'perYear' => $item->count(),
                'perMonth' => $item->where('created_at','>=', Carbon::now()->subDays(30))->count(),
                'perDay' => $item->where('created_at', '>=', Carbon::now()->startOfDay())->count(),
            ];
        });

        return [
            'totals' => $totals,
            'analytics' => $analytics,
        ];
    }
}
