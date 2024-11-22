<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\CalendarController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\SettingsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

Route::get('/', function () {
    return redirect()->route('login');
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/teachers', [TeacherController::class, 'index'])->name('teachers.index');
    Route::get('/students', [StudentController::class, 'index'])->name('students.index');
    Route::get('/calendar', [CalendarController::class, 'index'])->name('calendar.index');
    Route::get('/reports', [ReportController::class, 'index'])->name('reports.index');
    Route::get('/settings', [SettingsController::class, 'index'])->name('settings.index');
    Route::post('/settings/update', [SettingsController::class, 'update'])->name('settings.update');
    Route::post('/settings/update-avatar', [SettingsController::class, 'updateAvatar'])->name('settings.updateAvatar');
    Route::post('/logout', function () {
        Auth::logout();
        return redirect('/login');
    })->name('logout');
});

require __DIR__.'/auth.php';
