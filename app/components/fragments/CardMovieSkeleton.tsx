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
        <div key={index}>
          <div className='w-28 h-40 md:w-36 md:h-56 lg:w-48 lg:h-72 mx-1 relative'>
            <Badge className='absolute top-0 right-0 rounded-tr-lg h-4 w-1/2 animate-pulse'></Badge>
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
