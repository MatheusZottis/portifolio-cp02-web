import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='flex-col mt-12 flex items-center'>
      {name && (
        <h1>
          Ola, somos o grupo <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='mt-5'>A {role}.</h2>}
      <p className='text-base max-w-[600px]'>{description && description}</p>

      <div className='mt-10 flex items-center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resumo
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
