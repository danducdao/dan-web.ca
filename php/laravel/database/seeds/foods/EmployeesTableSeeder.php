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
            [1,'Davolio','Nancy','Ms.','Sales Representative','C','F','507 - 20th Ave. E. Apt. 2A','Seattle','WA','98122','USA','(000) 00-0000',NULL,'exemple1@gmail.com','12/08/1948','05/01/1992',60000.00,'A',12,10,NULL,NULL],
            [2,'Andrew','Fuller','Dr.','Vice Président, Vente','M','M','908 W. Capital Way','Tacoma','WA','98401','USA','(000) 000-0000',NULL,'exemple2@gmail.com','02/19/1952','08/14/1992',100000.00,'A',12,9,NULL,NULL],
            [3,'Leverling','Janet','Ms.','Sales Representative','M','F','722 Moss Bay Blvd.','Kirkland','WA','98401','USA','(000) 000-0000',NULL,'exemple3@gmail.com','08/30/1963','04/01/1992',70000.00,'A',50,10,NULL,NULL],
            [4,'Peacock','Margaret','Mrs.','Sales Representative','M','F','4110 Old Redmond Rd.','Redmond','WA','98401','USA','(000) 000-0000',NULL,'exemple4@gmail.com','09/19/1937','05/03/1993',50000.00,'A',30,10,NULL,NULL],
            [5,'Buchanan','Steven','Mr.','Sales Manager','M','M','14 Garrett Hill','London',NULL,'SW1 8JR','UK','(000) 000-0000',NULL,'exemple5@gmail.com','03/04/1955','10/17/1993',90000.00,'A',20,15,NULL,NULL],
            [6,'Suyama','Michael','Mr.','Sales Representative','M','M','Coventry House Miner Rd.','London',NULL,'EC2 7JR','UK','(000) 000-0000',NULL,'exemple6@gmail.com','07/02/1963','10/17/1993',56000.00,'A',20,10,NULL,NULL],
            [7,'King','Robert','Mr.','Sales Representative','M','M','Edgeham Hollow Winchester Way','London',NULL,'RG1 9SP','UK','(000) 000-0000',NULL,'exemple7@gmail.com','05/29/1960','01/02/1994',56000.00,'A',24,20,NULL,NULL],
            [8,'Callahan','Laura','Ms.','Inside Sales Coordinator','M','F','4726 - 11th Ave. N.E.','Seattle','WA','98105','USA','(000) 000-0000',NULL,'exemple8@gmail.com','01/09/1958','03/05/1994',40000.00,'A',20,40,NULL,NULL],
            [9,'Dodsworth','Anne','Ms.','Sales Representative','M','F','7 Houndstooth Rd.','London',NULL,'WG2 7LT','UK','(000) 000-0000',NULL,'exemple9@gmail.com','01/27/1966','11/15/1994',50000.00,'A',20,40,NULL,NULL]
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
                'code_postale' => $employee[10],
                'pays' => $employee[11],
                'telephone' => $employee[12],
                'cellulaire' => $employee[13],
                'courriel' => $employee[14],
                'date_naissance' => date('Y-m-d', strtotime($employee[15])),
                'date_embauche' => date('Y-m-d', strtotime($employee[16])),
                'salaire' => $employee[17],
                'par' =>  $employee[18],
                'conge_vacance' => $employee[19],
                'conge_maladie' => $employee[20],
                'photo' => $employee[21],
                'note' => $employee[22],
                'created_at' => new \DateTime()
            ]);
        }
    }
}