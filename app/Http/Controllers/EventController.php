<?php

namespace App\Http\Controllers;

use App\Data\EventData;
use App\Http\Requests\EventRequest;
use App\Services\EventService;
use Illuminate\Http\Request;

class EventController extends Controller
{
    private EventService $eventService;
    public function __construct(EventService $eventService)
    {
        $this->eventService = $eventService;
    }

    public function store(EventRequest $request)
    {
        $data = $request->validated();

        $this->eventService->store(EventData::from($data));

        return response()->json([
            'message' => 'Event created successfully'
        ], 201);
    }
}
