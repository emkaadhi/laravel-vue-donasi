<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\OtpCode;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class VerificationController extends Controller
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
            'otp' => 'required'
        ]);

        $otp_code = OtpCode::where('otp', $request->otp)->first();

        if (!$otp_code) {
            return response()->json([
                'response_code' => '01',
                'response_message' => 'data tidak ditemukan',
            ]);
        }
        $now = Carbon::now();

        if ($now > $otp_code->valid_until) {
            return response()->json([
                'response_code' => '01',
                'response_message' => 'kode otp sudah tidak berlaku , silakan di      regenerate ulang dengan memasukkan email anda kembali',
            ]);
        }

        $user = User::find($otp_code->user_id);
        $user->email_verified_at = Carbon::now();
        $user->save();

        $otp_code->delete();

        $data['user'] = $user;

        return response()->json([
            'response_code' => '00',
            'response_message' => 'user berhasil diverifikasi',
            'data' => $data
        ]);
    }
}
