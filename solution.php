<?php
require_once 'Problem.php';
//echo(json_encode($_REQUEST));

//echo "<pre>";
$funcao = $_POST['funcao'];
$variaveis = $_POST['variaveis'];
$restricoes = $_POST['restricoes'];
$b = $_POST['b'];
$iteracoes = $_POST['iteracoes'];
//echo json_encode($b);

// echo("funcao -> ".$funcao);echo "<br>";
// echo("variaveis -> ".$variaveis);echo "<br>";
// echo("objetivo -> ".$objetivo);echo "<br>";
// echo("restricoes -> ".$restricoes);echo "<br>";

$problem = new Problem($variaveis, $restricoes, $funcao, $b, $iteracoes);
$problem->resolve();
//echo json_encode($problem->getResult());



?>