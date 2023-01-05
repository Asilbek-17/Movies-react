import React from 'react';
import { TopRatedMovies } from '../../components/TopRatedItem/TopRatedItem';

export const TopRated = () => {
	return (
		<div>
			<ul className='d-flex align-item-center flex-wrap justify-content-between list-unstayled mt-5 pt-5 px-4'>
				<TopRatedMovies />
			</ul>
		</div>
	);
};
