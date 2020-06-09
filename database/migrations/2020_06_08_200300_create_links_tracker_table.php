<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLinksTrackerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('links_tracker', function (Blueprint $table) {
            $table->engine = 'myisam';

            $table->bigIncrements('id');

            $table->string('dyn_field', 100);
            $table->text('dyn_value_field');

            $table->integer('links_id')->unsigned()->index();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('links_tracker');
    }
}
