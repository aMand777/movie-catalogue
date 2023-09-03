'use client'
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useState, useEffect } from 'react'
import { searchMovie } from '@/app/services/movies'
import SearchMenu from '../fragments/SearchMenu'

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [keyword, setKeyword] = useState('')
  const [movieSearch, setMovieSearch] = useState([])
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScroll(scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
  }

    const handleFocus = () => {
      setIsFocused(true);
    };
  
  const handleClick = () => {
      setIsFocused(false);
    };

  useEffect(() => {
    if (keyword.length >= 3) {
      searchMovie(keyword, (res: any) => {
      setMovieSearch(res.data.results)
    })

    }
  }, [keyword])
  
  return (
    <>
    <button onClick={handleClick} className={`${!isFocused && 'hidden'}`}>
      <div className='bg-black opacity-50 cursor-default w-screen h-screen fixed top-0 z-30'></div>
    </button>
    <div className={`container px-3 sm:w-1/2 lg:w-1/3 md:px-5 lg:px-10 fixed top-14 ${scroll > 15 && !isFocused ? 'hidden' : ''} ${isFocused ? 'z-40' : 'z-0'} ${scroll > 10 && 'opacity-5'}`}>
    <InputGroup>
      <InputLeftElement pointerEvents='none'>
        <SearchIcon color='gray.300' />
      </InputLeftElement>
      <Input onChange={handleChange} onFocus={handleFocus} placeholder='Search movie...' colorScheme='whiteAlpha' variant='filled' className='focus:text-white'/>
    </InputGroup>
      <div className={`h-screen overflow-scroll relative ${keyword.length < 3 || !isFocused ? 'hidden' : ''}`}>
      {movieSearch.map((movie: any) => (
        <SearchMenu key={movie.id} id={movie.id} title={movie.title} poster={movie.poster_path} year={movie.release_date} rating={ movie.vote_average } />
    ))}
      </div>
      </div>
    </>
  )
}

export default SearchBar