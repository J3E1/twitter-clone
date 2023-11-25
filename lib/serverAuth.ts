import { NextApiRequest } from 'next';
import { getSession } from 'next-auth/react';
import prisma from './prisma.db';

export default async function serverAuth(req: NextApiRequest) {
	const session = await getSession({ req });
	console.log('🚀 ~ file: serverAuth.ts:7 ~ serverAuth ~ session:', session);

	if (!session?.user?.email) throw new Error('Not logged in');

	const currentUser = await prisma.user.findUnique({
		where: { email: session.user.email },
	});

	if (!currentUser) throw new Error('Not valid user');

	return { currentUser };
}
