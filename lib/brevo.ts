import * as brevo from "@getbrevo/brevo";

// Crear instancia de la API de emails transaccionales
const apiInstance = new brevo.TransactionalEmailsApi();

// Establecer la clave API de Brevo correctamente
apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY as string,
);

interface Params {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function sendEmail({ name, email, phone, message }: Params) {
  try {
    const smtpEmail = new brevo.SendSmtpEmail();

    smtpEmail.subject = `Solicitud de contacto de ${name}`;

    // Quién recibe el email
    smtpEmail.to = [
      { email: "jgelvizjaimes13@gmail.com", name: "Juan David Gelviz" },
    ];

    smtpEmail.htmlContent = `
            <html>
  <head>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        background-color: #f4f4f4; /* Beige */
        margin: 0;
        padding: 0;
      }
      .email-container {
        width: 100%;
        max-width: 600px;
        margin: 30px auto;
        background-color: #ffffff; /* Blanco */
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        border: 1px solid #e2e2e2;
      }
      .email-header {
        background-color: #d4b29a; /* Café claro */
        padding: 20px;
        color: #ffffff;
        text-align: center;
      }
      .email-header h2 {
        margin: 0;
        font-size: 24px;
      }
      .email-body {
        padding: 20px;
        color: #333333; /* Negro suave */
      }
      .email-body p {
        margin: 10px 0;
        font-size: 16px;
      }
      .email-body strong {
        color: #3e2a47; /* Café oscuro */
      }
      .footer {
        background-color: #202020; /* Café oscuro */
        color: #ffffff;
        text-align: center;
        padding: 15px;
        font-size: 12px;
      }
      .footer a {
        color: #ffffff;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="email-header">
        <h2>Nuevo mensaje de contacto</h2>
      </div>
      <div class="email-body">
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong><br>${message}</p>
      </div>
      <div class="footer">
        <p>&copy; 2024 Maestros Tapiceros. Todos los derechos reservados.</p>
        <p>Si tienes alguna duda, no dudes en <a href="mailto:info@maestrostapiceros.com">contactarnos</a>.</p>
      </div>
    </div>
  </body>
</html>

        `;

    // Quién envía el email
    smtpEmail.sender = {
      name: "Pagina Maestros Tapiceros",
      email: "jgelvizjaimes15@gmail.com",
    };

    //AHI TOCA PONER LA CUENTA DE ELLOS PERO CREAR UNA SOLO PARA LA PAGINA O PONEMOS LA MISMA QUE ENVIE Y RECIBA LOS CORREOS QUE ENVIA LA PAGINA JAAJ

    // Enviar el correo
    await apiInstance.sendTransacEmail(smtpEmail);
  } catch (error) {
    console.error("Error al enviar el email:", error);
  }
}
