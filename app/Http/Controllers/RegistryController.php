<?php

namespace App\Http\Controllers;

use App\Data\RegistryData;
use App\Http\Requests\Registries\RegistryRequest;
use App\Models\Registry;
use App\Services\RegistryService;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RegistryController extends Controller
{
    use AuthorizesRequests;

    private RegistryService $registryService;

    public function __construct(RegistryService $registryService)
    {
        $this->registryService = $registryService;
    }

    public function show(Request $request, Registry $registry)
    {
        $this->authorize('action', $registry);

        $analytics = $this->registryService->show($registry, $request->input('period', 'week'));

        $token = $request->session()->get('token');

        return Inertia::render('registry/Show', [
            'registry' => $registry,
            'token' => $token ?? null,
            'analytics' => $analytics, // тут может быть null если у регистри нету ивентов
        ]);
    }

    public function edit(Registry $registry)
    {
        $this->authorize('action', $registry);

        return Inertia::render('registry/Edit', [
            'registry' => $registry,
        ]);
    }

    public function update(RegistryRequest $request, Registry $registry)
    {
        $this->authorize('action', $registry);

        $registry->update($request->validated());

        return redirect()->route('registry.show', $registry);
    }

    public function setup(Request $request, Registry $registry) {
        $this->authorize('action', $registry);

        $this->registryService->setUpCountryStat(
            registry: $registry,
            allowCountryAnalytics: (bool)$request->input('allowCountryAnalytics', false),
        );

        return redirect()->back();
    }

    public function create()
    {
        return Inertia::render('registry/Create');
    }

    public function store(RegistryRequest $request)
    {
        $data = $request->validated();

        $registryData = $this->registryService->store(RegistryData::from($data));

        return redirect()->route('registry.show', ['registry' => $registryData['registry']])
            ->with('token', $registryData['token']);
    }

    public function updateToken(Registry $registry)
    {
        $this->authorize('action', $registry);

        return Inertia::render('registry/Edit', [
            'registry' => fn() => $registry,
            'token' => fn() => $this->registryService->updateToken($registry)
        ]);
    }
}
