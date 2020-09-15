<?php

class Json
{
    public static function Get_Data($p1)
    {
        global $mysql;
        $data1 = $mysql->query("SELECT * FROM $p1");
        $temp_data = [];
        while ($row = $data1->fetch_assoc()) {
            $temp_data[] = $row;
        }
        echo json_encode($temp_data);
    }
    public static function Get_Data_By_Id($p1, $p2, $id)
    {
        global  $mysql;
        $data1 = $mysql->query("SELECT * FROM $p1 WHERE $p2 = $id");
        $temp_data = [];
        while ($row = $data1->fetch_assoc()) {
            $temp_data[] = $row;
        }
        echo json_encode($temp_data);
    }
    public static function GetServices($p1){
        global  $mysql;
        $services = $mysql->query("SELECT * FROM $p1");
        $data_services = [];
        while ($row = $services->fetch_assoc()) {
            $data_services[] = $row;
        }
        echo json_encode($data_services);

    }
}
