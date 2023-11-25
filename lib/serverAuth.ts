import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession, Session } from 'next-auth';
import prisma from './prisma.db';
import NextAuth from '@/pages/api/auth/[...nextauth]';

export default async function serverAuth(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const session = (await getServerSession(req, res, NextAuth)) as Session;

	if (!session?.user?.email) throw new Error('Not logged in');

	const currentUser = await prisma.user.findUnique({
		where: { email: session.user.email },
	});

	if (!currentUser) throw new Error('Not valid user');

	return { currentUser };
}
