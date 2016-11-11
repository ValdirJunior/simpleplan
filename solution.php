<?php
//echo(json_encode($_REQUEST));

echo "<pre>";
$funcao = $_POST['funcao'];
$variaveis = $_POST['variaveis'];
$objetivo = $_POST['objetivo'];
$restricoes = $_POST['restricoes'];

echo("funcao -> ".$funcao);echo "<br>";
echo("variaveis -> ".$variaveis);echo "<br>";
echo("objetivo -> ".$objetivo);echo "<br>";
echo("restricoes -> ".$restricoes);echo "<br>";
?>