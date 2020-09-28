<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class SyncContentToSharedFilesystem extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'content:sync';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sync the content and users directory to EFS.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        exec('cp -R content /mnt/local');
        exec('cp -R users /mnt/local');
    }
}
