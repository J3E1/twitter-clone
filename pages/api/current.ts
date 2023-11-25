import { NextApiRequest, NextApiResponse } from 'next';
import serverAuth from '@/lib/serverAuth';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== 'GET') {
		return res.status(405).end();
	}

	try {
		const { currentUser } = await serverAuth(req, res);

		return res.status(200).json(currentUser);
	} catch (error) {
		if (error instanceof Error) return res.status(400).end(error.message);
		console.log('🚀 ~ file: current.ts:17 ~ error:', error);
	}
}
