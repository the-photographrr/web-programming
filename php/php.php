<?php

$consnum = $_GET["cnum"];
$consname = $_GET["cname"];
$preread = $_GET["pread"];
$curread = $_GET["cread"];
$nit = $cread - $pread;

if($unit < 100 ){
    $amt = $unit * 3;
}
else if(100 <= $uni && $unit <= 200)
{
    $amt = $unit * 4;
}
else if(100 <= $uni && $unit <= 300)
{
    $amt = $unit * 5;
}
else
{
    $amt = $unit * 6;
}

echo "<table width ="40%" border="0" cellspacing="0" cellpadding= "10">
    <tr><th colspan="2"><h2>e-Bill</h2></th>
    </tr>";
echo "<tr>
    <td>Consumer Number</td>
    <td>$consnum</td>
    </tr>";
echo "<tr>
    <td>Consumer Name</td>
    <td>$consname</td>
    </tr>";
echo "<tr>
    <td>Previous Reading</td>
    <td>$preread</td>
    </tr>";
echo "<tr>
    <td>Current Reading</td>
    <td>$curread</td>
    </tr>";>