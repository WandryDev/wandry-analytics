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
    Route::get('registry/{id}', [RegistryController::class, 'show'])->name('registry.show');
    Route::post('registry', [RegistryController::class, 'store'])->name('registry.store');
});

require __DIR__.'/settings.php';
