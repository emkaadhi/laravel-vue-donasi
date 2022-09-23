<?php

namespace App\Listeners;

use App\Events\UserRegistered;
use App\Mail\SendOtpCodeMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SendEmailOtpCode implements ShouldQueue
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  UserRegistered  $event
     * @return void
     */
    public function handle($event)
    {
        if ($event->condition == 'register') {
            $pesan = "Terima kasih telah bergabung bersama kami.Untuk konfirmasi account silakan untuk copy code yang kami kirimkan untuk verifikasi email anda";
        } elseif ($event->condition == 'regenerate') {
            $pesan = "regenerate OTP berhasil , silakan verikasi ulang";
        }

        Mail::to($event->user)->send(new SendOtpCodeMail($event->user, $pesan));
    }
}
