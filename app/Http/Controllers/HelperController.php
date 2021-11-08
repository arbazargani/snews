<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class HelperController extends Controller
{
    public function VideoFromThumbnail($address, $name)
    {
        /*
         * source to help
         * https://github.com/PHP-FFMpeg/PHP-FFMpeg
         * composer require php-ffmpeg/php-ffmpeg
         * https://stackoverflow.com/questions/29916963/laravel-unable-to-load-ffprobe
         * https://stackoverflow.com/questions/16597392/how-do-you-get-the-path-to-the-laravel-storage-folder/16597530
         * */
        $ffmpeg = \FFMpeg\FFMpeg::create([
            'ffmpeg.binaries'  => env('FFMPEG_BINARIES'),
            'ffprobe.binaries' => env('FFPROBE_BINARIES')
        ]);
        $file = str_replace(env('APP_URL').'/storage/', '', $address);
        $path = Storage::disk('application_public')->path(str_replace('/', DIRECTORY_SEPARATOR, $file));
        $video = $ffmpeg->open($path);
        $frame = $video->frame(\FFMpeg\Coordinate\TimeCode::fromSeconds(42));
        $frame->save(Storage::disk('application_public')->path("uploads/articles/images/thumbs/$name.jpg"));
        return "uploads/articles/images/thumbs/$name.jpg";
    }
}
