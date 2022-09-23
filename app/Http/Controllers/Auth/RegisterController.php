<?php

namespace App\Http\Controllers\Auth;

use App\Events\UserRegistered;
use App\Http\Controllers\Controller;
use App\Mail\UserRegisteredMail;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class RegisterController extends Controller
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
            // 'username' => 'required|alpha_num|unique:users,username|min:3|max:25',
            'email' => 'required',
            'name' => 'required',
        ]);

        $data = [];

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
        ]);

        $data['user'] = $user;

        event(new UserRegistered($user, 'register'));



        return response()->json([
            'response_code' => '00',
            'response_message' => 'cek email anda',
            'data' => $user
        ]);
    }
}
