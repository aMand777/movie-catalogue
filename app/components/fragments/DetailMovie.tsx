import { getDetailMovie } from '@/app/services/movies'
import { useState, useEffect } from 'react'
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

type DetailMovieProps = {
  onClose: () => void;
  isOpen: boolean;
  id: string;
}

const DetailMovie = (Props: DetailMovieProps) => {
  const [genres, setGenres] = useState([])
  const [companies, setCompanies] = useState([])
  const [countries, setCountries] = useState([])
  const [spoken, setSpoken] = useState([])
  const [detailMovies, setDetailMovies] = useState({
    title: '',
    poster_path: '',
    overview: '',
    release_date: '',
    vote_average: '',
    budget: 0,
    original_language: '',
    popularity: null,
    runtime: null,
    status: '',
    tagline: '',
    original_title: '',
  })
  const { isOpen, onClose, id } = Props

  useEffect(() => {
    getDetailMovie(id, (res: any) => {
      setDetailMovies(res.data)
      setGenres(res.data.genres)
      setCompanies(res.data.production_companies)
      setCountries(res.data.production_countries)
      setSpoken(res.data.spoken_languages)
    })
  }, [id])

  const { title, poster_path, overview, release_date, vote_average, budget, runtime, tagline, original_language, original_title } = detailMovies

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size='full'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className='text-center mt-3'>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody className='sm:flex'>
            <Image
            width={{base: '200px', sm: '300px', lg: '400px'}}
            height={{base: '300px', sm: '400', lg: '500px'}}
            src={`${process.env.NEXT_PUBLIC_BASEIMGURL}/${poster_path}`}
              alt={title}
              className='mx-auto sm:block'
          />
            <div className='flex flex-col sm:ml-3 mt-3 sm:mt-0'>
            <p className='italic text-justify'><span className='font-semibold'>Overview</span> : {overview}</p>
            <p className='italic mt-2'><span className='font-semibold'>Release</span> : {release_date}</p>
            <p className='italic mt-2'><span className='font-semibold'>Runtime</span> : {`${runtime} min`}</p>
            <div className='flex flex-wrap mt-2'>
              <span className='font-semibold'>Genre :</span>
              {genres.length > 0 && genres.map((genre: any) => (
              <p key={genre.id} className='italic text-justify'>{`${genre.name}, `}</p>
              ))}
            </div>
            <p className='italic mt-2'><span className='font-semibold'>Rating</span> : {vote_average.toString().substring(0, 3)}</p>
            <p className='italic mt-2'><span className='font-semibold'>Budget</span> : {budget.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
            <p className='italic mt-2'><span className='font-semibold'>Original Title</span> : {original_title}</p>
            <p className='italic mt-2'><span className='font-semibold'>Original Language</span> : {original_language}</p>
            <p className='italic mt-2'><span className='font-semibold'>Tagline</span> : {tagline}</p>
            <div className='flex flex-wrap mt-2'>
              <span className='font-semibold'>Production Companies :</span>
              {companies.length > 0 && companies.map((company: any) => (
              <p key={company.id} className='italic text-justify'>{`${company.name}, `}</p>
              ))}
            </div>
            <div className='flex flex-wrap mt-2'>
              <span className='font-semibold'>Production Country :</span>
              {countries.length > 0 && countries.map((country: any) => (
              <p key={country.id} className='italic text-justify'>{`${country.name}, `}</p>
              ))}
            </div>
            <div className='flex flex-wrap mt-2'>
              <span className='font-semibold'>Spoken Language :</span>
              {spoken.length > 0 && spoken.map((speak: any) => (
              <p key={speak.id} className='italic text-justify'>{`${speak.name}, `}</p>
              ))}
            </div>
          </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default DetailMovie