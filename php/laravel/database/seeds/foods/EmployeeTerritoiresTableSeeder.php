<?php

use Illuminate\Database\Seeder;

class EmployeeTerritoiresTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $employeeTerritoires = [
            [1,'06897'],
            [1,'19713'],
            [2,'01581'],
            [2,'01730'],
            [2,'01833'],
            [2,'02116'],
            [2,'02139'],
            [2,'02184'],
            [2,'40222'],
            [3,'30346'],
            [3,'31406'],
            [3,'32859'],
            [3,'33607'],
            [4,'20852'],
            [4,'27403'],
            [4,'27511'],
            [5,'02903'],
            [5,'07960'],
            [5,'08837'],
            [5,'10019'],
            [5,'10038'],
            [5,'11747'],
            [5,'14450'],
            [6,'85014'],
            [6,'85251'],
            [6,'98004'],
            [6,'98052'],
            [6,'98104'],
            [7,'60179'],
            [7,'60601'],
            [7,'80202'],
            [7,'80909'],
            [7,'90405'],
            [7,'94025'],
            [7,'94105'],
            [7,'95008'],
            [7,'95054'],
            [7,'95060'],
            [8,'19428'],
            [8,'44122'],
            [8,'45839'],
            [8,'53404'],
            [9,'03049'],
            [9,'03801'],
            [9,'48075'],
            [9,'48084'],
            [9,'48304'],
            [9,'55113'],
            [9,'55439']
        ];
        foreach($employeeTerritoires as $employeeTerritoire)
        {
            DB::connection('mysql')->table('employee_territoires')->insert([
                'employee_id' => $employeeTerritoire[0],
                'territoire_id' => $employeeTerritoire[1],
                'created_at' => new \DateTime()
            ]);
        }
    }
}
