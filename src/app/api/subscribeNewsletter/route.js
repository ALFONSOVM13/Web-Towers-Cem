import { Client } from '@sendgrid/client';

// Verifica que la API Key se esté cargando correctamente
const sendgridApiKey = process.env.SENDGRID_API_KEY;
if (!sendgridApiKey) {
  console.error('SENDGRID_API_KEY no está definida. Asegúrate de que la variable de entorno esté configurada correctamente.');
} else {
  console.log('SENDGRID_API_KEY:', sendgridApiKey);
}

const client = new Client();
client.setApiKey(sendgridApiKey);

const getListIdByName = async (listName) => {
  try {
    const response = await client.request({
      method: 'GET',
      url: '/v3/marketing/lists',
    });

    // Verificar la respuesta completa para más detalles
    console.log('Response from SendGrid:', response);

    const lists = response[1]?.result || [];
    const list = lists.find(list => list.name === listName);

    return list ? list.id : null;
  } catch (error) {
    // Mostrar más detalles del error
    console.error('Error fetching list ID:', error.response ? error.response.body : error);
    throw new Error('Error fetching list ID');
  }
};

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: 'El campo de correo electrónico es obligatorio.' }), { status: 400 });
    }

    const listName = 'towers';

    // Obtener el ID de la lista
    const listId = await getListIdByName(listName);

    if (!listId) {
      return new Response(JSON.stringify({ error: 'Lista no encontrada.' }), { status: 404 });
    }

    // Intentar agregar el contacto a la lista
    const addContactResponse = await client.request({
      method: 'PUT',
      url: '/v3/marketing/contacts',
      body: {
        contacts: [{ email }],
        list_ids: [listId],
      },
    });

    console.log('Response from adding contact:', addContactResponse);

    return new Response(JSON.stringify({ message: 'Suscripción exitosa.' }), { status: 200 });
  } catch (error) {
    // Manejo de errores y detalles adicionales
    console.error('Error in POST /api/subscribeNewsletter:', error.response ? error.response.body : error);
    return new Response(JSON.stringify({ error: 'Error al suscribirse.' }), { status: 500 });
  }
}
