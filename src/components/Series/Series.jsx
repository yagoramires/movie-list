import React from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
import { Link } from 'react-router-dom';

// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/css';

import './series.css';

const Series = () => {
  const { topSeries } = useStateContext();

  return (
    <section className='series'>
      <h1 className='section-title'>Popular Series</h1>

      <Swiper
        breakpoints={{
          375: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          600: {
            slidesPerView: 6,
            spaceBetween: 0,
          },
          900: {
            slidesPerView: 8,
            spaceBetween: 0,
          },
          1200: {
            slidesPerView: 10,
            spaceBetween: 0,
          },
        }}
        pagination={{
          clickable: true,
        }}
        className='series-container'
      >
        {topSeries.map((movie, index) => (
          <SwiperSlide key={index} className='series-slide'>
            <Link to={`serie-details/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                alt={movie.title}
                className='series-poster'
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Series;
