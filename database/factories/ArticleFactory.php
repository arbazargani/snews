<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Article;
//use Faker\Generator as Faker;
use Ybazli\Faker\Facades\Faker as FaFaker;

$factory->define(Article::class, function () {
    return [
        'title' => \Ybazli\Faker\Facades\Faker::sentence(),
        'slug' => \Ybazli\Faker\Facades\Faker::word() . '-' . \Ybazli\Faker\Facades\Faker::city(),
        'content' => \Ybazli\Faker\Facades\Faker::paragraph(),
        'meta_description' => \Ybazli\Faker\Facades\Faker::paragraph(),
        'meta_robots' => 'index, follow',
        'category_id' => 1,
        'user_id' => 1,
        'views' => rand(1, 500),
        'cover' => 'https://picsum.photos/id/' . rand(1, 270) . '/700/500',
        'state' => 1
    ];
});
