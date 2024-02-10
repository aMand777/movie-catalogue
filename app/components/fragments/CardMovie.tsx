'use client'
import { Card, CardBody, Text, Divider, Image, Badge } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

type CardMoviesProps = {
  title: string
  poster: string
  rating: number
  link: string
}

const CardMovie: React.FC<CardMoviesProps> = ({ title, poster, rating, link }) => {
  const pathname = usePathname()
  const label = pathname.substring(8)

  return (
    <>
      <Card maxW='sm'>
        <Link href={link}>
          <CardBody className='p-0 static'>
            <Image
              objectFit='cover'
              src={`${process.env.NEXT_PUBLIC_BASEIMGURL}/${poster}`}
              alt={title}
            />
            <Badge
              variant='solid'
              colorScheme='red'
              className='absolute top-0 right-0 rounded-tr-lg'>
              {label}
            </Badge>
            {rating !== 0 && (
              <Badge
                variant='solid'
                colorScheme='green'
                className='absolute bottom-5 left-0 rounded-tr-lg'>
                {rating.toString().substring(0, 3)}
                <StarIcon color='yellow.500' className='-mt-1' />
                {rating >= 7 && <StarIcon color='yellow.500' className='-mt-1' />}
                {rating >= 9 && <StarIcon color='yellow.500' className='-mt-1' />}
              </Badge>
            )}
          </CardBody>
          <Divider />
          <Text fontSize='xs' className='font-semibold truncate'>
            {title}
          </Text>
        </Link>
      </Card>
    </>
  )
}

export default CardMovie
