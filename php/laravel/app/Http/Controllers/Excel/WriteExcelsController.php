<?php

/*
* Program : class WriteExcelController
* Écrit par : Dan Duc Dao
*/

namespace App\Http\Controllers\Excel;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\DB;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\IOFactory;
use App\Models\Movies\Film;
use App\Models\Movies\Acteur;
use Input;

class WriteExcelsController extends Controller
{
    public function index()
    {
        $acteurs = Acteur::where('active',"=",1)
                           ->select(DB::raw("CONCAT(prenom,' ',nom) AS nom"),"id")
                           ->pluck("nom","id");
                           
        return View::make('excel/writeExcel',compact('acteurs'));
    }

    public function writeXLSX()
    {
        $movies = Film::where('prix',Input::post('prix'))
                        ->where('active',1)
                        ->get();

        $myMovies = array();

        $myMovies[] = array('Titre',
                            'Description',
                            'Année de sortie',
                            'Prix',
                            'Langue',
                            'Durée de location',
                            'Longeur',
                            'Coût de remplacement',
                            'Évaluation',
                            'Nouveauté');

        foreach($movies as $movie)
        { 
            $myMovies[] =  
                 array( 
                        $movie->titre,
                        $movie->description,
                        $movie->anneeSortie,
                        sprintf("$%s", number_format($movie->prix,2,'.',',')),
                        $movie->langue->nom,
                        $movie->dureeLocation,
                        $movie->longeur,
                        sprintf("$%s",  number_format($movie->coutRemplacement,2,'.',',')),
                        $movie->evaluation,
                        $movie->nouveaute
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

        $spreadsheet->getActiveSheet()->getStyle('A1:J1')->applyFromArray($styleArray);

        $dernierLigne = $spreadsheet->getActiveSheet()->getHighestRow();

        //Aligner le contenu à droite de la colonne D
        $spreadsheet->getActiveSheet()
                    ->getStyle('D1:D'.$dernierLigne)
                    ->getAlignment()
                    ->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);

        $spreadsheet->getActiveSheet()
                    ->getStyle('H1:H'.$dernierLigne)
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
        header('Content-Disposition: attachment;filename="testXLSX.xlsx"');
        header('Cache-Control: max-age=0');

        $writer = \PhpOffice\PhpSpreadsheet\IOFactory::createWriter($spreadsheet, 'Xlsx');
        ob_end_clean();
        $writer->save('php://output');
        exit;
    }

    public function writeCSV()
    {
        $acteur = Acteur::where('id',Input::post('acteur'))->where('active',1)->firstOrFail();

        $myMovies = array();

        foreach($acteur->films as $movie)
        { 
            $myMovies[] =  
                 array( 
                        $movie->titre,
                        $movie->description,
                        $movie->anneeSortie,
                        sprintf("$%s", number_format($movie->prix,2,'.',',')),
                        $movie->langue->nom,
                        $movie->dureeLocation,
                        $movie->longeur,
                        sprintf("$%s",  number_format($movie->coutRemplacement,2,'.',',')),
                        $movie->evaluation,
                        $movie->nouveaute
                    );
        }
    
        $spreadsheet = new Spreadsheet();
        
        $spreadsheet->getActiveSheet()
                    ->fromArray($myMovies, NULL,'A1');

        $writer = new \PhpOffice\PhpSpreadsheet\Writer\Csv($spreadsheet);
        $writer->setDelimiter(';');
        $writer->setEnclosure('');
        $writer->setLineEnding("\r\n");
    
        header('Content-Type: application/csv');
        header('Content-Disposition: attachment;filename="testCSV.csv"');
        header('Cache-Control: max-age=0');

        $writer = \PhpOffice\PhpSpreadsheet\IOFactory::createWriter($spreadsheet, 'Csv');
        ob_end_clean();
        $writer->save('php://output');
        exit;
    }
}
