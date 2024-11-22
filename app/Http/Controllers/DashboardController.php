<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Teacher;
use App\Models\Student;
use App\Models\ClassRoom;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard', [
            'statistics' => [
                'teacherCount' => Teacher::count(),
                'studentCount' => Student::count(),
                'classCount' => ClassRoom::count(),
                'attendanceRate' => $this->calculateAttendanceRate(),
            ]
        ]);
    }

    private function calculateAttendanceRate()
    {
        // Implement your attendance rate calculation logic here
        // For now, returning a placeholder
        return 95;
    }
} 