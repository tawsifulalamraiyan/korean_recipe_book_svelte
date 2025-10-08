<script lang="ts">
	import axios from 'axios';

	let name = '';
	let email = '';
	let phonenumber = '';
	let review = '';
	let error = '';

	const submit = async () => {
		const res = await axios.post('/api/userdata', { name, email, phonenumber, review });
		const data = res.data;
	};
</script>

<main>
	<form on:submit={submit}>
		<input type="text " placeholder="name" bind:value={name} />
		<input type="email" placeholder="emaol" bind:value={email} />
		<input type="number" bind:value={phonenumber} placeholder="phonenumber" />
		<textarea bind:value={review} placeholder="message"></textarea>
		<button type="submit">Submit</button>
	</form>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}
</style>
