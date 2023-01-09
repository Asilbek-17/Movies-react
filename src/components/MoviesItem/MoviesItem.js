import React, { useEffect, useState } from 'react';
import { api, BASE_IMG_URL_MODAL } from '../../API/API';
import { BASE_IMG_URL } from '../../API/API';
import './MoviesItem.css';

export const MoviesItem = () => {
	const [movies, setMovies] = useState({
		isLoading: true,
		data: [],
		isError: false,
	});

	const [searchMovies, setSearchMovies] = useState([]);
	const [modal, setModal] = useState('close');

	const getMovies = async () => {
		const data = await api.getPopularMovies();
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

	const moreInfoFn = async (evt) => {
		setSearchMovies([]);
		const data = await api.moreInfo(evt.target.value);
		setSearchMovies(data.data);
	};

	console.log(searchMovies);

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
										onClick={(evt) => {
											setModal('close' ? 'open' : '');
											moreInfoFn(evt);
										}}
										className='movie-btn btn btn-outline-dark'
										value={item.id}
										type='button'
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
			<li className={'modal ' + modal}>
				<button
					onClick={() => {
						setModal('close');
					}}
					className='btn btn-secondary mb-3'
				>
					close
				</button>
				<img
					height={600}
					className='modal-img'
					src={`${BASE_IMG_URL_MODAL}/${searchMovies.backdrop_path}`}
					alt=''
				/>
				<div className='color-rgb'></div>
				<h2 className='mt-5 text-center mb-3 fs-1'>
					{searchMovies.original_title}
				</h2>
				<div className='modal-box'>
					<p className='text-center fs-5'>{searchMovies.overview}</p>
					<a href={searchMovies.homepage} target='blank'>
						HomePage Movie
					</a>
					<span className='badge bg-danger modal-span'>
						{searchMovies.vote_count}
					</span>

					<span className='badge bg-danger modal-data'>
						{searchMovies.release_date}
					</span>
				</div>
			</li>
		</>
	);
};

{
	/* <h2 className='movie-title'>{item.title}</h2>
<time className='mb-4'>{item.release_date}</time>
<button id={item.title}  className='btn btn-success'>
	More
</button> */
}
