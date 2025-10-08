import { db } from '$lib/server/db/index.js';
import { racipebook } from '$lib/server/db/schema.js';
import { json } from '@sveltejs/kit';

export async function GET() {
	const getallreview = await db.select().from(racipebook);

	console.log(getallreview);

	return json(getallreview);
}

export async function POST({ request }) {
	try {
		const data = await request.json();
		const { name, email, phonenumber, review } = data;

		// Basic validation
		if (!name || !email || !phonenumber) {
			return json({ error: 'All required fields must be filled' }, { status: 400 });
		}

		await db.insert(racipebook).values({
			name,
			email,
			phonenumber,
			review
		});

		return json({ success: true });
	} catch (err) {
		console.error('Error saving user data:', err);
		return json({ error: 'Internal server error' }, { status: 500 });
	}
}
