<?php

namespace App\Http\Controllers;
use App\Models\CoursModal;
use Illuminate\Http\Request;

class CoursesContrller extends Controller
{


    function CourseIndex(){
        
    }
   
    function CoursesPage(){
        $CourseData=json_decode( CoursModal::orderBy('id','desc')->get());
        return view('Course',[
            'CourseData'=>$CourseData,
        ]);
        
    }


   
}
