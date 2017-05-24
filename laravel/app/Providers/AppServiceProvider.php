<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //'App\Classes\Flickr'
        $this->app->bind('\App\Classes\Flickr', function($app){

            return new \App\Classes\Flickr(env('FLICKR_APP_KEY'));

        });
    }
}
