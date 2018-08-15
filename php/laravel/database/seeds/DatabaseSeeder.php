<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         $this->call(ArtistesTableSeeder::class);
         $this->call(GenresTableSeeder::class);
         $this->call(AlbumsTableSeeder::class); 
         $this->call(ActeursTableSeeder::class);   
         $this->call(AdressesTableSeeder::class); 
         $this->call(CategoriesTableSeeder::class); 
         $this->call(VillesTableSeeder::class); 
         $this->call(PaysTableSeeder::class);
         $this->call(FilmsTableSeeder::class);
         $this->call(FilmActeursTableSeeder::class);
         $this->call(FilmCategoriesTableSeeder::class);
         $this->call(FilmTextesTableSeeder::class);
         $this->call(LanguesTableSeeder::class);
         $this->call(AdminsTableSeeder::class);
         $this->call(StoresTableSeeder::class);
    }
}
