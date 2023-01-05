import React, { useEffect, useState } from 'react';
import { MoviesItem } from '../MoviesItem/MoviesItem';
import { api } from '../../API/API';
import { BASE_IMG_URL } from '../../API/API';

export const Movies = () => {
	function moreInfo(evt) {
		if (evt.target.matches('.movie-btn')) {
			console.log('more');
		}
	}

	function formSubmit(evt) {
		evt.preventDefault();
	}

	const [searchMovies, setSearchMovies] = useState({
		isLoading: true,
		data: [],
		isError: false,
	});

	const searchMoviesInp = async (evt) => {
		if (evt.code === 'Enter') {
			const data = await api.searchMovies(evt.target.value);

			setSearchMovies({
				isLoading: false,
				data: data.data?.results,
				isError: false,
			});
		}
	};

	useEffect(() => {
		searchMoviesInp();
	}, []);

	return (
		<>
			<form className='w-50 mt-5 pt-5 mx-auto' onSubmit={formSubmit}>
				<input
					className='form-control w-50 mx-auto mt-5'
					type='search'
					placeholder='Search Your Movie...'
					onKeyDown={searchMoviesInp}
				/>
			</form>

			{(() => {
				if (searchMovies.data.length > 0) {
					return (
						<ul className='d-flex align-item-center flex-wrap justify-content-between list-unstayled  pt-5 px-4'>
							{searchMovies.data
								? searchMovies.data.map((item) => {
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
												<span className='badge bg-danger rate-span'>
													{item.vote_average}
												</span>
											</li>
										);
								  })
								: ''}
						</ul>
					);
				} else {
					return (
						<ul
							onClick={moreInfo}
							className='d-flex align-item-center flex-wrap justify-content-between list-unstayled pt-5 px-4 bir'
						>
							<MoviesItem />
						</ul>
					);
				}
			})()}
		</>
	);
};
