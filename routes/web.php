<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\CoursesContrller;
use App\Http\Controllers\ProjectControllar;
use App\Http\Controllers\TermsController;
use App\Http\Controllers\PolicyController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',[HomeController::class,'HomeIndex']);


/* contact */ 
Route::post('/contactUs',[HomeController::class,'ContactSend']);

/* other pages */
Route::get('/courses',[CoursesContrller::class,'CoursesPage']);
Route::get('/project',[ProjectControllar::class,'ProjectPage']);
Route::get('/policy',[PolicyController::class,'PolicyPage']);
Route::get('/terms',[TermsController::class,'TermsPage']);
