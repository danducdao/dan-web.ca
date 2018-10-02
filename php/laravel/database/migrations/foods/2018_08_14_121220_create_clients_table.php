<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(!Schema::connection('mysql')->hasTable('clients'))
        {
            Schema::connection('mysql')->create('clients', function (Blueprint $table) {
                $table->engine = 'InnoDB';
                $table->string('id')->primary();
                $table->string('nom',120);
                $table->string('contact',30)->nullable();
                $table->string('titre',30)->nullable();
                $table->string('adresse',60)->nullable();
                $table->string('ville',15)->nullable();
                $table->string('region',15)->nullable();
                $table->string('code_postale',10)->nullable();
                $table->string('pays',15)->nullable();
                $table->string('telephone',24)->nullable();
                $table->string('fax',24)->nullable();
                $table->smallInteger('active')->default(1);
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::connection('mysql')->dropIfExists('clients');
    }
}
