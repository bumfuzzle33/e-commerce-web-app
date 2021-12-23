import './footer.css'
import {FaUserAlt,FaTwitter,FaFacebookF,FaLinkedinIn, FaJournalWhills} from 'react-icons/fa'

const Footer = ()=>{
    return(
        <footer>
            <section id='footer_parent' className="columns">
                <div className="column">
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, a necessitatibus nisi fuga sed consectetur incidunt quibusdam aliquam, magnam fugiat quos accusamus non, cupiditate sint asperiores omnis. Similique, illo voluptas rem sunt aliquam aperiam amet exercitationem placeat adipisci natus explicabo voluptate porro molestias corporis est maxime sit totam pariatur sapiente at earum suscipit aut nemo. Voluptates eos at officia!</p>
                </div>
                <div className="column">
                    <h1>Information</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia impedit officiis exercitationem quod deleniti in pariatur autem incidunt facere dolorum minima corporis non, eaque debitis? Quam tempore nam hic dolores.</p>
                </div>
                <div className="column">
                    <h1>Contact info</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, eveniet?</p>
                    <ul>
                        <li>Phone no. 998877889</li>
                        <li>Email Address : fakemail@gmail.com</li>
                    </ul>
                </div>
                <div id='socials' className="column">
                    <h1>Follow</h1>
                    <ul>
                        <li>
                            <a href="https://twitter.com">
                                Twitter
                                            
                            </a>
                        </li>
                        <li>
                            <a href="https://in.linkedin.com">
                                    Linkedin

                            </a>
                        </li>
                        <li>
                            <a href="https://facebook.com">
                                    Facebook

                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <div id="footer_footer">
            <h6>&#169; 2018 AI publishers</h6>
                <a href="">Disclaimer</a>
                <a href="">Terms &amp; Conditions</a>
                <a href="">Privacy Policy</a>
            </div>
        </footer>
    )
}

export default Footer;