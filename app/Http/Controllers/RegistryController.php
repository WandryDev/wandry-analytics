<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class RegistryController extends Controller
{
    public function show($id)
    {
        $registry = [
            'id' => $id,
            'name' => 'Sample Registry',
            'url' => 'https://sample-registry.com',
            // Add other registry details as needed
        ];

        return Inertia::render('registry/Show', [
            'registry' => $registry
        ]);
    }

    public function create()
    {
        return Inertia::render('registry/Create');
    }

    public function store()
    {
        return redirect()->route('registry.create');
    }
}
