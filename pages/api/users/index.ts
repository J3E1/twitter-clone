import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma.db';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== 'GET') return res.status(405).end();

	try {
		const users = await prisma.user.findMany();

		return res.status(200).json(users);
	} catch (error) {
		console.log('🚀 ~ file: register.ts:12 ~ error:', error);
		return res.status(500).end();
	}
}
