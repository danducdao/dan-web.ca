<?php

namespace App\Http\Controllers\Movies\Rapports\Excels;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\View;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\IOFactory;
use App\Models\Movies\Film;
use Input;
require_once ('../vendor/autoload.php');

class RapportPrixController extends Controller
{
    public function index()
    {
        return View::make('moviestore/rapports/excels/prix');
    }

    public function send()
    {
        $movies = Film::where('prix',Input::get('prix'))->where('active',1)->get();

        $myMovies = array();
        $myMovies[] = array('Titre','Description','Année de sortie','Prix');

        foreach($movies as $movie)
        { 
            $myMovies[] =  
                 array( 
                        $movie->titre,
                        $movie->description,
                        $movie->anneeSortie,
                        '$' . number_format($movie->prix,2,'.',',')
                 );
        }

        $spreadsheet = new Spreadsheet();
        $spreadsheet->getActiveSheet()
                    ->fromArray($myMovies, NULL,'A1');

        $styleArray = [
            'font' => [
                'bold' => true,
            ],
            'borders' => [
                'bottom' => [
                    'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                ]
            ],
            'alignment' => [
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
            ],
            'fill' => [
                'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_GRADIENT_LINEAR,
                'rotation' => 90,
                'startColor' => [
                    'argb' => 'FFA0A0A0',
                ],
                'endColor' => [
                    'argb' => 'FFFFFFFF',
                ],
            ],
        ];

        $spreadsheet->getActiveSheet()->getStyle('A1:D1')->applyFromArray($styleArray);
        $dernierLigne = $spreadsheet->getActiveSheet()->getHighestRow();
        //Aligner le contenu à droite de la colonne D
        $spreadsheet->getActiveSheet()
                    ->getStyle('D1:D'.$dernierLigne)
                    ->getAlignment()
                    ->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
        //set autosize pour tous les columns
        foreach ($spreadsheet->getWorksheetIterator() as $worksheet) 
        {
            $spreadsheet->setActiveSheetIndex($spreadsheet->getIndex($worksheet));
            $sheet = $spreadsheet->getActiveSheet();
            $cellIterator = $sheet->getRowIterator()->current()->getCellIterator();
            $cellIterator->setIterateOnlyExistingCells(true);
            foreach ($cellIterator as $cell) {
                $sheet->getColumnDimension($cell->getColumn())->setAutoSize(true);
            }
        }
        $writer = new Xlsx($spreadsheet);
        $writer->setPreCalculateFormulas(false);
        $writer->setOffice2003Compatibility(true);
      
        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        header('Content-Disposition: attachment;filename="rapport_prix.xlsx"');
        header('Cache-Control: max-age=0');

        $writer = \PhpOffice\PhpSpreadsheet\IOFactory::createWriter($spreadsheet, 'Xlsx');
        ob_end_clean();
        $writer->save('php://output');
        exit;
    }
}
