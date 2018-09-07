<?php

use Illuminate\Database\Seeder;

class FoodDatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //Food store
        $this->call(FournisseursTableSeeder::class);
        $this->call(database\seeds\foods\CategoriesTableSeeder::class);
        $this->call(ProduitsTableSeeder::class);  
        $this->call(database\seeds\foods\EmployeesTableSeeder::class);
        $this->call(database\seeds\foods\AdminsTableSeeder::class);
    }
}
