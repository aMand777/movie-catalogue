'use client'
import CardMoviesHome from './components/fragments/CardMoviesHome'
import {
  getPopularMovies,
  getTrendingMovies,
  getNowPlayingMovies,
  getUpcomingMovies,
  getTopRatedMovies,
} from './services/movies'
import { useEffect, useState } from 'react'
import CardMovieSkeleton from './components/fragments/CardMovieSkeleton'
import HeaderCardMoviesHome from './components/fragments/HeaderCardMoviesHome'

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([])
  const [trendingMovies, setTrendingMovies] = useState([])
  const [nowPlayingMovies, setNowPlayingMovies] = useState([])
  const [upcomingMovies, setUpcomingMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])

  useEffect(() => {
    getPopularMovies(1, (res: any) => {
      setPopularMovies(res.data.results)
    })
    getTrendingMovies(1, (res: any) => {
      setTrendingMovies(res.data.results)
    })
    getNowPlayingMovies(1, (res: any) => {
      setNowPlayingMovies(res.data.results)
    })
    getUpcomingMovies(1, (res: any) => {
      setUpcomingMovies(res.data.results)
    })
    getTopRatedMovies(1, (res: any) => {
      setTopRatedMovies(res.data.results)
    })
  }, [])

  return (
    <>
      <main className='container mx-auto mt-28 -z-10'>
        <HeaderCardMoviesHome link='/movies/popular' title='View All Popular Movies'>
          Popular
        </HeaderCardMoviesHome>
        <div className='scroll-none flex overflow-scroll mx-1 md:mx-3'>
          {popularMovies.length > 0 ? (
            popularMovies.map((movie: any) => (
              <CardMoviesHome
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster={movie.poster_path}
                rating={movie.vote_average}
              />
            ))
          ) : (
            <CardMovieSkeleton loop={12} />
          )}
        </div>
        <HeaderCardMoviesHome link='/movies/trending' title='View All Trending Movies'>
          Trending
        </HeaderCardMoviesHome>
        <div className='scroll-none flex overflow-scroll mx-1 md:mx-3'>
          {trendingMovies.length > 0 ? (
            trendingMovies.map((movie: any) => (
              <CardMoviesHome
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster={movie.poster_path}
                rating={movie.vote_average}
              />
            ))
          ) : (
            <CardMovieSkeleton loop={12} />
          )}
        </div>
        <HeaderCardMoviesHome link='/movies/nowplaying' title='View All Now Playing Movies'>
          Now Playing
        </HeaderCardMoviesHome>
        <div className='scroll-none flex overflow-scroll mx-1 md:mx-3'>
          {nowPlayingMovies.length > 0 ? (
            nowPlayingMovies.map((movie: any) => (
              <CardMoviesHome
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster={movie.poster_path}
                rating={movie.vote_average}
              />
            ))
          ) : (
            <CardMovieSkeleton loop={12} />
          )}
        </div>
        <HeaderCardMoviesHome link='/movies/upcoming' title='View All Upcoming Movies'>
          Upcoming
        </HeaderCardMoviesHome>
        <div className='scroll-none flex overflow-scroll mx-1 md:mx-3'>
          {upcomingMovies.length > 0 ? (
            upcomingMovies.map((movie: any) => (
              <CardMoviesHome
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster={movie.poster_path}
                rating={movie.vote_average}
              />
            ))
          ) : (
            <CardMovieSkeleton loop={12} />
          )}
        </div>
        <HeaderCardMoviesHome link='/movies/toprated' title='View All Top Rated Movies'>
          Top Rated
        </HeaderCardMoviesHome>
        <div className='scroll-none flex overflow-scroll mx-1 md:mx-3 mb-10'>
          {topRatedMovies.length > 0 ? (
            topRatedMovies.map((movie: any) => (
              <CardMoviesHome
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster={movie.poster_path}
                rating={movie.vote_average}
              />
            ))
          ) : (
            <CardMovieSkeleton loop={12} />
          )}
        </div>
      </main>
    </>
  )
}
