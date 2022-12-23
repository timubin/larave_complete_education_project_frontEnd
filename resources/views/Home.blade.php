@extends('Layout.app')
@section('title')
Home
@endsection
@section('content')

@include('Component.HomeBannar')
@include('Component.HomeService')
@include('Component.HomeCourse')
@include('Component.HomeProjects')
@include('Component.HomeContact')
@include('Component.HomeReview')

@endsection