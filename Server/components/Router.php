<?php

class Router
{
    private $routes;

    public  function __construct()
    {
        $routesPath = ROOT.'/config/routes.php';
        $this->routes = include($routesPath);
    }

    private function getURI ()
    {
        if (!empty($_SERVER['REQUEST_URI'])) {
            return trim($_SERVER['REQUEST_URI'], '/Server/');
        }
    }

    public function run ()
    {
        // Получить строку запроса
        $uri = $this->getURI();

        // Проверить наличие такого запроса в routes.php
        foreach ($this->routes as $uriPattern => $path) {
            // Сравниваем $uriPattern  и $uri
            if (preg_match("~$uriPattern~", $uri)) {

                // Получаем внутренний путь из внешнего согласно правилу
                $internalRoute = preg_replace("~$uriPattern~", $path, $uri);
                // Определить какой контроллер
                // и action обрабатывают запрос

                $segments = explode('/', $internalRoute);

                $controllerName = array_shift($segments).'Controller'; //array_shift выбирает 1-ый елемент и уничтожает его
                $controllerName = ucfirst($controllerName);

                $actionName = 'action'.ucfirst(array_shift($segments));

                $parameters = $segments; //т.к. после 2-ух array_shift останутся одни параметры, они сюда и запишутся

                // Подключить файл класса-контроллера
                $controllerFile = ROOT . '/controllers/' .
                    $controllerName . '.php';

                $internalRoute = preg_replace("~$uriPattern~", $path, $uri);



                if (file_exists($controllerFile)) {
                    include_once ($controllerFile);
                }
                // Создать обьект, вызвать метод (т.е. action)
                $controllerObject = new $controllerName;
                $result = call_user_func_array(array($controllerObject, $actionName), $parameters);
                if ($result != null) {
                    break;
                }
            }
        }
    }
}