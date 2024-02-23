import React, { useContext } from 'react'
import { Songs } from '../Context'

function ListSong() {
  const { DataSongs } = useContext(Songs)
  console.log(DataSongs)

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
              <tr key={id} className='bg-slate-800 h-12 text-gray-400 hover:bg-slate-600'>
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