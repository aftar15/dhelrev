<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class TeacherController extends Controller
{
    public function index()
    {
        return Inertia::render('Teachers/Index', [
            'teachers' => []
        ]);
    }
} 