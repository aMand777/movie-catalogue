import React from 'react'
import { Skeleton, SkeletonText } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

type CardMoviesHomeSkeletonProps = {
  loop: number
}

const MovieSearchSkeleton: React.FC<CardMoviesHomeSkeletonProps> = ({ loop }) => {
  const looping = new Array(loop).fill(null)

  return (
    <>
      {looping.map((_, index) => (
        <div
          key={index}
          className='grid grid-cols-3 w-full h-32 bg-black opacity-95 border-b border-white'>
          <Skeleton className='w-20 h-5/6 mt-2 ml-2' />
          <SkeletonText
            className='animate-pulse mt-2 w-full rounded-full ml-3'
            noOfLines={1}
            spacing='1'
            skeletonHeight='2'
          />
          <div className='animate-pulse ml-auto mr-1'>
            <StarIcon className='text-slate-700 animate-pulse' />
            <StarIcon className='text-slate-700 animate-pulse' />
            <StarIcon className='text-slate-700 animate-pulse' />
          </div>
        </div>
      ))}
    </>
  )
}

export default MovieSearchSkeleton
