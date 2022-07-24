import React from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../contexts/ContextProvider';

// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './trending.css';

const Trending = () => {
  const { popular } = useStateContext();

  return (
    <section>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='trending-container'
      >
        {popular.map((movie, index) => (
          <SwiperSlide key={index} className='trending-slide'>
            <div className='trending-info'>
              <span>{movie.vote_average.toFixed(1)}</span>
              <span>{movie.title}</span>
              <span>{movie.overview}</span>
              <Link
                to={`movie-details/${movie.id}`}
                className='trending-button'
              >
                <span>Details</span>
              </Link>
            </div>
            <img
              src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
              alt={movie.title}
              className='trending-poster'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Trending;
