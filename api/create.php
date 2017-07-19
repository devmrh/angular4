<?php

include ("db.class.php");

$conn = new Db();

$data = json_decode(file_get_contents("php://input"));

if (isset($data->name) && isset($data->username)) {
    $sql = "insert into users set 
        `name`= '$data->name',
        `username`= '$data->username',
        `email`= '$data->email',
        `phone`= '$data->phone'
";
    $stmt = $conn->conn->prepare($sql);
    if ($stmt->execute()){
        return;
    }else{
        echo "error when interacting with db";
    }
}

$conn->conn = null;

//end
