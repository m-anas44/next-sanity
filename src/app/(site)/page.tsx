import Image from 'next/image'
import { getProjects } from '../../../sanity/sanity-utils' 
import Link from 'next/link'


export default async function Home() {
  const projects = await getProjects()
  return (
    <div>
      <div className='px-3 my-32'>
        <h1 className='text-6xl font-semibold font-sans'>Hello, I'm <br className='md:hidden' />
          <span className='font-bold bg-gradient-to-r from-red-600 to-orange-600 via-black text-transparent bg-clip-text'>Anas</span>
        </h1>
        <p className='text-gray-600 font-semibold my-2'>nǐ hǎo Everyone! I&apos;m an aspiring Snr. FullStack Developer</p>
      </div>
      <div className='px-3'>
        <p className='text-gray-600 font-bold text-2xl'>My Projects</p>
        <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

          {
            projects.map((project) => (
              <Link href={`/projects/${project.slug}`} key={project._id} className='border-2 border-gray-700 rounded-lg hover:scale-105 hover:border-red-900 transition'>
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={750}
                    height={300}
                    className='object-cover rounded-t-lg border-gray-700' />
                )
                }
                <div className='mt-2 text-center font-extrabold bg-gradient-to-r from-orange-600 via-black to-red-600 text-transparent bg-clip-text'>
                  {project.name}
                </div>
              </Link>
            ))
          }
        </div>

      </div>
    </div>
  )
}

