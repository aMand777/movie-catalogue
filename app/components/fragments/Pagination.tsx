interface PaginationProps {
  totalPage: number,
  currentPage: number,
  nextPage: () => void,
  prevPage: () => void,
}

const Pagination: React.FC<PaginationProps> = ({ totalPage, nextPage, prevPage, currentPage }) => {

  return (
    <>
      <div className={`col-span-3 md:col-span-4 lg:col-span-5 2xl:col-span-10 text-center text-white my-1 ${totalPage <= 1 && 'hidden'}`}>
        <button onClick={prevPage} className={`mr-3 hover:text-blue-500 ${currentPage === 1 && 'cursor-default hover:text-white opacity-25'}`}>Prev</button>
        <span>{currentPage}</span>/<span>{totalPage}</span>
        <button onClick={nextPage} className={`ml-3 hover:text-blue-500 ${currentPage === totalPage && 'cursor-default hover:text-white opacity-25'}`}>Next</button>
      </div>
    </>
  )
}

export default Pagination