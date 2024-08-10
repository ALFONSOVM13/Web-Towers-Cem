import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, subject, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'alfonsovengoechea@gmail.com', 
        pass: 'Ares010993.', 
      },
    });

    const mailOptions = {
      from: email,
      to: 'tuemailcorporativo@empresa.com', // Tu correo corporativo
      subject: `Contacto desde el formulario: ${subject}`,
      text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\n\nMensaje:\n${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Correo enviado exitosamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error enviando el correo', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
