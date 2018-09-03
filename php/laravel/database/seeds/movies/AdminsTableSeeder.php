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
            [1, 'Mike', 'Hillyer', 3,NULL,'Mike.Hillyer@sakilastaff.com', 1, 1, 'Mike', 'sha1$147388cc$1$f397d36f29901b7f6bf26e05ab0672f2de7b234e','sha1$147388cc$1$f397d36f29901b7f6bf26e05ab0672f2de7b234e','2006-02-15 11:57:16']
        ];
        foreach($admins as $admin)
        {
            DB::connection('mysql3')->table('admins')->insert([
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
                'confirm_password' => $admin[10],
                'created_at' => new \DateTime(),
                'updated_at' => $admin[11]
            ]);
        }
    }
}
