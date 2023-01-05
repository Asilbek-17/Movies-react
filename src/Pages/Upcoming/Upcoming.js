import React from 'react';
import { UpcomingMovies } from '../../components/UpcomingItem/UpcomingItem';

export const Upcoming = () => {
	return (
		<div>
			<ul className='d-flex align-item-center flex-wrap justify-content-between list-unstayled mt-5 pt-5 px-4'>
				<UpcomingMovies />
			</ul>
		</div>
	);
};
