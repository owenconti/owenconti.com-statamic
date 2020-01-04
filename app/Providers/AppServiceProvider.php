<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use OhSeeSoftware\LaravelServerAnalytics\ServerAnalytics;
use Statamic\Statamic;

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

        // Do not track `/home` or `/admin/*` routes
        ServerAnalytics::addRouteExclusions([
            '/cp',
            '/cp/*',
            '/_debugbar/*'
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
