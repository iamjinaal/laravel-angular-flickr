<?php

namespace App\Classes;


class Flickr
{

	public function sendCurlRequest($url)
	{
		//$url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=fccec971bb644b3018520920996c29e6&format=json&nojsoncallback=1';
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($ch, CURLOPT_HEADER, false);    // we want headers
		curl_setopt($ch, CURLOPT_URL, "set ur url");
		curl_setopt($ch, CURLOPT_ENCODING, 'gzip');
		curl_setopt($ch, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4 );
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_URL,$url);
		$result=curl_exec($ch);
		curl_close($ch);
		$json = json_decode($result, true);
		//echo "<pre>";
		//print_r($json);die;
		return $result;
	}

}

?>