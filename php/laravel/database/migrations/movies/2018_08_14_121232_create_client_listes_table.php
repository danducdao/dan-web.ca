<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClientListesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(!Schema::connection('mysql3')->hasTable('client_listes'))
        {
            Schema::connection('mysql3')->create('client_listes', function (Blueprint $table) {
                $table->engine = 'InnoDB';
                $table->increments('id');
                $table->string('nom_complet',120);
                $table->string('adresse',45)->nullable();
                $table->string('code_postale',45)->nullable();
                $table->string('telephone',20)->nullable();
                $table->string('ville',50)->nullable();
                $table->string('pays',50)->nullable();
                $table->longText('note')->nullable();
                $table->tinyInteger('SID')->unsigned();
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
        Schema::connection('mysql3')->dropIfExists('client_listes');
    }
}
