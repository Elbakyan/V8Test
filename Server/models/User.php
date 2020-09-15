<?php

class User
{
    public static function User_Login_DB($phone, $password)
    {
        global $mysql;

        $result = $mysql->query("SELECT `id` FROM `user` WHERE `phone` = '$phone' AND `password` = '$password'");
        if ($result->num_rows) {
            $_SESSION['user'] = $result->fetch_assoc();
            header('Location: https://elbakyan.am/');

        } else {
            unset($_SESSION['user']);
            UserController::$Error = 'Հեռախոսահամարը կամ Գախտնաբառը սխալ է․․․';
            header('Location: https://elbakyan.am/');
        }


    }
 
    public static function User_Reg_DB($name, $surname, $phone, $email, $password, $password2, $sircle, $city)
    {

        global $mysql;
        $password = md5($password);
        unset($password2);
        if (!empty(UserController::$ErrorReg)) {
            echo json_encode([
                'status' => false,
                'message' => UserController::$ErrorReg
            ]);
            die;
        } else {
            $data = $mysql->query("SELECT `phone` From `user` WHERE `phone` = '$phone'");
            if (!$data->num_rows) {
                $result = $mysql->query("INSERT INTO `user` (
                                `id`, `name`, `surname`, `phone`, 
                                `email`, `password`, `sircle`, 
                                `city`, `img`, `data`) 
                                VALUES (
                                NULL, '$name', '$surname', '$phone', 
                                '$email', '$password', '$sircle', '$city', 
                                'img/user/default/default.svg', CURRENT_TIMESTAMP)");
                echo json_encode([
                    'status' => true,
                    'message' => 'Դուք հաջողությամբ գրանցվել եք․․․'
                ]);
            } else {
                UserController::$ErrorReg = 'Հեռախոսահամարը արդեն զբաղված է․․․';
                echo json_encode([
                    'status' => false,
                    'message' => UserController::$ErrorReg
                ]);
            }
        }
    }
}