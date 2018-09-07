<?php

use Illuminate\Database\Seeder;

class MusicDatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //Music store
        $this->call(GenresTableSeeder::class);
        $this->call(ArtistesTableSeeder::class);
        $this->call(AlbumsTableSeeder::class); 
    }
}
