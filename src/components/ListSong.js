import React, { useContext, useEffect, useState } from 'react'
import { Songs } from '../Context'

function ListSong() {
  const { DataSongs, handleSetSong, song } = useContext(Songs)

  const [idSong, setIdSong] = useState(0)
  const handlePlaySong = (idSong) => {
    setIdSong(idSong)
    handleSetSong(idSong)
  }

  // mỗi khi mà song thay đổi thì cập nhật lại cái id 
  useEffect(() => {
    setIdSong(song.id)
  }, [song])

  return (
    <div className='col-span-2 overflow-y-scroll'>
      <table className='table-auto w-full'>
        <thead className='text-white h-12'>
          <tr>
            <th className='w-[15%]'>#</th>
            <th className='text-left'>Title</th>
            <th className='w-[15%]'>Author</th>
            <th className='w-[15%]'><i class="fa fa-download"></i></th>
          </tr>
        </thead>
        <tbody>
          {
            DataSongs.map((song, id) => (
              <tr
                key={id}
                className={`bg-slate-800 h-12 text-gray-400 hover:bg-slate-600 ${idSong === song.id && 'bg-slate-600 text-teal-400'}`}
                onClick={() => handlePlaySong(song.id)}
              >
                <td className='text-center'>{ id + 1 }</td>
                <td className='cursor-pointer'>{ song.name }</td>
                <td className='text-center'>{ song.author }</td>
                <td className='text-center cursor-pointer'>
                  <a href={ song.url }>
                    <i class="fa fa-download"></i>
                  </a>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListSong