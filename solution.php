<?php
require_once 'Problem.php';
//echo(json_encode($_REQUEST));

//echo "<pre>";
$funcao = $_POST['funcao'];
$variaveis = $_POST['variaveis'];
$objetivo = $_POST['objetivo'];
$restricoes = $_POST['restricoes'];
$b = $_POST['b'];
//echo json_encode($b);

// echo("funcao -> ".$funcao);echo "<br>";
// echo("variaveis -> ".$variaveis);echo "<br>";
// echo("objetivo -> ".$objetivo);echo "<br>";
// echo("restricoes -> ".$restricoes);echo "<br>";

$problem = new Problem($variaveis, $restricoes, $funcao, $objetivo, $b);
$problem->resolve();
//echo json_encode($problem->getResult());



?>