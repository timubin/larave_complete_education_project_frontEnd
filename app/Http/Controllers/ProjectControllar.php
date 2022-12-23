<?php

namespace App\Http\Controllers;
use App\Models\ProjectsModel;
use Illuminate\Http\Request;

class ProjectControllar extends Controller
{
    function ProjectPage(){
        $ProjectData=json_decode(ProjectsModel::orderBy('id','desc')->get());
        return view('Project',[
            'ProjectData'=>$ProjectData
        ]);
    }
}
