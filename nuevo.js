const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Crear una instancia del cliente de WhatsApp
const client = new Client();

// Evento para generar el QR para escanear con WhatsApp Web
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });  // Muestra el QR en la terminal
});

// Evento cuando el cliente está listo
client.on('ready', () => {
    console.log('Bot de WhatsApp está listo!');
});

// Evento para recibir y manejar los mensajes
client.on('message', async (message) => {
    console.log(`Nuevo mensaje recibido: ${message.body}`);

    // Si el mensaje es "hola", responde "¿Cómo estás?"
    if (message.body.toLowerCase() === 'hola') {
        await message.reply('¿Cómo estás?');
    }

     // Si el mensaje es "hola", responde "¿Cómo estás?"
    if (message.body.toLowerCase() === 'Formas de pago') {
        await message.reply('
                            👉🏻Zelle, Zinli, Binance (USDT):
                            Ac.gomez195@gmail.com
                            
                            👉🏻PayPal:
                            Andreagomezlista@gmail.com
                            
                            👉🏻Transferencia en Bs: 
                            Andrea Gomez 
                            01050251910251110249 
                            V-27795509 
                            Mercantil
                            
                            👉🏻Pago móvil:
                            04123642949
                            27795509
                            Mercantil
                            
                            ✅Recuerda enviarnos el comprobante de pago por esta vía
        ');
    }
});

// Iniciar sesión del cliente
client.initialize();
