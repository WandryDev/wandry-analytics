<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\PersonalAccessToken;

/**
 * @property mixed $user
 */
class Registry extends Model
{
    use HasFactory;

    protected $table = 'registries';

    protected $fillable = [
        'name',
        'url',
        'user_id',
    ];


    public function events()
    {
        return $this->morphMany(Event::class, 'eventable');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function token()
    {
        return $this->hasOne(PersonalAccessToken::class, 'registry_id');
    }
}
