'use client'
import { getUpcomingMovies } from '@/app/services/movies'
import { useState } from 'react'
import CardMovie from '../../components/fragments/CardMovie'
import Pagination from '@/app/components/fragments/Pagination'
import CardMovieSkeleton from '@/app/components/fragments/CardMovieSkeleton'
import { useQuery } from '@tanstack/react-query'

const UpcomingPage = () => {
  const [totalPages, setTotalPages] = useState(1)
  const [page, setPage] = useState(1)

  const { data: upcomingMovies, isLoading } = useQuery({
    queryKey: ['GET_UPCOMING_MOVIES', page],
    queryFn: async () => {
      const response = await getUpcomingMovies(page)
      setTotalPages(response.data.total_pages)
      return response.data.results
    },
  })

  const nextPage = () => {
    setPage(page === totalPages ? page : page + 1)
  }

  const prevPage = () => {
    setPage(page <= 1 ? 1 : page - 1)
  }

  interface MovieInterface {
    id: string
    title: string
    poster_path: string
    vote_average: number
  }

  return (
    <>
      <div className='grid grid-cols-3 gap-2 px-3 md:px-5 lg:px-10 md:grid-cols-4 md:gap-3 lg:grid-cols-5 lg:gap-5 2xl:grid-cols-10 top-28 left-0 right-0 absolute -z-10'>
        {upcomingMovies?.map((movie: MovieInterface) => (
          <CardMovie
            key={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            rating={movie.vote_average}
            link={`/movies/${movie.id}/${movie.title}`}
          />
        ))}
        {isLoading && <CardMovieSkeleton loop={20} />}
        <Pagination
          totalPage={totalPages}
          currentPage={page}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </div>
    </>
  )
}

export default UpcomingPage
