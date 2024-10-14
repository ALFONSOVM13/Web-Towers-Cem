import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const {
      clientType,
      name,
      lastName,
      email,
      telephone,
      requestType,
      details,
    } = await request.json();

    // Verifica que los datos no estén vacíos
    if (
      !clientType ||
      !name ||
      !lastName ||
      !email ||
      !telephone ||
      !requestType ||
      !details
    ) {
      return new Response(
        JSON.stringify({ message: "Todos los campos son obligatorios" }),
        { status: 400 }
      );
    }

    // Configuración del transporte de correo
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "towercem@gmail.com", 
        pass: "lfbx tcok rqeq ydrs", 
      },
    });

    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: "alfonsovengoechea@gmail.com", // Tu dirección de correo electrónico
    //     pass: "cwhp syvi ykxn kqkv", // Tu contraseña específica de aplicación
    //   },
    // });
    // Opciones del correo electrónico para notificar a Towers Cem
    const mailOptionsToTowers = {
        from: email,
        to: "towercem@gmail.com",
        subject: `Solicitud de Cotización: ${name} - ${requestType}`,
        html: `
          <div style="font-family: 'Arial', sans-serif; max-width: 700px; margin: 0 auto; border: 1px solid #d3d3d3; border-radius: 10px; background-color: #ffffff; padding: 20px; color: #343a40;">
            <!-- Header -->
            <div style="background-color: #2C2E63; padding: 20px; text-align: center; border-top-left-radius: 10px; border-top-right-radius: 10px;">
              <h1 style="color: #ffffff; font-size: 26px; margin: 0;">Solicitud de Cotización</h1>
            </div>
            <!-- Body -->
            <div style="padding: 20px;">
              <h2 style="font-size: 20px; color: #2C2E63; border-bottom: 2px solid #2C2E63; padding-bottom: 5px; margin-bottom: 15px;">Resumen de Solicitud</h2>
              <p style="margin: 10px 0;"><strong>Tipo de Solicitud:</strong> ${requestType}</p>
              
              <h2 style="font-size: 20px; color: #2C2E63; border-bottom: 2px solid #2C2E63; padding-bottom: 5px; margin-bottom: 15px;">Detalles del Cliente</h2>
              <p style="margin: 10px 0;"><strong>Nombre:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Apellido:</strong> ${lastName}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 10px 0;"><strong>Teléfono:</strong> ${telephone}</p>
              <p style="margin: 10px 0;"><strong>Tipo de Cliente:</strong> ${clientType}</p>
              
              <h2 style="font-size: 20px; color: #2C2E63; border-bottom: 2px solid #2C2E63; padding-bottom: 5px; margin-bottom: 15px;">Detalles de la Solicitud</h2>
              <p style="background-color: #e9ecef; padding: 15px; border-radius: 8px; font-style: italic; margin: 10px 0;">${details}</p>
              
              <h2 style="font-size: 20px; color: #2C2E63; border-bottom: 2px solid #2C2E63; padding-bottom: 5px; margin-bottom: 15px;">Información Adicional</h2>
              <p style="margin: 10px 0;"><strong>Fecha de Solicitud:</strong> ${new Date().toLocaleDateString()}</p>
              <p style="margin: 10px 0;"><strong>ID de Solicitud:</strong> ${Math.floor(Math.random() * 1000000)}</p>
            </div>
            <!-- Footer -->
            <div style="background-color: #343a40; padding: 15px; text-align: center; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
              <p style="color: #ffffff; margin: 0; font-size: 14px;">&copy; ${new Date().getFullYear()} Towers Cem. Todos los derechos reservados.</p>
              <p style="color: #ffffff; margin: 0; font-size: 12px;">
                Si tiene alguna pregunta, no dude en contactarnos en 
                <a href="mailto:towercem@gmail.com" style="color: #ffffff; text-decoration: underline;">towercem@gmail.com</a> 
                o al teléfono 
                <a href="https://wa.me/573225098967" style="color: #ffffff; text-decoration: underline;">
                    <strong>(+57) 322 509 8967</strong>
                </a>.
              </p>
            </div>
          </div>
        `,
      };
  
      // Opciones del correo electrónico para confirmar al cliente
      const mailOptionsToClient = {
        from: "towercem@gmail.com",
        to: email,
        subject: "¡Gracias por tu interés en Towers Cem!",
        html: `
          <div style="font-family: 'Arial', sans-serif; max-width: 700px; margin: 0 auto; border: 1px solid #d3d3d3; border-radius: 10px; background-color: #ffffff; padding: 30px; color: #343a40;">
            <!-- Header -->
            <div style="background-color: #2C2E63; padding: 20px; text-align: center; border-top-left-radius: 10px; border-top-right-radius: 10px;">
              <h1 style="color: #ffffff; font-size: 30px; margin: 0;">¡Gracias por tu interés en Towers Cem!</h1>
            </div>
            <!-- Body -->
            <div style="padding: 20px;">
              <p style="margin: 15px 0; font-size: 18px;">Hola ${name} ${lastName},</p>
              <p style="margin: 15px 0; font-size: 16px;">¡Gracias por contactarnos! Nos emociona que estés interesado en conocer más sobre Towers Cem y nuestras innovadoras soluciones en cementos sostenibles.</p>
              <p style="margin: 15px 0; font-size: 16px;">Hemos recibido tu solicitud de información/cotización y nuestro equipo está trabajando para responderte lo más pronto posible con todos los detalles que necesitas.</p>
              <p style="margin: 15px 0; font-size: 16px;">Si tienes alguna pregunta urgente o necesitas asistencia inmediata, no dudes en responder a este correo o llamarnos al 
                <a href="https://wa.me/573225098967" style="color: #2C2E63; text-decoration: underline;">+57 322 509 8967</a>.
              </p>
              <p style="margin: 15px 0; font-size: 16px;">¡Estamos aquí para ayudarte a construir un futuro más sostenible!</p>
              <p style="margin: 15px 0; font-size: 16px;">Atentamente,<br>Equipo Towers Cem</p>
            </div>
            <!-- Footer -->
            <div style="background-color: #343a40; padding: 20px; text-align: center; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
              <p style="color: #ffffff; margin: 0; font-size: 16px;">&copy; ${new Date().getFullYear()} Towers Cem. Todos los derechos reservados.</p>
              <p style="color: #ffffff; margin: 0; font-size: 14px;">
                Si tiene alguna pregunta, no dude en contactarnos en
                <a href="mailto:towercem@gmail.com" style="color: #ffffff; text-decoration: underline;">towercem@gmail.com</a> 
                o al teléfono 
                <a href="https://wa.me/573225098967" style="color: #ffffff; text-decoration: underline;">
                    <strong>(+57) 322 509 8967</strong>
                </a>.
              </p>
            </div>
          </div>
        `,
      };
      
      // Envía el correo a Towers Cem
      await transporter.sendMail(mailOptionsToTowers);
  
      // Envía el correo de confirmación al cliente
      await transporter.sendMail(mailOptionsToClient);
  
      // Respuesta exitosa
      return new Response(
        JSON.stringify({ message: "Correo enviado exitosamente" }),
        { status: 200 }
      );
    } catch (error) {
      // Respuesta en caso de error
      console.error("Error enviando el correo:", error);
      return new Response(
        JSON.stringify({
          message: "Error enviando el correo",
          error: error.message,
        }),
        { status: 500 }
      );
    }
  }