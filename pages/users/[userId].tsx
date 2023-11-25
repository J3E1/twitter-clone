import Header from '@/components/UI/Header';
import UserBio from '@/components/User/UserBio';
import UserHero from '@/components/User/UserHero';
import useUser from '@/hooks/useUser';
import { useRouter } from 'next/router';

export default function UserView() {
	const router = useRouter();
	const { userId } = router.query;

	const { data: fetchedUser, isLoading } = useUser(userId as string);

	if (isLoading || !fetchedUser) {
		return (
			<div className='flex justify-center items-center h-full'>
				{/* <ClipLoader color='lightblue' size={80} /> */}
			</div>
		);
	}

	return (
		<>
			<Header showBackArrow label={fetchedUser?.name} />
			<UserHero userId={userId as string} coverImage={fetchedUser.coverImage} />
			<UserBio fetchedUser={fetchedUser} userId={userId as string} />
			{/*<PostFeed userId={userId as string} /> */}
		</>
	);
}
