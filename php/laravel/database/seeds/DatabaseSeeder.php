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
         //Food store
        $this->call(database\seeds\foods\AdminsTableSeeder::class);
        $this->call(database\seeds\foods\CategoriesTableSeeder::class); 
        $this->call(database\seeds\foods\EmployeesTableSeeder::class);
        $this->call(FournisseursTableSeeder::class);
        $this->call(ProduitsTableSeeder::class);  

        //Music store
        $this->call(ArtistesTableSeeder::class);
        $this->call(GenresTableSeeder::class);
        $this->call(AlbumsTableSeeder::class);
         
         //Movie store
        $this->call(ActeursTableSeeder::class);   
        $this->call(AdressesTableSeeder::class); 
        $this->call(CategoriesTableSeeder::class); 
        $this->call(VillesTableSeeder::class); 
        $this->call(PaysTableSeeder::class);
        $this->call(FilmsTableSeeder::class);
        $this->call(ActeurFilmTableSeeder::class);
        $this->call(CategorieFilmTableSeeder::class);
        $this->call(FilmTextesTableSeeder::class);
        $this->call(LanguesTableSeeder::class);
        $this->call(AdminsTableSeeder::class);
        $this->call(StoresTableSeeder::class);

        
        
         
        
         
          
    }
}
