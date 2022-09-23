<?php

use App\Http\Controllers\Auth\CampaignController;
use App\Http\Controllers\Auth\SocialiteController;
use App\Http\Controllers\BlogController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth',
    'namespace' => 'Auth',
], function () {
    Route::post('register', 'RegisterController');
    Route::post('regenerate-otp', 'RegenerateOtpController');
    Route::post('verification', 'VerificationController');
    Route::post('update-password', 'UpdatePasswordController');
    Route::post('update-profile', 'UserProfileController');
    Route::post('login', 'LoginController');
    Route::post('logout', 'LogoutController')->middleware('auth:api');
    Route::post('check-token', 'CheckTokenController')->middleware('auth:api');

    Route::get('/social/{provider}', 'SocialiteController@redirectToProvider');
    Route::get('/social/{provider}/callback', 'SocialiteController@handleProviderCallback');
});

Route::group([
    'middleware' => ['api', 'auth', 'auth:api']
], function () {
    Route::get('profile/show', 'ProfileController@show');
    Route::post('profile/create', 'ProfileController@create');
    Route::post('profile/update', 'ProfileController@update');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'campaign',
], function () {
    Route::get('/', 'CampaignController@index');
    Route::get('/{id}', 'CampaignController@detail');
    Route::get('random/{count}', 'CampaignController@random');
    Route::post('store', 'CampaignController@store');
    Route::get('search/{keyword}', 'CampaignController@search');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'blog',
], function () {
    Route::get('/', 'BlogController@index');
    Route::get('/{id}', 'BlogController@detail');
    Route::get('random/{count}', 'BlogController@random');
    Route::post('store', 'BlogController@store');
});
