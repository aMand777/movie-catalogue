import React from 'react'

type ContentDetailMovieProps = {
  title: string
  children: React.ReactNode
  className?: string
}

const ContentDetailMovie: React.FC<ContentDetailMovieProps> = ({children, title, className}) => {
  return (
    <>
    <div className='flex flex-wrap mt-2'>
      <span className='font-semibold'>{title}:</span>
      <p className={`italic text-justify mx-1 ${className}`}>{children}</p>
    </div>
    </>
  )
}

export default ContentDetailMovie