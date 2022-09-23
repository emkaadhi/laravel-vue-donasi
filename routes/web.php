<?php



use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//  return view('welcome');
// });

// Route::get('/', function () {
//  return view('app');
// });


Route::view("/{app?}", 'app')->where('app', '.*');
// Route::view("/{app?}", 'welcome')->where('app', '.*');
