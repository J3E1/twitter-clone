import { BsTwitter } from 'react-icons/bs';

import useCurrentUser from '@/hooks/useCurrentUser';
import { useEffect, useMemo } from 'react';
import useNotifications from '@/hooks/useNotification';
import { formatDistanceToNowStrict } from 'date-fns';

const NotificationsFeed = () => {
	const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
	const { data: fetchedNotifications = [] } = useNotifications(currentUser?.id);

	useEffect(() => {
		mutateCurrentUser();
	}, [mutateCurrentUser]);

	if (fetchedNotifications.length === 0) {
		return (
			<div className='text-neutral-600 text-center p-6 text-xl'>
				No notifications
			</div>
		);
	}

	const createdAt = (not: Record<string, any>) => {
		if (!not?.createdAt) {
			return null;
		}

		return formatDistanceToNowStrict(new Date(not.createdAt));
	};

	return (
		<div className='flex flex-col'>
			{fetchedNotifications.map((notification: Record<string, any>) => (
				<div
					key={notification.id}
					className='flex flex-row items-center p-6 gap-4 border-b-[1px] border-neutral-800'>
					<BsTwitter color='white' size={32} />
					<p className='text-white'>{notification.body}</p>
					<span className='text-neutral-500 text-sm'>
						{createdAt(notification)}
					</span>
				</div>
			))}
		</div>
	);
};

export default NotificationsFeed;
