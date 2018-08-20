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
        Schema::connection('mysql3')->create('admins', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('prenom',45);
            $table->string('nom',45);
            $table->smallInteger('adresse_id')->unsigned()->reference('id')->on('adresses');
            $table->binary('photo')->nullable();
            $table->string('courriel',50)->nullable();
            $table->tinyInteger('store_id')->unsigned()->reference('id')->on('stores');
            $table->tinyInteger('active')->default(1);
            $table->string('username',16);
            $table->string('password',40)->nullable();
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
        Schema::connection('mysql3')->dropIfExists('admins');
    }
}
