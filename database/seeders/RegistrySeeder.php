<?php

namespace Database\Seeders;

use App\Models\Registry;
use Illuminate\Database\Seeder;

class RegistrySeeder extends Seeder
{
    public function run(): void
    {
        Registry::factory()->count(10)->create();
    }
}
