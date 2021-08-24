<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use ZipArchive;

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
        $archive_base = route('Category > Archive', 'آرشیو-روزنامه');

        $index = 0;

        if( isset($_GET['version']) && !empty($_GET['version']) ) {

            if(file_exists(public_path("/repository/pages.zip"))) {
                unlink(public_path("/repository/pages.zip"));
            }
            $version = $_GET['version'];
            $zip_file = "pages.zip"; // Name of our archive to download

            $zip = new \ZipArchive();
            $zip->open($zip_file, \ZipArchive::CREATE | \ZipArchive::OVERWRITE);

            for ($i = 1; $i <= 16; $i++) {

                $file = "repository/$version/$i.pdf";
                // Adding file: second parameter is what will the path inside of the archive
                // So it will create another folder called "storage/" inside ZIP, and put the file there.
                $zip->addFile(public_path($file), $file);
            }
            $zip->close();

            // We return the file immediately after download
            return response()->download($zip_file);

//            $zip->addFile('/repository/'.$version."/$i.pdf", "/$i.pdf");


        } else {
            return abort('403', 'version not set. please add version parameter and value to the url.');
//            return header("location: $archive_base");

        }
    }
}
