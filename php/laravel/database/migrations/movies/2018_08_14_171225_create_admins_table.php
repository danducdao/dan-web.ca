<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAdminsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(!Schema::connection('mysql3')->hasTable('admins'))
        {
            Schema::connection('mysql3')->create('admins', function (Blueprint $table) {
                $table->engine = 'InnoDB';
                $table->increments('id');
                $table->string('prenom',120);
                $table->string('nom',120);
                $table->integer('adresse_id')->unsigned();
                $table->foreign('adresse_id')->references('id')->on('adresses');
                $table->binary('photo')->nullable();
                $table->string('courriel',50)->nullable();
                $table->integer('store_id')->unsigned();
                $table->foreign('store_id')->references('id')->on('stores');
                $table->tinyInteger('active')->default(1);
                $table->string('username',16);
                $table->string('password',250);
                $table->string('confirm_password',250);
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
        Schema::connection('mysql3')->dropIfExists('admins');
    }
}
