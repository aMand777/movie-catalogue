import React from 'react'
import DetailMovie from '@/app/components/fragments/DetailMovie'

const DetailMoviePage = ({ params }: { params: { slug: string } }) => {
  const id = params.slug[0]

  return (
    <>
      <DetailMovie id={id} />
    </>
  )
}

export default DetailMoviePage
