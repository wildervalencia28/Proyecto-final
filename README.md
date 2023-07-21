# Proyecto-final
 computación en la nube
La idea con este proyecto es reforzar los conocimientos que hemos adquirido durante cada
una de las clases y también incentivar un poco a la investigación propia y resolución de
problemas que puedan presentarse.
La idea es crear una infraestructura completa utilizando CloudFormation para garantizar que
todos los recursos creados estén en un solo lugar.
Vamos a crear una aplicación completa para la toma de pedidos a domicilio de un
restaurante. No deben entrar en mucho detalle en las tablas y en el código como tal, lo más
importante es la infraestructura.
Una persona podrá llamar a hacer un pedido, de un pedido se solicitará la siguiente
información:
● Cliente:
○ Nombre completo
○ Dirección
○ Teléfono
○ correo electrónico
● Pedido
○ Producto
○ Cantidad
○ Valor unidad
○ Valor total
Una vez el cliente realice un pedido debe recibir una notificación a su correo electrónico
donde se le muestre el detalle del pedido y dicho pedido será puesto en cola para ser
procesado y enviado.
Los dueños del restaurante deben poder acceder a través un api-gateway que tendrá
solamente dos servicios:
● Post: Donde se cree el pedido
● Get: Donde se pueda buscar un pedido por id
Cada pedido debe ser guardado en un bucket de respaldo. Dichos archivos deben ser
eliminados de forma automática del bucket cada 2 días.
Observaciones
1. Pueden utilizar el lenguaje que quieran para el funcionamiento del aplicativo.
2. Todos los elementos deben ser creados en AWS.
3. Se debe utilizar una base de datos relacional con motor MySQL.
4. La cola debe tener un tiempo de espera de 15 segundos, es decir, cada 15
segundos se procesarán los pedidos acumulados.
5. Para este proyecto deben usar un framework llamado
serverless(https://www.serverless.com/) el cual les facilitará la creación de cada uno
de los recursos.
6. El proyecto debe ser subido a github o gitlab con su respectivo README.md
7. Valor: Proyecto: 50%, Sustentación: 50%

# Insttrucciones para la instalación del proyecto

1. Se debe instalar en la Pc el siguiente archivo
   [https://nodejs.org/dist/v18.16.1/node-v18.16.1-x64.msi]

1. Luego ingresa el comando **npm install -g serverless**
2. verifica la version server con el comando **serverless --version**
   **npm --version**
3.continua creando la carpeta donde se van a almacenar los datos que necesitamos para el proyecto a traves de la consola

*ejemplo*: **C: cd\Users\arley\Desktop\proyectol**
**C:\Users\arley\Desktop\proyecto> mkdir proyecto-final**
**C:\Users\arley\Desktop\proyecto> cd proyecto-final**

4. ingresa el siguiente código: **serverless create --template aws-nodejs**
5. ingresa el siguiente código **serverles deploy**
# Como resultado tendremos en aws creada una base de datos, una cola, con sus respectivos grupos de seguridad

**como siguiente punto debemos abrir nuestra base de datos, enlazarla con la base de datos que tenemos en nuestro aws(RDS) y llenar los campos corde con nustroa codigos de visual**

*Por otro lado tebemos los puntos más importnates que es la configuración de nuestra base de datos con los codigos que tenemos en html y aparte tambien que nos almacene los datos ingresados para que funcione correctamnte nuestra aplicación*

# Programas usados en el poyecto:
1. **aws de Amazon**
2. **MySQL farmework**
3. **visual studio**
4. **node-js**

   # Creditos:

   **Wilder Arley Vlencia Vinasco**
   **Riosucio, Caldas**



