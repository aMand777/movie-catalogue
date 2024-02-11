'use client'
import { getDetailMovie } from '@/app/services/movies'
import { useState } from 'react'
import { StarIcon } from '@chakra-ui/icons'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
} from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import DetailMovieSkeleton from '../templates/DetailMovieSkeleton'
import ContentDetailMovie from './ContentDetailMovie'

type MovieDetail = {
  id: string
  title: string
  overview: string
  poster_path: string
  release_date: string
  vote_average: number
  status: string
  tagline: string
  original_language: string
  original_title: string
  budget: number
  runtime: number
  country: string
  genre: string
  production: string
  spoken: string
}

const DetailMovie = ({ id }: { id: string }) => {
  const router = useRouter()
  const [detailMovie, setDetailMovie] = useState<MovieDetail>()

  const { isLoading } = useQuery({
    queryKey: ['GET_DETAIL_MOVIE', id],
    queryFn: async () => {
      const response = await getDetailMovie(id)
      const movie = response.data
      const spokenLanguages = movie.spoken_languages.map((spoken: { name: string }) => spoken.name)
      const countries = movie.production_countries.map((country: { name: string }) => country.name)
      const productions = movie.production_companies.map(
        (company: { name: string }) => company.name,
      )
      const genres = movie.genres.map((genre: { name: string }) => genre.name)
      const production = productions.join(', ')
      const country = countries.join(', ')
      const genre = genres.join(', ')
      const spoken = spokenLanguages.join(', ')
      const movieDetail: MovieDetail = {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        status: movie.status,
        tagline: movie.tagline,
        budget: movie.budget,
        runtime: movie.runtime,
        original_language: movie.original_language,
        original_title: movie.original_title,
        country,
        genre,
        production,
        spoken,
      }
      setDetailMovie(movieDetail)
      return response
    },
  })

  const handleButtonClose = () => {
    router.back()
  }

  if (isLoading) {
    return <DetailMovieSkeleton />
  }

  return (
    <>
      <Modal onClose={handleButtonClose} isOpen={true} size='full'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className='text-center mt-5'>{detailMovie?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody className='sm:flex'>
            <Image
              width='400px'
              height='500px'
              src={`${process.env.NEXT_PUBLIC_BASEIMGURL}/${detailMovie?.poster_path}`}
              alt={detailMovie?.title}
              className='mx-auto'
            />
            <div className='flex flex-col sm:ml-3 mt-3 sm:mt-0'>
              <ContentDetailMovie title='Overview'>{detailMovie?.overview}</ContentDetailMovie>
              <ContentDetailMovie title='Release'>{detailMovie?.release_date}</ContentDetailMovie>
              <ContentDetailMovie title='Runtime'>{detailMovie?.runtime} min</ContentDetailMovie>
              <ContentDetailMovie title='Genre'>{detailMovie?.genre}</ContentDetailMovie>
              <ContentDetailMovie
                className={detailMovie?.vote_average === 0 ? 'hidden' : ''}
                title='Rating'>
                <StarIcon color='yellow.500' className='mx-1 -mt-1' />
                <StarIcon
                  color='yellow.500'
                  className={`mx-1 -mt-1 ${
                    detailMovie !== undefined && detailMovie.vote_average < 7 && 'hidden'
                  }`}
                />
                <StarIcon
                  color='yellow.500'
                  className={`mx-1 -mt-1 ${
                    detailMovie !== undefined && detailMovie.vote_average < 9 && 'hidden'
                  }`}
                />
                {detailMovie?.vote_average.toString().substring(0, 3)}
              </ContentDetailMovie>
              <ContentDetailMovie title='Budget'>
                {detailMovie?.budget.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </ContentDetailMovie>
              <ContentDetailMovie title='Original Title'>
                {detailMovie?.original_title}
              </ContentDetailMovie>
              <ContentDetailMovie title='Original Language'>
                {detailMovie?.original_language}
              </ContentDetailMovie>
              <ContentDetailMovie title='Tagline'>{detailMovie?.tagline}</ContentDetailMovie>
              <ContentDetailMovie title='Production Companies'>
                {detailMovie?.production}
              </ContentDetailMovie>
              <ContentDetailMovie title='Production Country'>
                {detailMovie?.country}
              </ContentDetailMovie>
              <ContentDetailMovie title='Spoken Language'>{detailMovie?.spoken}</ContentDetailMovie>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleButtonClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default DetailMovie
