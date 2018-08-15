<?php

use Illuminate\Database\Seeder;

class AdminsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admins = [
            [1, 'Mike', 'Hillyer', 3,NULL,'Mike.Hillyer@sakilastaff.com', 1, 1, 'Mike', NULL , '2006-02-15 11:57:16'],
            [2, 'Jon', 'Stephens', 4, NULL, 'Jon.Stephens@sakilastaff.com', 2, 1, 'Jon', NULL, '2006-02-15 11:57:16']
        ];
        foreach($admins as $admin)
        {
            DB::table('admins')->insert([
                'id' => $admin[0], 
                'prenom' => $admin[1],
                'nom' => $admin[2],
                'adresse_id' => $admin[3],
                'photo' => $admin[4],
                'courriel' => $admin[5],
                'store_id' => $admin[6],
                'active' => $admin[7],
                'username' => $admin[8],
                'password' => $admin[9],
                'created_at' => new \DateTime(),
                'updated_at' => $admin[10]
            ]);
        }
    }
}
