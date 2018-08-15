<?php

use Illuminate\Database\Seeder;

class LanguesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $langues = [
            [1, 'English', '2006-02-15 13:02:19'],
            [2, 'Italian', '2006-02-15 13:02:19'],
            [3, 'Japanese', '2006-02-15 13:02:19'],
            [4, 'Mandarin', '2006-02-15 13:02:19'],
            [5, 'French', '2006-02-15 13:02:19'],
            [6, 'German', '2006-02-15 13:02:19']
        ];
        foreach($langues as $langue)
        {
            DB::table('langues')->insert([
                'id' => $langue[0],
                'nom' => $langue[1], 
                'created_at' => new \DateTime(),
                'updated_at' => $langue[2]
            ]);
        }
    }
}
