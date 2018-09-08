<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function redirect_with_message_errors(string $route,array $message,array $id = null):object{
        return redirect()->route($route,$id)->withErrors($message);
    }

    protected function redirect_with_message_success(string $route,string $message) : object
    {
        return redirect()->route($route)->withSuccess($message);
    }

    protected function back_message_errors(object $message) : object{
        return back()->withInput()->withErrors($message);
    }
}
