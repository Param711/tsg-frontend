import { contactsData, quickLinksData } from '../../data/SportsData';
import { FaFacebookF, FaInstagram, FaTwitter, FaGlobe, FaYoutube } from 'react-icons/fa';
export default function Contact() {
  return (
    <section id="contact">
      <div className="section-label">Get In Touch</div>
      <h2 className="section-title">CONTACT & LINKS</h2>
      <div className="contact-layout">
        <div className="contact-info">
          {contactsData.map((contact) => (
            <div className="contact-person" key={contact.id}>
              <div className="contact-role">{contact.role}</div>
              <div className="contact-name">{contact.name}</div>
              <div className="contact-email">{contact.email}</div>
            </div>
          ))}
          <div className="social-links">
            <a href="https://www.facebook.com/sports.iitkgp/" className="social-link facebook" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://gymkhana.iitkgp.ac.in" className="social-link website" target="_blank" rel="noreferrer"><FaGlobe /></a>
            <a href="https://www.instagram.com/tsg.iitkharagpur/?hl=en" className="social-link instagram" target="_blank"><FaInstagram /></a>
            <a href="https://www.youtube.com/channel/UCuTNELMlkNfJxAQ2vGJIe5Q" className="social-link youtube" target="_blank"><FaYoutube /></a>
          </div>
        </div>
        
        <div className="quick-links">
          {quickLinksData.map((link) => (
            <a href={link.url} className="quick-link" target={link.external ? "_blank" : "_self"} rel="noreferrer" key={link.id}>
              <span>{link.text}</span>
              <span className="quick-link-arrow">{link.external ? '↗' : '→'}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}