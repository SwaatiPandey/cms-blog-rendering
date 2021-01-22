import Link from "next/link";
import styles from "../styles/navigation.module.css";
function Navigation(props) {
   let navigation = props.navigation[0][0];
  return (
    <div>
      <div className={styles.container}>
        <Link href="/">
          <div className={styles.logo}>
            <img
              src={navigation.logo.url}
              alt="logo"
              width={70}
              height={70}
            />
          </div>
        </Link>
        <div className={styles.links}>
          {navigation.navigation_links.map((link) => {
            return (
              <div>
                <Link href={link.link.href}>
                  <p className={styles.anch}>{link.link.title}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
