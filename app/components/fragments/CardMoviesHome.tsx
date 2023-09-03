'use client'
import { Text, Divider, Badge } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import DetailMovie from './DetailMovie'
import { useDisclosure } from '@chakra-ui/react'
import Image from 'next/image'

type CardProps = {
  id: string;
  title: string;
  poster: string;
  rating: number;
}

const CardMoviesHome = (Props: CardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { id, title, poster, rating } = Props
  
  return (
    <div className='mx-1'>
      <div>
        <button onClick={onOpen}>
        <div className='w-24 h-36 md:w-32 md:h-48 lg:w-40 lg:h-60 relative'>
          <Image
          src={`${process.env.NEXT_PUBLIC_BASEIMGURL}/${poster}`}
          alt={title}
          fill={true}
          />
            <Badge variant='solid' colorScheme='green' className={`absolute bottom-0 left-0 rounded-tr-lg ${rating === 0 && 'hidden'}`}>{rating.toString().substring(0, 3)}
              <StarIcon color='yellow.500' className='-mt-1' />
              <StarIcon color='yellow.500' className={`-mt-1 ${rating < 7 && 'hidden' }`} />
              <StarIcon color='yellow.500' className={`-mt-1 ${rating < 9 && 'hidden' }`} />
            </Badge>
        </div>
        <Divider />
          <Text fontSize='xs' className='font-semibold truncate bg-white w-24 md:w-32 lg:w-40 px-1 rounded:lg'>{title}</Text>
      </button>
      </div>
      <DetailMovie id={id} onClose={onClose} isOpen={isOpen} />
    </div>
  )
}

export default CardMoviesHome