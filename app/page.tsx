'use client'
import React from 'react'
import CardMoviesHome from './components/fragments/CardMoviesHome'
import {
  getPopularMovies,
  getTrendingMovies,
  getNowPlayingMovies,
  getUpcomingMovies,
  getTopRatedMovies,
} from './services/movies'
import CardMoviesHomeSkeleton from './components/fragments/CardMoviesHomeSkeleton'
import HeaderCardMoviesHome from './components/fragments/HeaderCardMoviesHome'
import { useQuery } from '@tanstack/react-query'

type Movie = {
  id: string
  title: string
  poster_path: string
  vote_average: number
  link: string
}

export default function Home() {
  const { data: popularMovies, isLoading: loadingGetPopularMovies } = useQuery({
    queryKey: ['GET_POPULAR_MOVIES'],
    queryFn: async () => {
      const response = await getPopularMovies()
      return response.data.results
    },
  })

  const { data: trendingMovies, isLoading: loadingGetTrendingMovies } = useQuery({
    queryKey: ['GET_TRENDING_MOVIES'],
    queryFn: async () => {
      const response = await getTrendingMovies()
      return response.data.results
    },
  })

  const { data: nowPlayingMovies, isLoading: loadingNowPlayingMovies } = useQuery({
    queryKey: ['GET_NOW_PLAYING_MOVIES'],
    queryFn: async () => {
      const response = await getNowPlayingMovies()
      return response.data.results
    },
  })

  const { data: upcomingMovies, isLoading: loadingUpcomingMovies } = useQuery({
    queryKey: ['GET_UPCOMING_MOVIES'],
    queryFn: async () => {
      const response = await getUpcomingMovies()
      return response.data.results
    },
  })

  const { data: topRatedMovies, isLoading: loadingTopRatedMovies } = useQuery({
    queryKey: ['GET_TOP_RATED_MOVIES'],
    queryFn: async () => {
      const response = await getTopRatedMovies()
      return response.data.results
    },
  })

  return (
    <>
      <main className='container mx-auto mt-28 -z-10'>
        <HeaderCardMoviesHome link='/movies/popular' title='View All Popular Movies'>
          Popular
        </HeaderCardMoviesHome>
        <div className='scroll-none flex overflow-scroll mx-1 md:mx-3'>
          {popularMovies?.map((movie: Movie) => (
            <CardMoviesHome
              key={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              rating={movie.vote_average}
              link={`/movies/${movie.id}/${movie.title}`}
            />
          ))}
          {loadingGetPopularMovies && <CardMoviesHomeSkeleton loop={12} />}
        </div>
        <HeaderCardMoviesHome link='/movies/trending' title='View All Trending Movies'>
          Trending
        </HeaderCardMoviesHome>
        <div className='scroll-none flex overflow-scroll mx-1 md:mx-3'>
          {trendingMovies?.map((movie: Movie) => (
            <CardMoviesHome
              key={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              rating={movie.vote_average}
              link={`/movies/${movie.id}/${movie.title}`}
            />
          ))}
          {loadingGetTrendingMovies && <CardMoviesHomeSkeleton loop={12} />}
        </div>
        <HeaderCardMoviesHome link='/movies/nowplaying' title='View All Now Playing Movies'>
          Now Playing
        </HeaderCardMoviesHome>
        <div className='scroll-none flex overflow-scroll mx-1 md:mx-3'>
          {nowPlayingMovies?.map((movie: Movie) => (
            <CardMoviesHome
              key={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              rating={movie.vote_average}
              link={`/movies/${movie.id}/${movie.title}`}
            />
          ))}
          {loadingNowPlayingMovies && <CardMoviesHomeSkeleton loop={12} />}
        </div>
        <HeaderCardMoviesHome link='/movies/upcoming' title='View All Upcoming Movies'>
          Upcoming
        </HeaderCardMoviesHome>
        <div className='scroll-none flex overflow-scroll mx-1 md:mx-3'>
          {upcomingMovies?.map((movie: Movie) => (
            <CardMoviesHome
              key={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              rating={movie.vote_average}
              link={`/movies/${movie.id}/${movie.title}`}
            />
          ))}
          {loadingUpcomingMovies && <CardMoviesHomeSkeleton loop={12} />}
        </div>
        <HeaderCardMoviesHome link='/movies/toprated' title='View All Top Rated Movies'>
          Top Rated
        </HeaderCardMoviesHome>
        <div className='scroll-none flex overflow-scroll mx-1 md:mx-3 mb-10'>
          {topRatedMovies?.map((movie: Movie) => (
            <CardMoviesHome
              key={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              rating={movie.vote_average}
              link={`/movies/${movie.id}/${movie.title}`}
            />
          ))}
          {loadingTopRatedMovies && <CardMoviesHomeSkeleton loop={12} />}
        </div>
      </main>
    </>
  )
}
