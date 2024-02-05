import React from 'react'
import { Badge, Skeleton, SkeletonText } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

type CardMovieSkeletonProps = {
  loop: number
}

const CardMovieSkeleton: React.FC<CardMovieSkeletonProps> = ({ loop }) => {
  const looping = new Array(loop).fill(null)

  return (
    <>
      {looping.map((_, index) => (
        <div key={index} >
        <div className='w-24 h-36 md:w-32 md:h-48 lg:w-40 lg:h-60 mx-1'>
          <div className='w-full h-5/6'>
            <Skeleton className='w-full h-full' />
            <Badge className='-mt-12 rounded-tr-lg'>
              <StarIcon className='-mt-1 text-slate-700' />
              <StarIcon className='-mt-1 text-slate-700' />
              <StarIcon className='-mt-1 text-slate-700' />
            </Badge>
          </div>
          <div className='w-full h-1/6 flex flex-col justify-center bg-slate-500'>
            <SkeletonText
              className='animate-pulse w-11/12 rounded-full mx-auto'
              noOfLines={1}
              spacing='1'
              skeletonHeight='3'
            />
          </div>
        </div>
        </div>
      ))}
    </>
  )
}

export default CardMovieSkeleton
