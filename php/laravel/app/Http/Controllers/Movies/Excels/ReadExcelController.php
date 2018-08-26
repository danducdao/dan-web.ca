<?php

/*
* Program : class ReadExcelController
* Écrit par : Dan Duc Dao
*/

namespace App\Http\Controllers\Movies\Excels;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use \PhpOffice\PhpSpreadsheet\IOFactory;
use App\Classes\MyReadFilter;
use Illuminate\Support\Facades\View;

class ReadExcelController extends Controller
{
    public function readXSLX()
    {
        $inputFileType = 'Xlsx';
        $inputFileName = base_path().'/public/SampleData.xlsx';

        $filterSubset = new MyReadFilter(1, 44, range('A', 'G'));
        $reader = IOFactory::createReader($inputFileType);
        $reader->setLoadSheetsOnly('SalesOrders');
        $reader->setReadFilter($filterSubset);
        $spreadsheet = $reader->load($inputFileName);
        $salesOrders = $spreadsheet->getActiveSheet()->toArray(null, true, true, true);

        return View::make('moviestore/excels/readXSLX',compact('salesOrders'));
    }

    public function readCSV()
    { 
        $inputFileType = 'Csv';
        $inputFileName = base_path().'/public/SampleCSVFile.csv';
        
        $reader = IOFactory::createReader($inputFileType);
        $spreadsheet = $reader->load($inputFileName);

        $results = $spreadsheet->getActiveSheet()->toArray(null, true, true, true);

        return View::make('moviestore/excels/readCSV',compact('results'));
       
    }
}
