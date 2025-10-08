import { db } from '$lib/server/db/index.js';
import { racipebook } from '$lib/server/db/schema.js';
import { json } from '@sveltejs/kit';

export async function GET() {
	const getallreview = await db.select().from(racipebook);

	console.log(getallreview);

	return json(getallreview);
}

export async function POST({ request }) {
	const { name, email, phonenumber, review } = await request.json();

	if (!name || !email || !phonenumber || !review) {
		return json({ Error: 'All field are required' });
	}

	const data = { name, email, phonenumber, review };
	console.log(data);
	const newSubmit = await db.insert(racipebook).values({ name, email, phonenumber, review });

	return json(newSubmit);
}
