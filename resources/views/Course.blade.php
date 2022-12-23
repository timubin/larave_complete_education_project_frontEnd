

@extends('Layout.app')
@section('title')
Courses
@endsection
@section('content')
@include('Component.CoursePageTopBanner')
@include('Component.AllCourse')

@endsection