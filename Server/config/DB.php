<?php

class DB {
    public static function Conect() {

        $db = require_once ROOT .'/config/db_info.php';
    
        $conect = new mysqli(
            $db['host'], 
            $db['user_name'], 
            $db['user_pass'],
            $db['db_name']
        );
    
        $conect->set_charset('utf8');
        if ($conect->connect_error) {die("conection failed: " . $conect->conectect_error);}

        return $conect;
    }
}
   
    
?>