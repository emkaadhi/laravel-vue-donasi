<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

class UpdatePasswordController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required|confirmed',
            'password_confirmation' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!($user->email_verified_at)) {
            return 'email belum terverifikasi';
        }

        $user->password = bcrypt($request->password);
        $user->save();

        return response()->json([
            'response_code' => '00',
            'message' => 'password sudah diubah'
        ]);
    }
}
