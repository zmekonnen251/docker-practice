import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
	res.json([
		{
			id: '1',
			title: 'Baook Review: The Bear & The Nightingale',
		},
		{
			id: '5',
			title: 'Game Review: Pokemon Changed --',
		},
		{
			id: '6',
			title: 'Show Review: Alice in Borderland',
		},
		{
			id: '7',
			title: 'Baook Review: The Bear & The Nightingale',
		},
		{
			id: '5',
			title: 'Baook Review: The Bear & The Nightingale',
		},
		{
			id: '6',
			title: 'Baook Review: The Bear & The Nightingale',
		},
	]);
});

app.listen(4000, () => {
	console.log('listening for requests on port 4000');
});
