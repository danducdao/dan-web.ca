<?php

use Illuminate\Database\Seeder;

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
            [1, 'Action', '2006-02-15 12:46:27'],
            [2, 'Animation', '2006-02-15 12:46:27'],
            [3, 'Children', '2006-02-15 12:46:27'],
            [4, 'Classics', '2006-02-15 12:46:27'],
            [5, 'Comedy', '2006-02-15 12:46:27'],
            [6, 'Documentary', '2006-02-15 12:46:27'],
            [7, 'Drama', '2006-02-15 12:46:27'],
            [8, 'Family', '2006-02-15 12:46:27'],
            [9, 'Foreign', '2006-02-15 12:46:27'],
            [10, 'Games', '2006-02-15 12:46:27'],
            [11, 'Horror', '2006-02-15 12:46:27'],
            [12, 'Music', '2006-02-15 12:46:27'],
            [13, 'New', '2006-02-15 12:46:27'],
            [14, 'Sci-Fi', '2006-02-15 12:46:27'],
            [15, 'Sports', '2006-02-15 12:46:27'],
            [16, 'Travel', '2006-02-15 12:46:27']
        ];
        foreach($categories as $categorie)
        {
            DB::table('categories')->insert([
                'id' => $categorie[0], 
                'nom' => $categorie[1],
                'created_at' => new \DateTime(),
                'updated_at' => $categorie[2]
            ]);
        }
    }
}
