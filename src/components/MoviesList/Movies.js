import React, { useEffect, useState } from 'react';
import { MoviesItem } from '../MoviesItem/MoviesItem';
import { api, BASE_IMG_URL_MODAL } from '../../API/API';
import { BASE_IMG_URL } from '../../API/API';

export const Movies = () => {
	function formSubmit(evt) {
		evt.preventDefault();
	}

	const [searchMovies, setSearchMovies] = useState({
		isLoading: true,
		data: [],
		isError: false,
	});

	const [searchMoviesBtn, setSearchMoviesBtn] = useState([]);
	const [modal, setModal] = useState('close');

	const searchMoviesInp = async (evt) => {
		if (evt.code === 'Enter') {
			const data = await api.searchMovies(evt.target.value);
			setSearchMovies({
				isLoading: false,
				data: data.data?.results,
				isError: false,
			});
			if (!evt.target.value) {
				setSearchMovies({
					isLoading: false,
				});
			}
		}
	};

	useEffect(() => {
		searchMoviesInp();
	}, []);

	const moreInfoFn = async (evt) => {
		setSearchMoviesBtn([]);
		const data = await api.moreInfo(evt.target.value);
		setSearchMoviesBtn(data.data);
	};

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
				if (searchMovies.data.length) {
					return (
						<ul className='d-flex align-item-center flex-wrap justify-content-between list-unstayled  pt-5 px-4 brrr'>
							{searchMovies.data
								? searchMovies.data.map((item) => {
										return (
											<>
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
											</>
										);
								  })
								: ''}
						</ul>
					);
				} else {
					return (
						<ul className='d-flex align-item-center flex-wrap justify-content-between list-unstayled pt-5 p-0 bir'>
							<MoviesItem />
						</ul>
					);
				}
			})()}

			<div className={'modal ' + modal}>
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
					src={`${BASE_IMG_URL_MODAL}/${searchMoviesBtn.backdrop_path}`}
					alt=''
				/>
				<div className='color-rgb'></div>
				<h2 className='mt-5 text-center mb-3 fs-1'>
					{searchMoviesBtn.original_title}
				</h2>
				<div className='modal-box'>
					<p className='text-center fs-5'>{searchMoviesBtn.overview}</p>
					<a className='d-inline-block mx-auto' href={searchMoviesBtn.homepage} target='blank'>
						HomePage Movie
					</a>
					<span className='badge bg-danger modal-span'>
						{searchMoviesBtn.vote_count}
					</span>

					<span className='badge bg-danger modal-data'>
						{searchMoviesBtn.release_date}
					</span>
				</div>
			</div>
		</>
	);
};
