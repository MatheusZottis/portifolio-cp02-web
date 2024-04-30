import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='mt-20 flex-col flex items-center' id='contact'>
      <h2 className='section__title'>Contato</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Envie-nos um email
        </span>
      </a>
    </section>
  )
}

export default Contact
