<?php 

namespace App\Classes\Facade;
//namespace app\Custom\JpFacades;
use Illuminate\Support\Facades\Facade;

class FlickrFacade extends Facade
{

	protected static function getFacadeAccessor()
	{
		return 'Flickr';
	}

}


?>