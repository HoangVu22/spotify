import React, { useContext } from 'react'
import { Songs } from '../Context'

function DetailSong() {
  const { song } = useContext(Songs)


  return (
    <div className='col-span-1 p-4'>
      <h2 className='text-cyan-500 font-bold pb-2'>Playlist</h2>
      <h2 className='text-neutral-400 text-2xl'>{ song.name }</h2>
      <div className='w-[220px] m-auto mt-10'>
        <img className='w-full rounded-md' src={ song.links.images[0].url } alt='avatar' />
      </div>
      <div className='flex justify-evenly items-center mt-6'>
        <img className='w-[60px] rounded-full' src={ song.links.images[1].url } alt='avatar' />
        <span className='text-lg text-white'>{ song.author }</span>
      </div>
    </div>
  )
}

export default DetailSong