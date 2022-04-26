import Experience from '../components/Experience'
import { GitHub, Instagram, LinkedIn, Twitter } from '../components/Icons'
import Links, { Link } from '../components/Links'

import EstebanImg from '../images/esteban.jpeg'

export default function Index() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-md px-4 md:px-8 mx-auto">
        <div className='flex justify-between mb-8 flex-col-reverse md:flex-row'>
          <div>
            <h1 className='mb-0 text-6xl'>Esteban Primost</h1>
            <div className='text-blue-500 text-2xl mb-2'>Co-Founder at <Link href='https://geutstudio.com'>GEUT</Link><br />JS Developer</div>
          </div>

          <div className='not-prose flex flex-col items-end'>
            <div className="h-60 md:h-40 w-60 md:w-40 text-right bg-gray-100 overflow-hidden rounded-lg shadow-lg mb-4 md:mb-0">
              <img src={EstebanImg} loading="lazy" alt="Esteban Primost" className="w-full h-full object-cover object-center" />
            </div>
            <div className='my-2 text-blue-500'>
              <a href='mailto:esteban.primost@gmail.com' target='_blank' rel='noreferrer' >esteban.primost@gmail.com</a>
            </div>

            <div className='flex items-center gap-4 fill-blue-500'>
              <a href='https://github.com/estebanprimost' target='_blank' rel='noreferrer'><GitHub /></a>
              <a href='https://www.linkedin.com/in/estebanprimost' target='_blank' rel='noreferrer'><LinkedIn /></a>
              <a href='https://twitter.com/estebanprimost' target='_blank' rel='noreferrer'><Twitter /></a>
              <a href='https://www.instagram.com/estebanprimost' target='_blank' rel='noreferrer'><Instagram /></a>
            </div>
          </div>
        </div>

        <div className='prose prose-slate lg:prose-lg '>
          <Experience />

          <h2 className='text-blue-500'>Estudios</h2>
          <div className='flex flex-col mb-10'>
            <div className='flex items-baseline justify-between flex-wrap'>
              <h6 className='text-2xl'>Licenciatura en Sistemas</h6>
              <span className='text-gray-500'>Febrero de 2005 - Noviembre de 2019</span>
            </div>

            <strong className='mt-2'>
              <Links links={['Universidad Nacional de La Plata']} />
            </strong>
          </div>

          <div className='flex flex-col mb-10'>
            <div className='flex items-baseline justify-between flex-wrap'>
              <h6 className='text-2xl'>Analista Programador<br />Universitario</h6>
              <span className='text-gray-500'>Febrero de 2005 - Diciembre de 2014</span>
            </div>

            <strong className='mt-2'>
              <Links links={['Universidad Nacional de La Plata']} />
            </strong>
          </div>

          <h2 className='text-blue-500'>Idiomas</h2>
          <div className='flex items-baseline justify-between flex-wrap'>
            <h6 className='text-2xl'>Español</h6>
            <span className='text-gray-500'>Nativo</span>
          </div>
          <div className='flex items-baseline justify-between flex-wrap'>
            <h6 className='text-2xl'>Inglés</h6>
            <span className='text-gray-500'>Nivel intermedio</span>
          </div>

        </div>
      </div>
    </div >
  )
}
