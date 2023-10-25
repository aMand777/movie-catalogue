'use client'
import CardMoviesHome from './components/fragments/CardMoviesHome'
import { getPopularMovies, getTrendingMovies, getNowPlayingMovies, getUpcomingMovies, getTopRatedMovies } from './services/movies'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Badge } from '@chakra-ui/react'

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
        <div className='flex justify-between items-center mx-1 md:mx-3'>
          {popularMovies.length > 0 && <Badge variant='solid' colorScheme='red' className='rounded-tr-lg cursor-default'>Popular</Badge>}
        <Link href='/movies/popular'>
            {popularMovies.length > 0 && <span className='flex text-viewAll text-[10px] lg:text-xs hover:text-white items-center'>
              <p className='hover:mr-1 p-2 duration-500'>View All Popular Movies</p><ArrowForwardIcon boxSize={4} className='hover:ml-1 duration-500' />
            </span>}
        </Link>
          </div>
        <div className='scroll-none flex overflow-scroll mx-1 md:mx-3'>
      {popularMovies.length > 0 && popularMovies.map((movie: any) => (
        <CardMoviesHome key={movie.id} id={movie.id} title={movie.title} poster={movie.poster_path} rating={movie.vote_average} />
        ))}
        </div>
        <div className='flex justify-between items-center mt-5 mx-1 md:mx-3'>
          {trendingMovies.length > 0 && <Badge variant='solid' colorScheme='red' className='rounded-tr-lg cursor-default'>Trending</Badge>}
        <Link href='/movies/trending'>
            {trendingMovies.length > 0 && <span className='flex text-viewAll text-[10px] lg:text-xs hover:text-white items-center'>
              <p className='hover:mr-1 p-2 duration-500'>View All Trending Movies</p><ArrowForwardIcon boxSize={4} className='hover:ml-1 duration-500' />
            </span>}
        </Link>
          </div>
        <div className='scroll-none flex overflow-scroll mx-1 md:mx-3'>
      {trendingMovies.length > 0 && trendingMovies.map((movie: any) => (
      <CardMoviesHome key={movie.id} id={movie.id} title={movie.title} poster={movie.poster_path} rating={movie.vote_average} />
        ))}
        </div>
        <div className='flex justify-between items-center mt-5 mx-1 md:mx-3'>
          {nowPlayingMovies.length > 0 && <Badge variant='solid' colorScheme='red' className='rounded-tr-lg cursor-default'>Now Playing</Badge>}
        <Link href='/movies/nowplaying'>
            {nowPlayingMovies.length > 0 && <span className='flex text-viewAll text-[10px] lg:text-xs hover:text-white items-center'>
              <p className='hover:mr-1 p-2 duration-500'>View All Now Playing Movies</p><ArrowForwardIcon boxSize={4} className='hover:ml-1 duration-500' />
            </span>}
        </Link>
          </div>
        <div className='scroll-none flex overflow-scroll mx-1 md:mx-3'>
      {nowPlayingMovies.length > 0 && nowPlayingMovies.map((movie: any) => (
      <CardMoviesHome key={movie.id} id={movie.id} title={movie.title} poster={movie.poster_path} rating={movie.vote_average} />
        ))}
        </div>
        <div className='flex justify-between items-center mt-5 mx-1 md:mx-3'>
          {upcomingMovies.length > 0 && <Badge variant='solid' colorScheme='red' className='rounded-tr-lg cursor-default'>Upcoming</Badge>}
        <Link href='/movies/upcoming'>
            {upcomingMovies.length > 0 && <span className='flex text-viewAll text-[10px] lg:text-xs hover:text-white items-center'>
              <p className='hover:mr-1 p-2 duration-500'>View All Upcoming Movies</p><ArrowForwardIcon boxSize={4} className='hover:ml-1 duration-500' />
            </span>}
        </Link>
          </div>
        <div className='scroll-none flex overflow-scroll mx-1 md:mx-3'>
      {upcomingMovies.length > 0 && upcomingMovies.map((movie: any) => (
      <CardMoviesHome key={movie.id} id={movie.id} title={movie.title} poster={movie.poster_path} rating={movie.vote_average} />
        ))}
        </div>
        <div className='flex justify-between items-center mt-5 mx-1 md:mx-3'>
          {topRatedMovies.length > 0 && <Badge variant='solid' colorScheme='red' className='rounded-tr-lg cursor-default'>Top Rated</Badge>}
        <Link href='/movies/toprated'>
            {topRatedMovies.length > 0 && <span className='flex text-viewAll text-[10px] lg:text-xs hover:text-white items-center'>
              <p className='hover:mr-1 p-2 duration-500'>View All Top Rated Movies</p><ArrowForwardIcon boxSize={4} className='hover:ml-1 duration-500' />
            </span>}
        </Link>
          </div>
        <div className='scroll-none flex overflow-scroll mx-1 md:mx-3 mb-10'>
      {topRatedMovies.length > 0 && topRatedMovies.map((movie: any) => (
      <CardMoviesHome key={movie.id} id={movie.id} title={movie.title} poster={movie.poster_path} rating={movie.vote_average} />
        ))}
        </div>
      </main>
    </>
  )
}
