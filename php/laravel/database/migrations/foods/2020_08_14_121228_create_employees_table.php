<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::connection('mysql')->create('employees', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('nom',10);
            $table->string('prenom',20);
            $table->string('abrege',10);
            $table->string('titre',30);
            $table->char('statut',1);
            $table->char('genre',1);
            $table->string('adresse',60)->nullable();
            $table->string('ville',15)->nullable();
            $table->string('region',15)->nullable();
            $table->string('codePostale',10)->nullable();
            $table->string('pays',15)->nullable();
            $table->string('telephone',24);
            $table->string('cellulaire',24)->nullable();
            $table->string('courriel',50)->nullable();
            $table->date('dateNaissance');
            $table->date('dateEmbauche')->default((new \DateTime())->format('Y-m-d-H-i-s'));
            $table->decimal('salaire',10,2);
            $table->char('par',1);
            $table->smallInteger('congeVacance');
            $table->smallInteger('congeMaladie');
            $table->longtext('photo')->nullable();
            $table->longtext('note')->nullable();
            $table->smallInteger('active')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::connection('mysql')->dropIfExists('employees');
    }
}
