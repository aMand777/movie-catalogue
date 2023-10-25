'use client'
import { Card, CardBody, Text, Divider, Image, Badge } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import DetailMovie from '../fragments/DetailMovie'
import { useDisclosure } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'

interface CardMoviesProps {
  id: string,
  title: string,
  poster: string,
  rating: number,
}

const CardMovie: React.FC<CardMoviesProps> = ({ id, title, poster, rating }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const pathname = usePathname()
  const label = pathname.substring(8)
  
  return (
    <>
      <Card maxW='sm'>
        <button onClick={onOpen}>
        <CardBody className='p-0 static'>
          <Image
            objectFit='cover'
            src={`${process.env.NEXT_PUBLIC_BASEIMGURL}/${poster}`}
              alt={title}
            />
          <Badge variant='solid' colorScheme='red' className='absolute top-0 right-0 rounded-tr-lg'>{label}</Badge>
          {rating !== 0 && (
            <Badge variant='solid' colorScheme='green' className='absolute bottom-5 left-0 rounded-tr-lg'>
              {rating.toString().substring(0, 3)}
              <StarIcon color='yellow.500' className='-mt-1' />
              {rating >= 7 && <StarIcon color='yellow.500' className='-mt-1' />}
              {rating >= 9 && <StarIcon color='yellow.500' className='-mt-1' />}
            </Badge>
          )}
        </CardBody>
        <Divider />
          <Text fontSize='xs' className='font-semibold truncate'>{title}</Text>
      </button>
      </Card>
      <DetailMovie id={id} onClose={onClose} isOpen={isOpen} />
    </>
  )
}

export default CardMovie