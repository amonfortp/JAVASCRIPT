<?php

if(isset($_POST["numero"])){
    $numero = $_POST["numero"];
    
    for($i = $numero -1; $i > 1; $i--){
        if(($numero % $i) == 0){
            echo 1;
        }
    }

    echo 0;

}