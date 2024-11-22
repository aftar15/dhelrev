<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Hash;

class SettingsController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        return Inertia::render('Settings/Index', [
            'user' => [
                'avatar' => $user->avatar,
                'firstName' => $user->first_name,
                'lastName' => $user->last_name,
                'title' => $user->title,
                'email' => $user->email,
                'about' => $user->about,
            ]
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . auth()->id(),
            'title' => 'nullable|string|max:255',
            'about' => 'nullable|string',
            'currentPassword' => 'required_with:newPassword',
            'newPassword' => 'nullable|min:8|confirmed',
        ]);

        $user = auth()->user();
        
        // Check current password if trying to change password
        if ($request->newPassword) {
            if (!Hash::check($request->currentPassword, $user->password)) {
                return back()->withErrors(['currentPassword' => 'The provided password does not match your current password.']);
            }
        }

        $user->update([
            'first_name' => $request->firstName,
            'last_name' => $request->lastName,
            'email' => $request->email,
            'title' => $request->title,
            'about' => $request->about,
        ]);

        if ($request->newPassword) {
            $user->update([
                'password' => Hash::make($request->newPassword),
            ]);
        }

        return back()->with('success', 'Settings updated successfully.');
    }

    public function updateAvatar(Request $request)
    {
        $request->validate([
            'avatar' => 'required|image|max:2048', // 2MB max
        ]);

        $user = auth()->user();

        if ($request->hasFile('avatar')) {
            // Delete old avatar if exists
            if ($user->avatar) {
                Storage::disk('public')->delete($user->avatar);
            }

            // Store new avatar
            $path = $request->file('avatar')->store('avatars', 'public');
            
            $user->update([
                'avatar' => $path
            ]);
        }

        return back()->with('success', 'Avatar updated successfully.');
    }
} 