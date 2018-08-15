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
        Schema::create('films', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('titre',255);
            $table->longText('description');
            $table->string('anneeSortie',4)->nullable();
            $table->tinyInteger('langue_id')->unsigned()->reference('id')->on('langues');
            $table->tinyInteger('langue_original_id')->nullable()->unsigned()->reference('id')->on('langues');
            $table->tinyInteger('dureeLocation')->default(3);
            $table->decimal('prix',4,2)->default(4.99);
            $table->smallInteger('longeur')->unsigned()->nullable();
            $table->decimal('coutRemplacement',5,2)->default(19.99);
            $table->enum('rating', array('G','PG','PG-13','R','NC-17'))->default('G');
            $table->enum('specialFutures', array('Trailers','Commentaries','Deleted Scenes','Behind the Scenes'))->nullable();
            $table->tinyInteger('active')->default(1);
            $table->timestamps();
        });

        $table_prefix = DB::getTablePrefix();
        DB::statement("ALTER TABLE `" . $table_prefix . "films` CHANGE `specialFutures` `specialFutures` SET('Trailers','Commentaries','Deleted Scenes','Behind the Scenes')");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('films');
    }
}
