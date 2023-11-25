import prisma from '@/lib/prisma.db';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth from 'next-auth/next';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

export default NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		Credentials({
			name: 'credentials ',
			credentials: {
				email: { label: 'email', type: 'text' },
				password: { label: 'password', type: 'password' },
			},
			async authorize(credentials, req) {
				if (!credentials?.email || !credentials?.password)
					throw new Error('Invalid credentials');

				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email,
					},
				});

				if (!user) throw new Error('No user found');

				const isPasswordIncorrect = await bcrypt.compare(
					credentials.password,
					user.hashedPassword!
				);

				if (!isPasswordIncorrect) throw new Error('Invalid password');

				return user;
			},
		}),
	],
	debug: process.env.NODE_ENV === 'development',
	session: {
		strategy: 'jwt',
	},
	// jwt: {
	// 	secret: process.env.NEXTAUTH_JWT_SECRET,
	// },
	secret: process.env.NEXTAUTH_SECRET,
});
