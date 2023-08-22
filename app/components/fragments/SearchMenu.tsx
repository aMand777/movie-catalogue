import { Card, CardBody, Text, Divider, Image, useDisclosure } from '@chakra-ui/react'
import DetailMovie from './DetailMovie'

type CardMoviesProps = {
  id: string;
  title: string;
  poster: string;
  year: string;
  keyword: string;
  onFocus: boolean;
}

const SearchMenu = (Props: CardMoviesProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { title, poster, year, id, keyword, onFocus } = Props
  
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
    <Text fontSize='xs' className='text-white col-span-3 text-left mx-2 xl:text-lg group-hover:text-primary'>{title}</Text>
    <Text fontSize='xs' className='text-white col-span-1 text-justify -ml-3 xl:text-lg group-hover:text-primary'>{year}</Text>
    </div>
    <Divider className='-mt-2'/>
    </button>
    <DetailMovie id={id} onClose={onClose} isOpen={isOpen} />
    </>
  )
}

export default SearchMenu