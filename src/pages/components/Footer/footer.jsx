import React from "react";
import "./footer.css"
import Navbar from "../Header/navbar";
import SocialIcon from "./scoialIcons"
import SubscribeForm from "./subscribeForm";
import FooterNameLogo from "./footerNameLogo";
import ChatWithMe from "./chatWithMe";


const socialIcon =[
  {
    icon: "fab fa-facebook-f",
    url: "https://www.facebook.com/profile.php?id=100050871531149"
  },
  {
    icon: "fab fa-instagram",
    url: "https://www.instagram.com/vishu_4_u_2/"
  },
  
  {
    icon: "fab fa-linkedin-in",
    url: "www.linkedin.com/in/vishwajeet-kumar-01566a283"
  },
  {
    icon: "fab fa-github",
    url: "https://github.com/vishwajeet-4847"
  },
 
  {
    icon: "fab fa-youtube",
    url: "https://youtube.com/@vishwajeet_kumar?si=FAR7nHyKHyZNELPa"
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

           {/* whatsapp icon to chat */}
           <ChatWithMe/>
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