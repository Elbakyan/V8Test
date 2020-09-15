<?php


class JsonController
{

    public function actionLocation()
    {
        require ROOT . '/models/Json.php';
        Json::Get_Data('location_sircle');
        return true;
    }
    public function actionGetLocationById()
    {


        require ROOT . '/models/Json.php';
        if (!empty($_POST)){
            Json::Get_Data_By_Id('location_city', 'sircle_id', $_POST['id']);
        }else{
            Json::Get_Data_By_Id('location_city', 'sircle_id', $_POST['id']);
        }
        return true;
    }
    public function actionAuto()
    {
        require ROOT . '/models/Json.php';
        Json::Get_Data('mark');
        return true;
    }
    public function actionGetAutoById()
    {

        require ROOT . '/models/Json.php';
        if (!empty($_POST)){
            Json::Get_Data_By_Id('model', 'id_mark', $_POST['id']);
        }
        return true;
    }
    public function actionGetServices(){
        require ROOT . '/models/Json.php';

        Json::GetServices('service');
        return true;
    }

}
