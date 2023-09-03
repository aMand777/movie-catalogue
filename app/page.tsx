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
        <div className={`text-white font-semibold italic text-xs mx-1 md:mx-3 w-fit p-1 rounded-b-full rounded-tr-full mb-2 bg-primary ${popularMovies.length > 0 ? 'block' : 'hidden'}`}><Link href='/movies/popular'>Popular</Link></div>
        <div className='scroll-none flex overflow-scroll mx-1 md:mx-3'>
      {popularMovies.map((movie: any) => (
      <CardMoviesHome key={movie.id} id={movie.id} title={movie.title} poster={movie.poster_path} rating={movie.vote_average} />
        ))}
        </div>
        <div className={`text-white font-semibold italic text-xs mx-1 md:mx-3 w-fit p-1 rounded-b-full rounded-tr-full my-2 bg-primary ${trendingMovies.length > 0 ? 'block' : 'hidden'}`}><Link href='/movies/trending'>Trending</Link></div>
        <div className='scroll-none flex overflow-scroll mx-1 md:mx-3'>
      {trendingMovies.map((movie: any) => (
      <CardMoviesHome key={movie.id} id={movie.id} title={movie.title} poster={movie.poster_path} rating={movie.vote_average} />
        ))}
        </div>
        <div className={`text-white font-semibold italic text-xs mx-1 md:mx-3 w-fit p-1 rounded-b-full rounded-tr-full my-2 bg-primary ${nowPlayingMovies.length > 0 ? 'block' : 'hidden'}`}><Link href='/movies/nowplaying'>Now Playing</Link></div>
        <div className='scroll-none flex overflow-scroll mx-1 md:mx-3'>
      {nowPlayingMovies.map((movie: any) => (
      <CardMoviesHome key={movie.id} id={movie.id} title={movie.title} poster={movie.poster_path} rating={movie.vote_average} />
        ))}
        </div>
        <div className={`text-white font-semibold italic text-xs mx-1 md:mx-3 w-fit p-1 rounded-b-full rounded-tr-full my-2 bg-primary ${upcomingMovies.length > 0 ? 'block' : 'hidden'}`}><Link href='/movies/upcoming'>Upcoming</Link></div>
        <div className='scroll-none flex overflow-scroll mx-1 md:mx-3'>
      {upcomingMovies.map((movie: any) => (
      <CardMoviesHome key={movie.id} id={movie.id} title={movie.title} poster={movie.poster_path} rating={movie.vote_average} />
        ))}
        </div>
        <div className={`text-white font-semibold italic text-xs mx-1 md:mx-3 w-fit p-1 rounded-b-full rounded-tr-full my-2 bg-primary ${topRatedMovies.length > 0 ? 'block' : 'hidden'}`}><Link href='/movies/toprated'>Top Rated</Link></div>
        <div className='scroll-none flex overflow-scroll mx-1 md:mx-3'>
      {topRatedMovies.map((movie: any) => (
      <CardMoviesHome key={movie.id} id={movie.id} title={movie.title} poster={movie.poster_path} rating={movie.vote_average} />
        ))}
        </div>
    </main>
    </>
  )
}
