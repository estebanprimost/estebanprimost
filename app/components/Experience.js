import { Fragment } from 'react'

import Links from './Links'


function ExperienceItem({ title, titleLink = title, date, occupation, links = [] }) {
  return (
    <div className='flex flex-col mb-10'>
      <div className='flex items-baseline justify-between flex-wrap'>
        <h6 className='text-2xl'>{title ? title : <Links links={[titleLink]} />}</h6>
        <span className='text-gray-500'>{date}</span>
      </div>


      <span className='mt-2 text-xl'>{occupation}</span>

      <Links
        links={links}
        className='text-base'
      />
    </div>
  )
}

export default function Experience() {
  return (
    <>
      <h2 className='text-blue-500'>Experiencia</h2>

      <ExperienceItem
        titleLink='GEUT'
        date='Septiembre de 2018 — Presente'
        occupation='Desarrollador de Software.'
        links={[
          'React',
          'Node.js',
          'GraphQL',
          'Hypercore Protocol',
          'PostgreSQL',
          'Prisma',
          'MUI'
        ]}
      />

      <ExperienceItem
        titleLink='Ingenious'
        date='Junio de 2017 — Septiembre de 2018'
        occupation='Desarrollador de Software.'
        links={[
          'React',
          'React Native',
          'Node.js',
          'PostgreSQL'
        ]}
      />

      <ExperienceItem
        titleLink={<>Subsecretaría de Innovación<br /> y Experiencia Ciudadana</>}
        date='Noviembre de 2016 — Junio de 2017'
        occupation='Desarrollador de Software.'
        links={[
          'React',
          'Node.js',
          'PostgreSQL'
        ]}
      />

      <ExperienceItem
        titleLink='Language Trainers'
        date='Febrero de 2015 — Octubre de 2016'
        occupation='Desarrollador de Software.'
        links={[
          'React',
          'Node.js',
          'PHP',
          'Laravel',
          'MySQL'
        ]}
      />

      <ExperienceItem
        titleLink='Unidad Ejecutora Provincial'
        date='Junio de 2012 — Diciembre de 2014'
        occupation='Desarrollador de Software. Diseño de software de gestión. Mantenimiento de aplicaciones.'
        links={[
          'PHP',
          'JavaScript',
          'Symfony',
          'MySQL'
        ]}
      />

      <ExperienceItem
        titleLink='RP Solutions'
        date='Enero de 2011 — Diciembre de 2014'
        occupation='Desarrollador de Software.'
        links={[
          'Android',
          'PHP',
          'JavaScript',
          'Symfony',
          'MySQL'
        ]}
      />

      <ExperienceItem
        titleLink='Universidad Católica de La Plata'
        date='Marzo de 2010 — Febrero de 2011'
        occupation='Desarrollador de Software.'
        links={[
          'PHP',
          'JavaScript',
          'Symfony',
          'SQLServer'
        ]}
      />

      <ExperienceItem
        titleLink='VMN+'
        date='Septiembre de 2009 — Marzo de 2010'
        occupation='Desarrollador de Software.'
        links={[
          'PHP',
          'Adobe Flex',
          'OpenLaszlo'
        ]}
      />

      <ExperienceItem
        titleLink='AM Soluciones Web'
        date='Marzo de 2009 — Agosto de 2009'
        occupation='Desarrollador de Software.'
        links={[
          'PHP',
          'Javascript',
          'CSS'
        ]}
      />

      <ExperienceItem
        titleLink='Universidad Nacional de La Plata'
        date='Marzo de 2006 — Marzo de 2007'
        occupation='Ayudante / Colaborador Ad honorem en la cátedra de Programación de Computadoras de la Facultad de
        Informática. Soporte a los ingresantes en las actividades de la materia.'
      />
    </>
  )
}