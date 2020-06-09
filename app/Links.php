<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Links extends Model
{
    protected $table = 'links';


    public function visitors() {
        return $this->hasMany('App\\LinksTracker', 'links_id', 'id');
    }
}
