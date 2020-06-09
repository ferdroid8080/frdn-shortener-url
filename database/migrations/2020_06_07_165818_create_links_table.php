<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLinksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('links', function (Blueprint $table) {
            $table->engine = 'myisam';

            $table->bigIncrements('id');
            $table->text('orig_url');
            $table->string('shortened_url', 15)->index()->unique(); // https://frdn.link/d975e38 -> string generado con uniqid(prefix: frdn_) y md5 y substring(8)
            $table->integer('clicks')->unsigned()->default(0);
            $table->text('description');
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
        Schema::dropIfExists('links');
    }
}
