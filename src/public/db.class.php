<?php
header("Access-Control-Allow-Origin: * ");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

class Db
{
    private $server = 'localhost';
    private $db = 'test';
    private $username = 'root';
    private $password = 'root';
    public $conn = null;
        function __construct()
        {
            try
            {
                $this->conn = new PDO('mysql:host='.$this->server.';'.'dbname='.$this->db, $this->username, $this->password);
                $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
              //  return $this->conn;
            }

            catch
            (PDOException $e) {
                die('an error ecoured' . $e->getMessage());
            }

        }



}