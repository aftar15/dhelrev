<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    public function index()
    {
        return Inertia::render('Reports/Index', [
            'reports' => [],
            'summary' => [
                'totalStudents' => 0,
                'averageGrade' => 0,
                'passingRate' => 0,
                'attendanceRate' => 0
            ]
        ]);
    }
} 