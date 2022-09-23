<?php

namespace App;

use Tymon\JWTAuth\Contracts\JWTSubject;
use App\Traits\UsesUuid;
use Carbon\Carbon;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    use UsesUuid;

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'role_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function roles()
    {
        return $this->belongsTo(Role::class);
    }

    public function otp_code()
    {
        return $this->hasOne(OtpCode::class, 'user_id', 'id');
    }

    public function profile()
    {
        return $this->hasOne(UserProfile::class);
    }

    public function get_role_admin()
    {
        $role = Role::where('name', 'admin')->first();

        return $role->id;
    }

    public function get_role_user()
    {
        $role = Role::where('name', 'user')->first();

        return $role->id;
    }

    public static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->role_id = $model->get_role_user();
        });

        static::created(function ($model) {
            $model->generate_otp_code();
        });
    }

    public function generate_otp_code()
    {
        do {
            $random = mt_rand(100000, 999999);
            $check = OtpCode::where('otp', $random)->first();
        } while ($check);

        $now = Carbon::now();

        $otp_code = OtpCode::updateOrCreate(
            ['user_id' => $this->id],
            [
                'otp' => $random,
                'valid_until' => $now->addMinutes(5)
            ],
        );
    }
}
