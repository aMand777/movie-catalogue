import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const DetailMovieSkeleton = () => {
  const router = useRouter()

  const handleButtonClose = () => {
    router.back()
  }

  return (
    <>
      <Modal onClose={handleButtonClose} isOpen={true} size='full'>
        <ModalContent>
          <ModalHeader className='text-center mt-5'>
            <Skeleton height='20px' className='w-2/3 sm:w-1/2 lg:w-1/3 mx-auto' />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody className='sm:flex'>
            <Skeleton className='w-72 h-96 sm:w-[400px] sm:h-[500px] mx-auto' />
            <div className='flex flex-col sm:ml-3 mt-3 sm:mt-0 sm:w-2/3'>
              <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='5' />
              <SkeletonText className='mt-16' mt='4' noOfLines={3} spacing='4' skeletonHeight='5' />
              <SkeletonText className='mt-16' mt='4' noOfLines={4} spacing='4' skeletonHeight='5' />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleButtonClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default DetailMovieSkeleton
