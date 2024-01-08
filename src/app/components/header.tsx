import Link from 'next/link'
import React from 'react'
import { getPages } from '../../../sanity/sanity-utils'



const Header = async () => {
  const pages = await getPages()
  return (
    <div className='flex justify-between p-3 items-center sticky top-0 rounded-b-md bg-red-300 bg-opacity-75'>
      <Link href={`/`}>
        <span className='bg-gradient-to-r from-orange-400 via-black to-red-400 text-transparent bg-clip-text
        text-2xl font-extrabold'>
          @n@s
        </span>
      </Link>
      <div className='list-none flex gap-x-4 items-center text-gray-600 text-sm md:text-lg'>
        {
          pages.map((page) => (
            <Link key={page._id} href={`/${page.slug}`}>
              {page.title}
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Header