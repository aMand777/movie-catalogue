'use client'
import CardMoviesHome from './components/fragments/CardMoviesHome'
import { getPopularMovies, getTrendingMovies, getNowPlayingMovies, getUpcomingMovies, getTopRatedMovies } from './services/movies'
import { useEffect, useState } from 'react'
import Link from 'next/link'

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
        <Link href='/movies/popular'>
          <div className={`text-white font-semibold italic text-xs mx-1 md:mx-3 w-fit p-1 rounded-b-full rounded-tr-full mb-2 bg-primary hover:bg-red-600 ${popularMovies.length > 0 ? 'block' : 'hidden'}`}>Popular</div>
        </Link>
        <div className='scroll-none flex overflow-scroll mx-1 md:mx-3'>
      {popularMovies.map((movie: any) => (
      <CardMoviesHome key={movie.id} id={movie.id} title={movie.title} poster={movie.poster_path} rating={movie.vote_average} />
        ))}
        </div>
        <Link href='/movies/trending'>
          <div className={`text-white font-semibold italic text-xs mx-1 md:mx-3 w-fit p-1 rounded-b-full rounded-tr-full my-2 bg-primary hover:bg-red-600 ${trendingMovies.length > 0 ? 'block' : 'hidden'}`}>Trending</div>
        </Link>
        <div className='scroll-none flex overflow-scroll mx-1 md:mx-3'>
      {trendingMovies.map((movie: any) => (
      <CardMoviesHome key={movie.id} id={movie.id} title={movie.title} poster={movie.poster_path} rating={movie.vote_average} />
        ))}
        </div>
        <Link href='/movies/nowplaying'>
          <div className={`text-white font-semibold italic text-xs mx-1 md:mx-3 w-fit p-1 rounded-b-full rounded-tr-full my-2 bg-primary hover:bg-red-600 ${nowPlayingMovies.length > 0 ? 'block' : 'hidden'}`}>Now Playing</div>
        </Link>
        <div className='scroll-none flex overflow-scroll mx-1 md:mx-3'>
      {nowPlayingMovies.map((movie: any) => (
      <CardMoviesHome key={movie.id} id={movie.id} title={movie.title} poster={movie.poster_path} rating={movie.vote_average} />
        ))}
        </div>
        <Link href='/movies/upcoming'>
          <div className={`text-white font-semibold italic text-xs mx-1 md:mx-3 w-fit p-1 rounded-b-full rounded-tr-full my-2 bg-primary hover:bg-red-600 ${upcomingMovies.length > 0 ? 'block' : 'hidden'}`}>Upcoming</div>
        </Link>
        <div className='scroll-none flex overflow-scroll mx-1 md:mx-3'>
      {upcomingMovies.map((movie: any) => (
      <CardMoviesHome key={movie.id} id={movie.id} title={movie.title} poster={movie.poster_path} rating={movie.vote_average} />
        ))}
        </div>
        <Link href='/movies/toprated'>
          <div className={`text-white font-semibold italic text-xs mx-1 md:mx-3 w-fit p-1 rounded-b-full rounded-tr-full my-2 bg-primary hover:bg-red-600 ${topRatedMovies.length > 0 ? 'block' : 'hidden'}`}>Top Rated</div>
        </Link>
        <div className='scroll-none flex overflow-scroll mx-1 md:mx-3 mb-10'>
      {topRatedMovies.map((movie: any) => (
      <CardMoviesHome key={movie.id} id={movie.id} title={movie.title} poster={movie.poster_path} rating={movie.vote_average} />
        ))}
        </div>
    </main>
    </>
  )
}
