<?php

use Illuminate\Database\Seeder;

class RegionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $regions = [
           [1,'Eastern'],
           [2,'Western'],
           [3,'Northern'],
           [4,'Southern']
        ];
        foreach($regions as $region)
        {
            DB::connection('mysql')->table('regions')->insert([
                'id' => $region[0],
                'description' => $region[1],
                'created_at' => new \DateTime()
            ]);
        }
    }
}
