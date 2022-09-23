<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Profiler\Profile;

class ProfileController extends Controller
{
    public function show(Request $request)
    {
        $user = auth()->user();
        $data['user'] = $user;
        return response()->json([
            'response_code' => '00',
            'message' => 'profile berhasil ditampilkan',
            'data' => $data
        ]);
    }

    public function create(Request $request)
    {
        $user = auth()->user();

        $request->file('photo')->move('images/userprofile', $request->file('photo')->getClientOriginalName());

        $user_profile = User::create([
            'address' => $request->address,
            'phone' => $request->phone,
            'gender' => $request->gender,
            'user_id' => $user->id,
            'photo' => $request->file('photo')->getClientOriginalName(),
        ]);

        $data['user'] = $user;

        return response()->json([
            'response_code' => '00',
            'message' => 'profile berhasil ditampilkan',
            'profile' => $user_profile,
            'data' => $data
        ]);
    }

    public function update(Request $request)
    {
        $user = auth()->user();

        $user_profile = User::where('user_id', $user->id)->first();

        $user_profile->update($request->all());

        if ($request->hasFile('photo')) {
            $request->file('photo')->move('images/userprofile', $request->file('photo')->getClientOriginalName());
            $user_profile->photo = $request->file('photo')->getClientOriginalName();
            $user_profile->phone = $request->phone;
            $user_profile->address = $request->address;
            $user_profile->gender = $request->gender;
            $user_profile->save();
        }

        $data['user'] = $user;

        return response()->json([
            'response_code' => '00',
            'message' => 'profil berhasil diupdate',
            'data' => $data,
            'profile' => $user_profile
        ]);
    }
}
