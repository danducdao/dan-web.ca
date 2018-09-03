<?php

namespace database\seeds\foods;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

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
            [1,1,'exemple@gmail.com','sha1$147388cc$1$f397d36f29901b7f6bf26e05ab0672f2de7b234e','sha1$147388cc$1$f397d36f29901b7f6bf26e05ab0672f2de7b234e']
        ];
        foreach($admins as $admin)
        {
            DB::connection('mysql')->table('admins')->insert([
                'id' => $admin[0],
                'employee_id' => $admin[1],
                'username' => $admin[2],
                'password' => $admin[3],
                'confirm_password' => $admin[4],
                'created_at' => new \DateTime(),
            ]);
        }
    }
}
