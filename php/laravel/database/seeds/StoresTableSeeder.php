<?php

use Illuminate\Database\Seeder;

class StoresTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $stores = [
            [1, 1, 1, '2006-02-15 12:57:12'],
            [2, 2, 2, '2006-02-15 12:57:12']
        ];
        foreach($stores as $store)
        {
            DB::table('stores')->insert([
                'id' => $store[0],
                'manager_id' => $store[1], 
                'adresse_id' => $store[2],
                'created_at' => new \DateTime(),
                'updated_at' => $store[3] 
            ]);
        }
    }
}
