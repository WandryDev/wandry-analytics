<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegistryRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => 'required|string',
            'url' => 'required|url',
        ];
    }
}
