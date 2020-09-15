<?php
session_start();
header("Access-Control-Allow-Origin: *");
define('ROOT', dirname(__FILE__));
// 1. Общие настройки
//
//ini_set('display_errors', 1);
//error_reporting(E_ALL);

// 2. Подключение файлов системы

require_once ROOT .'/components/Router.php';



// 3. Установка соединения с БД
require_once(ROOT.'/config/DB.php');

$mysql = DB::Conect();
// 4. Вызор Router

$router = new Router();
$router->run();


?>
