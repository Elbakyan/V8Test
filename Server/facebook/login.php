<?php
require '../vendor/autoload.php';
$var = require './config.php';

$fb = new Facebook\Facebook([
    'app_id' => $var['id'],
    'app_secret' => $var['secret'],
    'default_graph_version' => 'v2.10',
]);

$helper = $fb->getRedirectLoginHelper();

$permissions = ['email']; // Optional permissions
$loginUrl = $helper->getLoginUrl($var['redirect'], $permissions);

echo '<a href="' . $loginUrl . '">Log in with Facebook!</a>';
?>