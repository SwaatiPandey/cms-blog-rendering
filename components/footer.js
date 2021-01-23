import Link from "next/link";
import styles from "../styles/footer.module.css";
import {FaFacebook,FaTwitter,FaLinkedin} from "react-icons/fa";

export default function Footer(props) {
  let footer = props.footer[0][0];
  // console.log(footer);
  return (
   
    <div className={styles.container}>
      {/* <p>{footer.copyright_text} </p>
      <div className={styles.socialIcons}>
       {footer.social_media.map((link) => {
          return (
            <Link href={link.href}>
              <p>{link.title}</p>
            </Link>
          );
        })}
      </div> */}
      <div className = {styles.footer}>
         <img src="http://img.oasgames.com/upload/1484635542.png" alt="load" srcset=""/>
         <div className={styles.linksSec}> <h2>Link</h2> <li>Home</li> </div>
         <div className={styles.icons}>
         <li>
						<a href=" ">
							<FaFacebook size="2em" color="white"/>
						</a>
					</li>
					<li>
						<a href=" ">
						<FaTwitter size="2em" color="white"/>
						</a>
					</li>
					<li>
						<a href=" ">
						<FaLinkedin size="2em" color="white"/>
						</a>
					</li>

            </div>
      </div>  
    </div>
  );
}
