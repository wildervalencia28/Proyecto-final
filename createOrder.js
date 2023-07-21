const AWS = require('aws-sdk');
const ses = new AWS.SES();

module.exports.handler = async (event) => {
    // Obtener los datos del pedido del evento recibido

    // Crear una instancia del servicio SQS
    const sqs = new AWS.SQS();

    // Configurar los parámetros del mensaje
    const params = {
        MessageBody: JSON.stringify({ /* Datos del pedido */ }),
        QueueUrl: 'https://sqs.us-east-1.amazonaws.com/952827878726/order-queue' // Reemplaza con tu URL de la cola
    };

    try {
        // Enviar el mensaje a la cola
        await sqs.sendMessage(params).promise();

        // Enviar el correo electrónico al cliente
        const emailParams = {
            Destination: {
                ToAddresses: ['fernandavinasco2@gmail.com'] // Reemplaza con la dirección de correo electrónico del cliente
            },
            Message: {
                Body: {
                    Text: {
                        Data: '¡Gracias por tu pedido!' // Reemplaza con el cuerpo del mensaje que deseas enviar
                    }
                },
                Subject: {
                    Data: 'Confirmación de pedido' // Reemplaza con el asunto del correo electrónico
                }
            },
            Source: 'arley222016@gmail.com' // Reemplaza con tu dirección de correo electrónico
        };

        await ses.sendEmail(emailParams).promise();

        // Retornar la respuesta al cliente
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Pedido creado exitosamente' })
        };
    } catch (error) {
        // En caso de error, manejarlo adecuadamente
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error al crear el pedido' })
        };
    }
};