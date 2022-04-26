import { Fragment } from 'react'

const linksHrefs = {
  'AM Soluciones Web': 'https://amsolucionesweb.com/',
  'GEUT': 'https://geutstudio.com',
  'GraphQL': 'https://graphql.org/',
  'Hypercore Protocol': 'https://hypercore-protocol.org/',
  'Ingenious': 'https://www.ingenious.agency/',
  'Language Trainers': 'https://www.languagetrainers.com/',
  'Laravel': 'https://laravel.com/',
  'MUI': 'https://mui.com/',
  'MySQL': 'https://www.mysql.com/',
  'Node.js': 'https://nodejs.org',
  'PHP': 'https://www.php.net/',
  'PostgreSQL': 'https://www.postgresql.org/',
  'Prisma': 'https://www.prisma.io/',
  'React Native': 'https://reactnative.dev/',
  'React': 'https://reactjs.org',
  'Symfony': 'https://symfony.com/',
  'Universidad Nacional de La Plata': 'https://unlp.edu.ar/',
  'VMN+': 'http://www.vmnplus.com/',
}

export function Link({ children, ...props }) {
  return <a className='underline underline-offset-4' target='_blank' rel='noreferrer' {...props}>{children}</a>
}

export default function Links({ links = [], ...props }) {
  return (
    <div {...props}>
      {
        links.map((link, index) => (
          <Fragment key={link}>
            <Link href={linksHrefs[link]} className='text-slate-700'>{link}</Link>
            {index < links.length - 1 && ' • '}
          </Fragment>
        ))
      }
    </div>
  )
}
