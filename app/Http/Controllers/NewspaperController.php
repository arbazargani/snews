<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NewspaperController extends Controller
{
    public function ListDir() {
        $dir = 'repository';
        $versions = scandir($dir, 1);
        $versions = array_chunk($versions, 10);
        $versions = isset($_GET['page']) ? $versions[$_GET['page']] : $versions[0];
        return $versions;
    }

    public function Download() {
        //
    }
}
