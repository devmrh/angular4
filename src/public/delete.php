<?php

include('db.class.php');
$conn = new Db();


$data = json_decode(file_get_contents("php://input"));

$sql = "delete from users where id = '$data->id'";
$stmt = $conn->conn->prepare($sql);
$stmt->execute();

if ($stmt->fetchColumn()) {
    echo "successfully deleted the row";

} else {
    die("an error here");
}

$conn->conn = null;


