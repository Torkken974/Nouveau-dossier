<?php
    if (isset($_POST['nom'])){
        $nom = $_POST['nom'];
        $email = $_POST['email'];
        echo "Bienvenue $nom";
        echo "<br> Un mail de confirmation a été envoyé à l'adressse $email";
    }
    ?>