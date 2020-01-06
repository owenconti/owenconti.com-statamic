<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use OhSeeSoftware\LaravelServerAnalytics\ServerAnalytics;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // Statamic::script('app', 'cp');
        // Statamic::style('app', 'cp');

        ServerAnalytics::addRouteExclusions([
            '/cp',
            '/cp/*',
        ]);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
