<?php

namespace App\Policies;

use App\Models\Registry;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class RegistryPolicy
{
    use HandlesAuthorization;

    public function read(User $user, Registry $registry): bool
    {
        if($registry->user->id !== $user->id) {
            return false;
        }
        return true;
    }
}
