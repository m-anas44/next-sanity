import React from 'react'
import { getProject } from '../../../../../sanity/sanity-utils'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
const Page = async ({ params }: { params: { project: string } }) => {
  console.log(params.project)
  const slug = params.project
  const myProject = await getProject(slug)
  return (
    <div className='px-3'>
      <div className='flex justify-between mt-20'>
        <h1 className='text-5xl font-extrabold bg-gradient-to-r from-red-600 to bg-orange-600 via-black bg-clip-text
      text-transparent'>
          {myProject.name}
        </h1>
        <Link
          href={`${myProject.url}`}
          target='_blank'
          rel='noopener noreferrer'
          className='bg-gray-100 text-gray-500 font-bold px-4 py-3 whitespace-nowrap hover:bg-pink-600
           hover:text-pink-100 rounded-lg transition'
        >
          View Project
        </Link>
      </div>
      <div className='text-lg text-gray-700 mt-2'>
        <PortableText value={myProject.content} />
      </div>
      <Image
      src={myProject.image}
      alt={myProject.name}
      width={1920}
      height={1080}
      className='rounded-xl border-2 border-gray-700 mt-20 object-cover'
      />
    </div>
  )
}

export default Page