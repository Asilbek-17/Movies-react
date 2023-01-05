import React, { useEffect, useState } from 'react';
import { api } from '../../API/API';
import { BASE_IMG_URL } from '../../API/API';
import './TopRatedItem.css';

export const TopRatedMovies = () => {
	const [movies, setMovies] = useState({
		isLoading: true,
		data: [],
		isError: false,
	});

	const getMovies = async () => {
		const data = await api.getTopRatedMovies();
		if (data) {
			setMovies({
				isLoading: false,
				data: data.data?.results,
				isError: false,
			});
		}
	};

	useEffect(() => {
		getMovies();
	}, []);

	return (
		<>
			{movies.isLoading ? <h1>Loading...</h1> : ''}
			{movies.isError ? <h1>Error</h1> : ''}
			{movies.data
				? movies.data.map((item) => {
						return (
							<li
								key={item.id}
								className='card movie-item position-relative rounded-4'
							>
								<div className='more-div'>
									<button
										className='movie-btn btn btn-outline-dark'
										id={item.id}
										type='button'
										data-bs-toggle='modal'
										data-bs-target='#exampleModal'
									>
										More
									</button>
								</div>
								<img
									className='mb-4 rounded-4 movie-img'
									width={300}
									height={400}
									src={`${BASE_IMG_URL}/${item.poster_path}`}
									alt=''
								/>
                                <span className='badge bg-danger rate-span'>{item.vote_average}</span>
							</li>
						);
				  })
				: ''}
		</>
	);
};

{
	/* <h2 className='movie-title'>{item.title}</h2>
    
    <time className='mb-4'>{item.release_date}</time>
    <button className='btn btn-success'>More</button> */
}
