import { Client } from '@sendgrid/client';

const sendgridApiKey = process.env.SENDGRID_API_KEY;
const client = new Client();
client.setApiKey(sendgridApiKey);

console.log('SENDGRID_API_KEY:', sendgridApiKey);

const getListIdByName = async (listName) => {
  try {
    const response = await client.request({
      method: 'GET',
      url: '/v3/marketing/lists',
    });

    const lists = response[1].result;
    const list = lists.find(list => list.name === listName);

    return list ? list.id : null;
  } catch (error) {
    console.error('Error fetching list ID:', error);
    throw new Error('Error fetching list ID');
  }
};

export async function POST(req) {
  const { email } = await req.json();

  const listName = 'towers'; 

  try {
    const listId = await getListIdByName(listName);

    if (!listId) {
      return new Response(JSON.stringify({ error: 'Lista no encontrada.' }), { status: 404 });
    }

    await client.request({
      method: 'PUT',
      url: `/v3/marketing/contacts`,
      body: {
        contacts: [{ email }],
        list_ids: [listId],
      },
    });

    return new Response(JSON.stringify({ message: 'Suscripción exitosa.' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Error al suscribirse.' }), { status: 500 });
  }
}
