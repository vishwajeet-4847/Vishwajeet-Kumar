import React from "react";
import "./footer.css"
import Navbar from "../Header/navbar";
import SocialIcon from "./scoialIcons"
import SubscribeForm from "./subscribeForm";
import FooterNameLogo from "./footerNameLogo";


const socialIcon =[
  {
    icon: "fab fa-facebook-f",
    url: "https://www.facebook.com/"
  },
  {
    icon: "fab fa-instagram",
    url: "https://www.instagram.com/"
  },
  
  {
    icon: "fab fa-linkedin-in",
    url: "https://www.linkedin.com/"
  },
  {
    icon: "fab fa-github",
    url: "https://www.github.com/"
  },
 
  {
    icon: "fab fa-youtube",
    url: "https://www.youtube.com/"
  },
  
];
const Footer = ()=>{
  const currentYear = new Date().getFullYear();

    return(
        
       
            <footer className="footer">
              <div className="container">
                <div className="footer-content">
                 <FooterNameLogo />
                  {/* subscribe form starts */}
                  <SubscribeForm />

                  {/* subscribe form ends here */}
                  {/* navigation links added */}
                 <Navbar />
                 {/* navigation link ended */}
                 
                {/* social icons start here */}
           <div className="social-icons">
            <ul>
              {socialIcon.map((socialIcon,index)=><SocialIcon url={socialIcon.url} icon={socialIcon.icon} key={index}/>)}
             
            </ul>
          </div>
           {/* social icons end here */}
           {/* copyright text starts here */}
                  <div className="copyright">
                    <p>© {currentYear} Vishwajeet. All rights reserved.</p>
                  </div>
                  {/* copyright text ends here */}
                </div>
              </div>
            </footer>
          );
        };
        
       
    


export default Footer;