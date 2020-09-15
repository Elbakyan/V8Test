<?php


class UserController
{
    public static $Error = [];
    public static $ErrorReg = [];

    public function actionLogin()
    {


        require ROOT . '/models/User.php';
        if (!empty($_POST)) {
            if (strlen($_POST['phone'] ) <= 11) {
                UserController::$Error = 'Հեռախոսահամարը սխալ է․․․';
            }
            if (strlen($_POST['password']) < 6) {
                UserController::$Error = 'Գախտնաբաոը պետք է լինի նվազագույնը 6 նիշ․․․';
            }
            User::User_Login_DB($_POST['phone'], md5($_POST['password']));
        }else{
            header('Location: https://elbakyan.am/');
        }


        return true;
    }
    public function actionReg()
    {

        require ROOT . '/models/User.php';
        if (!empty($_POST)){

            if (strlen($_POST['name'] ) < 3) {
                UserController::$ErrorReg = 'Անունը սխալ է․․․';
            }
            if (strlen($_POST['surname']) < 3) {
                UserController::$ErrorReg = 'Ազգանունը սխալ է․․․';
            }
            if (strlen($_POST['phone'] ) < 11) {
                UserController::$ErrorReg = 'Հեռախոսահամարը սխալ է․․․';
            }
            if (strlen($_POST['email']) < 6) {
                UserController::$ErrorReg = 'E-mail սխալ է․․․';
            }
            if (strlen($_POST['password'] ) < 6) {
                UserController::$ErrorReg = 'Գախտնաբաոը պետք է լինի նվազագույնը 6 նիշ․․․';
            }
            if ($_POST['password'] != $_POST['password2']) {
                UserController::$ErrorReg = 'Գախտնաբառերը չեն համապատասխանում․․․';
            }
            if ($_POST['sircle'] ==  '') {
                UserController::$ErrorReg = 'Անհրաժեշտ է նշել տարածաշրջանը․․․';
            }
            if ($_POST['city'] == '') {
                UserController::$ErrorReg = 'Անհրաժեշտ է նշել քաղաքը կամ շրջանը․․․';
            }
            call_user_func_array('User::User_Reg_DB', $_POST);
        }


        return true;
    }
    public function actionExist()
    {
        global $mysql;


        if (!empty($_SESSION)) {

            $id = $_SESSION['user']['id'];
             $res = $mysql->query("SELECT `name`, `surname`,`phone`,`email`,`sircle`,`city`,`img` FROM `user` WHERE `id` = '$id' ");

            echo json_encode([
                'status' => true,
                'id' => $id,
                'data' => $res->fetch_assoc()
            ]);
            die;
        } else {
            echo json_encode([
                'status' => false,
            ]);
        }
        return true;
    }
    public function actionLogout()
    {

        unset($_SESSION['user']);
        session_unset();
        session_destroy();
        header('Location: https://elbakyan.am/');
        return true;
    }
    public function actionUpdate(){
        $Error = [];
        global  $mysql;
        if (!empty($_POST)){

           $mysql->query("UPDATE `user` SET 
                                                `name` = '$_POST[name]',  
                                                `surname` = '$_POST[surname]', 
                                                `phone` = $_POST[phone], 
                                                `email` = '$_POST[email]' 
                                                WHERE `user`.`id` = '$_POST[id]'");

            if (!empty($_POST['password']))  {
                if ($_POST['password'] != $_POST['password2']){
                    $Error[] = 'Գաղտնաաբառերը չեն համապատասխանում․․․';
                }else{
                    $_POST['password'] = md5($_POST['password']);
                    $res = $mysql->query("UPDATE `user` SET 
                                                `password` = '$_POST[password]' 
                                                WHERE `user`.`id` = '$_POST[id]'");
                }
         }
            if (!empty($_FILES['avatar']['name'])){
                $tmp_img_name = explode('/',$_FILES['avatar']['type']);
                if (
                    $tmp_img_name[1] == 'jpeg' ||
                    $tmp_img_name[1] == 'jpg' ||
                    $tmp_img_name[1] == 'png' ||
                    $tmp_img_name[1] == 'svg')
                {

                    $img_name  = ROOT . '/img/user/avatar/'.'-'.time(). '.'.$tmp_img_name[1];
                    $img_name_for_db = 'https://elbakyan.am/Server/img/user/avatar/'.'-'.time().'.'.$tmp_img_name[1];

                    // create link from delite img in server
                    $tmp_link = $mysql->query("SELECT `img` FROM `user` WHERE `id` = '$_POST[id]'");
                    $array_links = explode('-', $tmp_link->fetch_assoc()['img']);
                    $link_from_delite_img ='-' . $array_links[1];
                    $path = './img/user/avatar/'.$link_from_delite_img ;

                    $mysql->query("UPDATE `user` SET 
                                                `img` = '$img_name_for_db' 
                                                WHERE `user`.`id` = '$_POST[id]'");
                    move_uploaded_file($_FILES['avatar']['tmp_name'],$img_name);
                    unlink($path);


                }else{
                    $Error[] = 'Ներբեռնել միայն jpeg,jpg,png,svg ֆորմատի լուսանկար';
                }


            }else{
                $mysql->query("UPDATE `user` SET 
                                                `img` = '$_POST[img]' 
                                                WHERE `user`.`id` = '$_POST[id]'");
            }
            if (!empty($Error)){
                echo json_encode([
                    'status' => false,
                    'message' => $Error[0]
                ]);
            }else{
                echo json_encode([
                    'status' => true,
                    'message' => 'Տվյալները փոփոխված են․․․'
                ]);
            }
        }
        return true;
    }
}
