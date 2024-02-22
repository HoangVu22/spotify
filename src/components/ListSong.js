import React from 'react'

function ListSong() {
  return (
    <div className='col-span-2'>
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
        <tr className='bg-slate-800 h-12 text-gray-400 hover:bg-slate-600'>
            <td className='text-center'>1</td>
            <td className='cursor-pointer'>Sing me to sleep</td>
            <td className='text-center'>Alan Walker</td>
            <td className='text-center cursor-pointer'><i class="fa fa-download"></i></td>
          </tr>
          <tr className='bg-slate-800 h-12 text-gray-400 hover:bg-slate-600'>
            <td className='text-center'>2</td>
            <td className='cursor-pointer'>Sing me to sleep</td>
            <td className='text-center'>Alan Walker</td>
            <td className='text-center cursor-pointer'><i class="fa fa-download"></i></td>
          </tr>
          <tr className='bg-slate-800 h-12 text-gray-400 hover:bg-slate-600'>
            <td className='text-center'>3</td>
            <td className='cursor-pointer'>Sing me to sleep</td>
            <td className='text-center'>Alan Walker</td>
            <td className='text-center cursor-pointer'><i class="fa fa-download"></i></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ListSong