import assure_logo from "../assets/assure_logo_contact.svg";
import link_icon from "../assets/link_icon.svg";
import instagram_icon from "../assets/instagram_icon.svg";
import facebook_icon from "../assets/facebook_icon.svg";
import twitter_icon from "../assets/twitter_icon.svg";
import email_icon from "../assets/email_icon.svg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="col">
          {/* becareful about the repeat className "logo" */}
          <div className="logo">
            <img src={assure_logo} alt="assure logo"></img>
          </div>
          <p>
            1617, 1619 Town in Town Soi 7 Phlabphla Wangthonglang Bangkok 10310
          </p>
        </div>
        <div className="col">
          <div className="link">
            <h1 className="text-subtitle">Useful Link</h1>
            <a href="#">
              <img src={link_icon} alt="link icon"></img> About
            </a>
            <a href="#">
              <img src={link_icon} alt="link icon"></img> Product
            </a>
            <a href="#">
              <img src={link_icon} alt="link icon"></img> Service
            </a>
            <a href="#">
              <img src={link_icon} alt="link icon"></img> Partners
            </a>
            <a href="#">
              <img src={link_icon} alt="link icon"></img> Careers
            </a>
            <a href="#">
              <img src={link_icon} alt="link icon"></img> Contact
            </a>
          </div>
          <div className="link">
            {/* take a look in the real website */}
            <h1 className="text-subtitle">Follow Us</h1>
            <a href="#">
              <img src={instagram_icon} alt="instagram icon"></img> Assure
              Technology
            </a>
            <a href="#">
              <img src={facebook_icon} alt="facebook icon"></img> Assure
              Technology
            </a>
            <a href="#">
              <img src={twitter_icon} alt="twitter icon"></img> Assure
              Technology
            </a>
            <a href="#">
              <img src={email_icon} alt="email icon"></img>{" "}
              Support@assuretechnology.io
            </a>
          </div>
        </div>
        <div className="col">
          {/* dunno if it is even needed to be inside div */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.1915038917828!2d100.60476035149001!3d13.767322100592807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f5585726681%3A0x30a3101b264813b!2sAssure%20Technology%20Co.%2CLtd.!5e0!3m2!1sen!2sth!4v1647596808059!5m2!1sen!2sth"
            width="100%"
            height="300"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
