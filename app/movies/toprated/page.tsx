'use client'
import { getTopRatedMovies } from '@/app/services/movies'
import { useEffect, useState } from 'react'
import CardMovie from '../../components/fragments/CardMovie'

const TopRatedPage = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getTopRatedMovies((res: any) => {
      setMovies(res.data.results)
    })
  }, [])

  return (
    <>
    <div className='grid grid-cols-3 gap-2 px-3 md:px-5 lg:px-10 md:grid-cols-4 md:gap-3 lg:grid-cols-6 lg:gap-5 top-28 absolute -z-10'>
      {movies.map((movie: any) => (
      <CardMovie key={movie.id} id={movie.id} title={movie.title} poster={movie.poster_path} />
    ))}
    </div>
    </>
  )
}

export default TopRatedPage