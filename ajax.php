<?php

header('Content-Type: text/plain');
//header('Content-Type: application/json');

$array = array(
	array("name" => "Paweł", "surname" => "Olesiejuk", "mail" => "pawel.olesiejuk@goyello.com", "currency" => "60€", "datetime" => "25.07.2013 16:00"),
	array("name" => "Paulina", "surname" => "Żmijewska", "mail" => "paulina.zmijewska@goyello.com", "currency" => "60€", "datetime" => "01.08.2013 16:30"),
	array("name" => "Marcin", "surname" => "Kasperski", "mail" => "marcin.kasperski@goyello.com", "currency" => "60€", "datetime" => "08.08.2013 17:00"),
	array("name" => "Sławomir", "surname" => "Zarucki", "mail" => "slawomir.zarucki@goyello.com", "currency" => "60€", "datetime" => "06.06.2006 13:37"),
	array("name" => "Paweł", "surname" => "Olesiejuk", "mail" => "pawel.olesiejuk@goyello.com", "currency" => "60€", "datetime" => "25.07.2013 16:00"),
	array("name" => "Paulina", "surname" => "Żmijewska", "mail" => "paulina.zmijewska@goyello.com", "currency" => "60€", "datetime" => "01.08.2013 16:30"),
	array("name" => "Marcin", "surname" => "Kasperski", "mail" => "marcin.kasperski@goyello.com", "currency" => "60€", "datetime" => "08.08.2013 17:00"),
	array("name" => "Sławomir", "surname" => "Zarucki", "mail" => "slawomir.zarucki@goyello.com", "currency" => "60€", "datetime" => "06.06.2006 13:37")
);

echo json_encode($array);

?>