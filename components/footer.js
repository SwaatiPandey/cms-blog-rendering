import Link from "next/link";
import styles from "../styles/footer.module.css";

export default function Footer(props) {
  let footer = props.footer[0][0];
  // console.log(footer);
  return (
   
    <div className={styles.container}>
      <p>{footer.copyright_text} </p>
      <div className={styles.socialIcons}>
        {/* {footer.social_media.map((link) => {
          return (
            <Link href={link.href}>
              <p>{link.title}</p>
            </Link>
          );
        })} */}
      </div>
    </div>
  );
}
