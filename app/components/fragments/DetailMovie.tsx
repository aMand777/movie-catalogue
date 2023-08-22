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
  const [detailMovies, setDetailMovies] = useState({
    title: '',
    poster_path: '',
    overview: '',
    release_date: '',
    vote_average: '',
  })
  const { isOpen, onClose, id } = Props

  useEffect(() => {
    getDetailMovie(id, (res: any) => {
      setDetailMovies(res.data)
    })
  }, [id])

  const { title, poster_path, overview, release_date, vote_average } = detailMovies

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size='xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className='text-center mt-3'>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody className='sm:flex'>
            <Image
            objectFit='cover'
            boxSize='200px'
            src={`${process.env.NEXT_PUBLIC_BASEIMGURL}/${poster_path}`}
              alt={title}
              className='mx-auto sm:block'
          />
            <div className='flex flex-col sm:ml-3 mt-3 sm:mt-0'>
            <p className='italic text-justify'><span className='font-semibold'>Overview</span> : {overview}</p>
            <p className='italic mt-2'><span className='font-semibold'>Release</span> : {release_date}</p>
            <p className='italic mt-2'><span className='font-semibold'>Rating</span> : {vote_average.toString().substring(0, 3)}</p>
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