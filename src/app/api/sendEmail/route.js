import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    // Extrae los datos del cuerpo de la solicitud
    const { name, subject, email, phone, message } = await request.json();

    // Verifica que los datos no estén vacíos
    if (!name || !subject || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ message: "Todos los campos son obligatorios" }),
        { status: 400 }
      );
    }

    // Configuración del transporte de correo
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "alfonsovengoechea@gmail.com", // Tu dirección de correo electrónico
        pass: "yjod juez dvac qynu", // Tu contraseña específica de aplicación
      },
    });

    // Opciones del correo electrónico con formato HTML profesional
    const mailOptions = {
      from: email,
      to: "alfonsovengoechea@gmail.com", // Dirección de correo a la que se enviará el mensaje
      subject: `Contacto desde el formulario: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 10px;">
          <!-- Header -->
          <header style="background-color: #759c32; padding: 20px; border-top-left-radius: 10px; border-top-right-radius: 10px; text-align: center; color: #ffffff;">
            <h1 style="margin: 0; font-size: 24px;">Nuevo mensaje de ${name}</h1>
            <p style="margin: 0; font-size: 16px;">${subject}</p>
          </header>

          <!-- Body -->
          <section style="padding: 20px;">
            <h2 style="color: #2C2E63;">Detalles del contacto</h2>
            <p style="font-size: 16px;"><strong>Nombre:</strong> ${name}</p>
            <p style="font-size: 16px;"><strong>Email:</strong> ${email}</p>
            <p style="font-size: 16px;"><strong>Teléfono:</strong> ${phone}</p>
            <p style="font-size: 16px;"><strong>Mensaje:</strong></p>
            <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #2C2E63;">
              ${message}
            </p>
          </section>

          <!-- Footer -->
          <footer style="background-color: #2C2E63; padding: 10px 20px; text-align: center; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; font-size: 14px; color: #ffffff;">
            <p style="margin: 0;">&copy; 2024 Towers Cem. Todos los derechos reservados.</p>
          </footer>
        </div>
      `,
    };

    // Envía el correo electrónico
    await transporter.sendMail(mailOptions);

    // Respuesta exitosa
    return new Response(
      JSON.stringify({ message: "Correo enviado exitosamente" }),
      { status: 200 }
    );
  } catch (error) {
    // Respuesta en caso de error
    console.error('Error enviando el correo:', error);
    return new Response(
      JSON.stringify({
        message: "Error enviando el correo",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
