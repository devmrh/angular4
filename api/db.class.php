<?php
header("Access-Control-Allow-Origin: * ");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

class Db
{

    function __construct()
    {

        define('DB_HOST', getenv('OPENSHIFT_MYSQL_DB_HOST'));
        define('DB_USER', getenv('OPENSHIFT_MYSQL_DB_USERNAME'));
        define('DB_PASS', getenv('OPENSHIFT_MYSQL_DB_PASSWORD'));
        define('DB_BASE', 'test');
        define('DB_PORT', getenv('OPENSHIFT_MYSQL_DB_PORT'));

        $dsn = 'mysql:dbname=' . DB_BASE . ';host=' . DB_HOST . ';port=' . DB_PORT;
        $dbh = new PDO($dsn, DB_USER, DB_PASS);
        $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $dbh;
    }
}
//class Db
//{
//    private $server = 'localhost';
//    private $db = 'test';
//    private $username = 'root';
//    private $password = 'root';
//    public $conn = null;
//        function __construct()
//        {
//            try
//            {
//                $this->conn = new PDO('mysql:host='.$this->server.';'.'dbname='.$this->db, $this->username, $this->password);
//                $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//              //  return $this->conn;
//            }
//
//            catch
//            (PDOException $e) {
//                die('an error ecoured' . $e->getMessage());
//            }
//
//        }
//
//
//
//}