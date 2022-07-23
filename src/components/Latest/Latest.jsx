import React from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../contexts/ContextProvider';

// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/css';

import './latest.css';

const Latest = () => {
  const { latest } = useStateContext();

  return (
    <section className='latest-movies'>
      <h1 className='section-title'>Upcoming Movies</h1>

      <Swiper
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
        pagination={{
          clickable: true,
        }}
        className='latest-container'
      >
        {latest.map((movie, index) => (
          <SwiperSlide key={index} className='latest-slide'>
            <Link to={`details/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                alt={movie.title}
                className='latest-poster'
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Latest;
