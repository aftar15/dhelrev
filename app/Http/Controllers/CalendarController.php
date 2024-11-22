<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class CalendarController extends Controller
{
    public function index()
    {
        return Inertia::render('Calendar/Index', [
            'events' => []  // This will store calendar events
        ]);
    }
} 