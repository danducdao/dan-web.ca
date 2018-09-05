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
       /* $this->call(FournisseursTableSeeder::class);
        $this->call(database\seeds\foods\CategoriesTableSeeder::class);
        $this->call(ProduitsTableSeeder::class);  
        $this->call(database\seeds\foods\EmployeesTableSeeder::class);
        $this->call(database\seeds\foods\AdminsTableSeeder::class); */
         
        //Movie store
        $this->call(PaysTableSeeder::class);
        $this->call(VillesTableSeeder::class); 
        $this->call(LanguesTableSeeder::class);
        $this->call(LangueOriginalsTableSeeder::class);
        $this->call(ActeursTableSeeder::class); 
        $this->call(AdressesTableSeeder::class); 
        $this->call(StoresTableSeeder::class);
        $this->call(CategoriesTableSeeder::class);
        $this->call(FilmsTableSeeder::class);
        $this->call(FilmTextesTableSeeder::class);
        $this->call(InventairesTableSeeder::class);
        $this->call(AdminsTableSeeder::class);
        $this->call(CategorieFilmsTableSeeder::class);
        $this->call(ActeurFilmTableSeeder::class);

        //Music store
      /*  $this->call(GenresTableSeeder::class);
        $this->call(ArtistesTableSeeder::class);
        $this->call(AlbumsTableSeeder::class);  */ 
    }
}
