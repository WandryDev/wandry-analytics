<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EventRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'type' => 'required|string',
            'component' => 'required|string',
            'entity' => 'nullable|string', //Это тип на случай если в будущем будем хендлить еще что-то кроме registry
        ];
    }
}
