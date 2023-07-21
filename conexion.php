

<?php
// Configuración de la conexión a la base de datos
$servername = "proyecto-final-dev-mydatabase-icespxw4x88c.chtgip7yyc09.us-east-1.rds.amazonaws.co";
$username = "admin";
$password = "12345678";
$dbname = "proyecto-final";

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Consulta SQL para obtener los datos
$sql = "SELECT * FROM nombre_tabla";
$result = $conn->query($sql);

?>

<!DOCTYPE html>
<html>
<head>
    <title>Ejemplo de conexión PHP y MySQL</title>
</head>
<body>

    <h1>Datos desde la base de datos:</h1>

    <?php
    if ($result->num_rows > 0) {
        // Mostrar los datos en una tabla
        echo "<table>";
        echo "<tr><th>cliente</th><th>pedido</th></tr>";

        while($row = $result->fetch_assoc()) {
            echo "<tr><td>".$row["cliente"]."</td><td>".$row["pedido"]."</td></tr>";
        }

        echo "</table>";
    } else {
        echo "No se encontraron datos.";
    }
    ?>

    <?php
    // Cerrar la conexión
    $conn->close();
    ?>

</body>
</html>














?>
 


 

