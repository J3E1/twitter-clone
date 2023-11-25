import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma.db';
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== 'POST') return res.status(405).end();

	try {
		const { name, email, password, username } = req.body;

		const hashedPassword = await bcrypt.hash(password, 12);

		const user = await prisma.user.create({
			data: {
				hashedPassword,
				name,
				username,
				email,
			},
		});

		return res.status(200).json(user);
	} catch (error) {
		console.log('🚀 ~ file: register.ts:12 ~ error:', error);
		return res.status(500).end();
	}
}
