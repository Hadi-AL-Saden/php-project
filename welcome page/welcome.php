
<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/bootstrap.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="user-welcome">
        <h1 class="text-center"> Welcome <?php echo$_SESSION['firstName']." ".$_SESSION['middleName']." ".$_SESSION['lastName']." ".$_SESSION['familyName']; ?></h1>
        <p class="text-center"> We want to remind you that your email is: <?php echo $_SESSION['email']; ?> </p>
        <p> and your phone number is: <?php echo $_SESSION['phoneNumber']; ?></p>


    </div>
</body>
</html>