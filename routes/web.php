<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\RegistryController;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('registry/create', [RegistryController::class, 'create'])->name('registry.create');
    Route::get('registry/{registry}', [RegistryController::class, 'show'])->name('registry.show');
    Route::get('registry/{registry}/edit', [RegistryController::class, 'edit'])->name('registry.edit');
    Route::post('registry', [RegistryController::class, 'store'])->name('registry.store');
    Route::post('registry/setup', [RegistryController::class, 'setup'])->name('registry.setup');
    Route::put('registry/{registry}', [RegistryController::class, 'update'])->name('registry.update');
    Route::get('registry/{registry}/token-regenerate', [RegistryController::class, 'updateToken'])->name('registry.update.token');
});

require __DIR__.'/settings.php';
