<?php

namespace App\Http\Requests\Registries;

use Illuminate\Foundation\Http\FormRequest;

class RegistryCountryStatRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'allowCountryAnalytics' => 'required|boolean',
        ];
    }
}
