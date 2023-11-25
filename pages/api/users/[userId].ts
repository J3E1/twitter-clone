import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma.db';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== 'GET') return res.status(405).end();

	try {
		const userId = req.query.userId;

		if (!userId || typeof userId !== 'string')
			throw new Error('Invalid userId');

		const user = await prisma.user.findUnique({
			where: {
				id: userId,
			},
		});

		if (!userId || typeof userId !== 'string')
			throw new Error('User not found');

		const followersCount = await prisma.user.count({
			where: {
				followingIds: {
					has: userId,
				},
			},
		});

		return res.status(200).json({ ...user, followersCount });
	} catch (error) {
		console.log('🚀 ~ file: register.ts:12 ~ error:', error);
		return res.status(500).end();
	}
}
