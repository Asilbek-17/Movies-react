import React, { useEffect, useState } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';


export const Header = () => {


	return (
		<>
			<header className='w-100 bg-primary p-3 shadow site-header d-flex align-items-center justify-content-between'>
				<a className='fs-3 text-dark text-decoration-none' href='#!'>
					Movies
				</a>
				<nav className='d-flex justify-content-end align-item-center'>
					<NavLink to={'/'} className='text-white me-4'>
						Home
					</NavLink>
					<NavLink to={'/Top-Rated'} className='text-white me-4'>
						Top Rated
					</NavLink>
					<NavLink to={'/Upcoming'} className='text-white'>
						Upcoming
					</NavLink>
				</nav>
			</header>
		</>
	);
};
