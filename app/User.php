<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name','username', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function article()
    {
        return $this->hasMany('App\Article');
    }
    public function comment()
    {
        return $this->hasMany('App\Comment');
    }


    /**
     * Rule access.
     *
     * @var array
     */

    public function getRule()
    {
        return User::find(Auth::id())->managing_rule;
    }

    public function CanEditArticles() {
        return ($this->getRule() == 'editor' || $this->getRule() == 'system') ? true : false;
    }

    public function CanEditOtherUserArticles() {
        return ($this->getRule() == 'editor' || $this->getRule() == 'system') ? true : false;
    }

    public function CanRemoveOtherUsersArticles() {
        return ($this->getRule() == 'editor') ? false : true;
    }

    public function CanEditPages() {
        return ($this->getRule() == 'system') ? true : false;
    }

    public function CanEditCategories() {
        return ($this->getRule() == 'system') ? true : false;
    }

    public function CanEditTags() {
        return ($this->getRule() == 'system') ? true : false;
    }

    public function CanEditComments() {
        return ($this->getRule() == 'system') ? true : false;
    }

    public function CanEditOtherUsers() {
        return ($this->getRule() == 'system') ? true : false;
    }

    public function CanManageAds() {
        return ($this->getRule() == 'system') ? true : false;
    }

    public function CanManageSettings() {
        return ($this->getRule() == 'system') ? true : false;
    }
}
