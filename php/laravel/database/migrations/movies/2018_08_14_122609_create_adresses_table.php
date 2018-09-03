<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAdressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(!Schema::connection('mysql3')->hasTable('adresses'))
        {
            Schema::connection('mysql3')->create('adresses', function (Blueprint $table) {
                $table->engine = 'InnoDB';
                $table->increments('id');
                $table->string('adresse',50);
                $table->string('adresse2',50)->nullable();
                $table->string('district',20);
                $table->integer('ville_id')->unsigned();
                $table->foreign('ville_id')->references('id')->on('villes');
                $table->string('code_postale',10)->nullable();
                $table->string('telephone',20);
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
        Schema::connection('mysql3')->dropIfExists('adresses');
    }
}
