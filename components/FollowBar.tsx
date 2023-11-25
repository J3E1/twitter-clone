import useUserList from '@/hooks/useUserList';
import Avatar from './Avatar';
import Link from 'next/link';
import useUser from '@/hooks/useUser';
import useCurrentUser from '@/hooks/useCurrentUser';

type Props = {};
export default function FollowBar({}: Props) {
	const { data: currentUser } = useCurrentUser();
	const { data: allUsers = [] } = useUserList();

	const users = allUsers.filter(
		(user: { id: string }) => user.id !== currentUser?.id
	);

	return (
		<div className='px-6 py-4 hidden lg:block col-span-[0] lg:col-span-3'>
			<div className='bg-neutral-800 rounded-xl p-4'>
				<h2 className='text-white text-xl font-semibold'>Who to follow</h2>
				<div className='flex flex-col gap-6 mt-4'>
					{users.map((user: Record<string, any>) => (
						<Link
							href={`/users/${user.id}`}
							key={user.id}
							className='flex flex-row gap-4'>
							<Avatar userId={user.id} profileImage={user.profileImage} />
							<div className='flex flex-col'>
								<p className='text-white font-semibold text-sm'>{user.name}</p>
								<p className='text-neutral-400 text-sm'>@{user.username}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
