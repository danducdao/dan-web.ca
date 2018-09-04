<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFilmsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(!Schema::connection('mysql3')->hasTable('films'))
        {
            Schema::connection('mysql3')->create('films', function (Blueprint $table) {
                $table->engine = 'InnoDB';
                $table->increments('id');
                $table->string('titre',255);
                $table->longText('description');
                $table->string('annee_sortie',4)->nullable();
                $table->integer('langue_id')->unsigned();
                $table->foreign('langue_id')->references('id')->on('langues');
                $table->integer('langue_original_id')->unsigned()->nullable();
                $table->foreign('langue_original_id')->references('id')->on('langue_originals');
                $table->tinyInteger('duree_location')->default(3);
                $table->decimal('prix',4,2)->default(4.99);
                $table->smallInteger('longeur')->unsigned()->nullable();
                $table->decimal('cout_remplacement',5,2)->default(19.99);
                $table->enum('evaluation', array('G','PG','PG-13','R','NC-17'))->default('G');
                $table->enum('nouveaute', array('Trailers','Commentaries','Deleted Scenes','Behind the Scenes'))->nullable();
                $table->longText('photo')->nullable();
                $table->tinyInteger('active')->default(1);
                $table->timestamps();
            });

            $table_prefix = DB::connection('mysql3')->getTablePrefix();
            DB::connection('mysql3')->statement("ALTER TABLE `" . $table_prefix . "films` CHANGE `nouveaute` `nouveaute` SET('Trailers','Commentaries','Deleted Scenes','Behind the Scenes')");
         }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::connection('mysql3')->dropIfExists('films');
    }
}
