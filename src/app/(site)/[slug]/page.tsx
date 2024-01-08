import React from 'react'
import { getPage } from '../../../../sanity/sanity-utils'
import { PortableText } from '@portabletext/react'
const Page = async ({ params }: { params: { slug: string } }) => {
    const page = await getPage(params.slug)
    return (
        <div className='mt-20'>
            <h1 className='bg-gradient-to-r from-orange-600 via-black to-red-600 text-transparent bg-clip-text
        text-4xl font-extrabold'>
                {page.title}
            </h1>
            <div className='text-lg text-gray-700 mt-8'>

                <PortableText value={page.content} />
            </div>
        </div>
    )
}

export default Page