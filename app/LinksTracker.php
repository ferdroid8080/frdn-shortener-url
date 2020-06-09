<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LinksTracker extends Model
{
    protected $table = 'links_tracker';

    public $timestamps = false;



    public function links() {
        return $this->belongsTo('App/Links', 'links_id', 'id');
    }

}
