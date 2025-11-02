<?php

namespace App\Http\Controllers;

use App\Data\RegistryData;
use App\Http\Requests\RegistryRequest;
use App\Models\Registry;
use App\Services\RegistryService;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Inertia\Inertia;

class RegistryController extends Controller
{
    use AuthorizesRequests;
    private RegistryService $registryService;
    public function __construct(RegistryService $registryService)
    {
        $this->registryService = $registryService;
    }
    public function show(Registry $registry)
    {
        $this->authorize('read', $registry);

        $analytics = $this->registryService->show($registry);

        return Inertia::render('registry/Show', [
            'registry' => $registry,
            'analytics' => $analytics, // если тут возвращается null отображай страничку с их токеном и как интегрировать в код. Токен внутри $registry
        ]);
    }

    public function create()
    {
        return Inertia::render('registry/Create');
    }

    public function store(RegistryRequest $request)
    {
        $data = $request->validated();

        $registry = $this->registryService->store(RegistryData::from($data));

        return redirect()->route('registry.show', $registry);
    }
}
