<?php

use Illuminate\Database\Seeder;

class LangueOriginalsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $langue_originaux = [
            [1, 'English', '2006-02-15 13:02:19'],
            [2, 'Italian', '2006-02-15 13:02:19'],
            [3, 'Japanese', '2006-02-15 13:02:19'],
            [4, 'Mandarin', '2006-02-15 13:02:19'],
            [5, 'French', '2006-02-15 13:02:19'],
            [6, 'German', '2006-02-15 13:02:19']
        ];
        foreach($langue_originaux as $langue_original)
        {
            DB::connection('mysql3')->table('langue_originals')->insert([
                'id' => $langue_original[0],
                'nom' => $langue_original[1], 
                'created_at' => new \DateTime(),
                'updated_at' => $langue_original[2]
            ]);
        }
    }
}
