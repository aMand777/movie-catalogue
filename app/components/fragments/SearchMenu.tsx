import { Card, CardBody, Text, Divider, Image, useDisclosure } from '@chakra-ui/react'
import DetailMovie from './DetailMovie'
import { StarIcon } from '@chakra-ui/icons'

type CardMoviesProps = {
  id: string;
  title: string;
  poster: string;
  year: string;
  rating: number;
}

const SearchMenu = (Props: CardMoviesProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { title, poster, year, rating, id } = Props
  
  return (
    <>
    <button onClick={onOpen}>
    <div className='grid grid-cols-6 w-fit p-2 bg-black hover:opacity-95 group'>
    <Card key={id} maxW='sm'>
      <CardBody className='p-0 col-span-2 group-hover:animate-pulse'>
        <Image
          objectFit='cover'
          src={`${process.env.NEXT_PUBLIC_BASEIMGURL}/${poster}`}
          alt={title}
        />
      </CardBody>
    </Card>
    <Text fontSize='xs' className='text-white col-span-3 text-left mx-2 2xl:text-lg group-hover:text-primary'>{title}</Text>
          <Text fontSize='xs' className='text-white col-span-1 text-justify 2xl:text-lg group-hover:text-primary'>{year.substring(0, 4)}</Text>
          <Text fontSize='xs' className='text-white col-span-1 text-justify 2xl:text-lg group-hover:text-primary'>
            <StarIcon color='yellow.500' className='mx-1 -mt-1' />
            {rating.toString().substring(0, 3)}
          </Text>
    </div>
    <Divider className='-mt-2'/>
    </button>
    <DetailMovie id={id} onClose={onClose} isOpen={isOpen} />
    </>
  )
}

export default SearchMenu