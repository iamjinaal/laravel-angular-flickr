@extends('layouts.master')

@section('content')
<div class="container">

	<div class="row">
		
		<div class="col-lg-4 col-sm-6 col-xs-12">

		<?php


foreach($im['photos']['photo'] as $photo) { 
	echo '<img src="' . 'http://farm' . $photo["farm"] . '.static.flickr.com/' . $photo["server"] . '/' . $photo["id"] . '_' . $photo["secret"] . '.jpg">'; 
}

		?>

		</div>		


	</div>
</div>
@endsection

