import React from 'react'

function DetailSong() {
  return (
    <div className='col-span-1 p-4'>
      <h2 className='text-cyan-500 font-bold pb-2'>Playlist</h2>
      <h2 className='text-neutral-400 text-2xl'>Fade-NCS Release</h2>
      <div className='w-[220px] m-auto mt-10'>
        <img className='w-full rounded-md' src='https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576' alt='avatar' />
      </div>
      <div className='flex justify-evenly items-center mt-6'>
        <img className='w-[60px] rounded-full' src='https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576' alt='avatar' />
        <span className='text-lg text-white'>Alan Walker</span>
      </div>
    </div>
  )
}

export default DetailSong