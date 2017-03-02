<?php

pg_connect('host=10.0.0.14 dbname=atlas port=5432 user=postgres password=geo1m@fl0ra') || die("Nao conseguiu conectar");

$query = "SELECT 1";
$res = pg_query($query) || die(pg_last_error());



echo "ta ino \r\n";

$arr = pg_fetch_all($res);
if (!$arr) {
    echo pg_result_error();
    exit;
}

print_r($arr);

echo "foi";

pg_close($db);

?>