<?php

namespace database\seeds\foods;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            [1,'Beverages','Soft drinks, coffees, teas, beers, and ales',NULL],
            [2,'Condiments','Sweet and savory sauces, relishes, spreads, and seasonings',NULL],
            [3,'Confections','Desserts, candies, and sweet breads',NULL],
            [4,'Dairy Products','Cheeses',NULL],
            [5,'Grains/Cereals','Breads, crackers, pasta, and cereal',NULL],
            [6,'Meat/Poultry','Prepared meats',NULL],
            [7,'Produce','Dried fruit and bean curd',NULL],
            [8,'Seafood','Seaweed and fish',NULL]

        ];
        foreach($categories as $categorie)
        {
            DB::connection('mysql')->table('categories')->insert([
                'id' => $categorie[0],
                'nom' => $categorie[1],
                'description' => $categorie[2],
                'photo' => $categorie[3],
                'created_at' => new \DateTime(),
            ]);
        }
    }
}
