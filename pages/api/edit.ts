import serverAuth from '@/lib/serverAuth';
import prisma from '@/lib/prisma.db';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== 'PATCH') {
		return res.status(405).end();
	}

	try {
		const { currentUser } = await serverAuth(req);

		const { name, username, bio, profileImage, coverImage } = req.body;

		if (!name || !username) {
			throw new Error('Missing fields');
		}

		const updatedUser = await prisma.user.update({
			where: {
				id: currentUser.id,
			},
			data: {
				name,
				username,
				bio,
				profileImage,
				coverImage,
			},
		});

		return res.status(200).json(updatedUser);
	} catch (error) {
		console.log(error);
		if (error instanceof Error) return res.status(400).end(error.message);
	}
}