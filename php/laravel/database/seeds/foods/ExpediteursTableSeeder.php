<?php

use Illuminate\Database\Seeder;

class ExpediteursTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $expediteurs = [
            [1,'Speedy Express','(503) 555-9831'],
            [2,'United Package','(503) 555-3199'],
            [3,'Federal Shipping','(503) 555-9931']
        ];
        foreach($expediteurs as $expediteur)
        {
            DB::connection('mysql')->table('expediteurs')->insert([
                'id' => $expediteur[0],
                'nom' => $expediteur[1],
                'telephone' => $expediteur[2],
                'created_at' => new \DateTime(),
            ]);
        }
    }
}
