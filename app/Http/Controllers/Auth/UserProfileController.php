<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

class UserProfileController extends Controller
{
    public function __invoke(Request $request)
    {
        $user = auth()->user();

        // $user = User::where('user_id', $user->id)->first();

        // $user->update();

        if ($request->hasFile('photo')) {
            $request->file('photo')->move('images/userprofile', $request->file('photo')->getClientOriginalName());
            $user->photo = $request->file('photo')->getClientOriginalName();
            $user->phone = $request->phone;
            $user->address = $request->address;
            $user->gender = $request->gender;
            $user->update();
        }

        $data['user'] = $user;

        return response()->json([
            'response_code' => '00',
            'message' => 'profil berhasil diupdate',
            'data' => $data,
            'profile' => $user
        ]);
    }
}
