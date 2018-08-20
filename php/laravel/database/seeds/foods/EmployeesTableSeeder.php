<?php

namespace database\seeds\foods;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EmployeesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $employees = [
            [1,'Andrew','Fuller','Dr.','Vice Président, Vente','M','M','908 W. Capital Way','Tacoma','WA','98401','USA','(206) 555-9482',NULL,'exemple@gmail.com','1952-02-19','1992-08-14',100000.00,'A',67,20,'Andrew received his BTS commercial in 1974 and a Ph.D. in international marketing from the University of Dallas in 1981.  He is fluent in French and Italian and reads German.  He joined the company as a sales representative, was promoted to sales manager in January 1992 and to vice president of sales in March 1993.  Andrew is a member of the Sales Management Roundtable, the Seattle Chamber of Commerce, and the Pacific Rim Importers Association.',NULL]
        ];
        foreach($employees as $employee)
        {
            DB::connection('mysql')->table('employees')->insert([
                'id' => $employee[0],
                'nom' => $employee[1],
                'prenom' => $employee[2],
                'abrege' => $employee[3],
                'titre' => $employee[4],
                'statut' => $employee[5],
                'genre' => $employee[6],
                'adresse' => $employee[7],
                'ville' => $employee[8],
                'region' => $employee[9],
                'codePostale' => $employee[10],
                'pays' => $employee[11],
                'telephone' => $employee[12],
                'cellulaire' => $employee[13],
                'courriel' => $employee[14],
                'dateNaissance' => $employee[15],
                'dateEmbauche' => $employee[16],
                'salaire' => $employee[17],
                'par' =>  $employee[18],
                'congeVacance' => $employee[19],
                'congeMaladie' => $employee[20],
                'photo' => $employee[21],
                'note' => $employee[22],
                'created_at' => new \DateTime()
            ]);
        }
    }
}