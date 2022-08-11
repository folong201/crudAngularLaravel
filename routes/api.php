<?php

use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


//Route to manipulate the databse using  angular front end
//route to get all the products
    Route::get('product/{id}',[ProductController::class,'getOne']);
    Route::get('products',[ProductController::class,'index']);
    Route::post('create',[ProductController::class,'create']);
    Route::put('update/{id}',[ProductController::class,'update']);
    Route::delete('delete/{id}',[ProductController::class,'destroy']);



//
