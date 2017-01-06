<?php
	function pr($data = array()){
		echo "<pre>";
		print_r($data);
		echo "</pre>";
	}
	function successAlert($msg){
		return '<div class="alert alert-success text-center" style="margin-bottom:0;font-weight:bold;font-size:18px;">'.$msg.'</div>';
	}
	function primaryAlert($msg){
		return '<div class="alert alert-info text-center" style="margin-bottom:0;font-weight:bold;font-size:18px;">'.$msg.'</div>';
	}

	function errorAlert($msg){
		return '<div class="alert alert-danger text-center" style="margin-bottom:0;font-weight:bold;font-size:18px;">'.$msg.'</div>';
	}

	function find($type = "", $data){
		$type = strtolower($type);

		//pr($data);
		$dataArr = array();
		switch($type){
			case("list"):

			

			break;

			case("all"):

			break;

			case("first"):

			break;
		}
		pr($dataArr);

	}

?>