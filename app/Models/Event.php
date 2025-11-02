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
        'created_at',
    ];

    public $timestamps = false;
    const CREATED_AT = 'created_at';

    public function eventable()
    {
        return $this->morphTo();
    }
}
