<?php
$url = "https://de.wikiquote.org/w/api.php?action=query&prop=extracts&format=json&explaintext=&exsectionformat=plain&redirects=&titles=Arthur_Schopenhauer";
$json = file_get_contents($url);
$data = json_decode($json,true);

$data = array_pop($data['query']['pages']);
echo $data['extract'];
