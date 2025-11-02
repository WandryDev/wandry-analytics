<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;
    protected $fillable = [
        'eventable_id',
        'eventable_type',
        'type',
        'component',
        'ip',
    ];

    public $timestamps = ['created_at'];
    public $updated_at = null;

    public function eventable()
    {
        return $this->morphTo();
    }
}
