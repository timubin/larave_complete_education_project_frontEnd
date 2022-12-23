<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactModel extends Model
{
    use HasFactory;
    use HasFactory;
    public $table='contact';
    public $primaryKey='id';
    public $incrementiog=true;
    public $keyType='int';
    public $timestamps=false;

}
