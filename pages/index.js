import Link from "next/link";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
//query
import getAllBlogs from "../fetchEnteries/allEnteries";

//function for displaying home page
export default function Home(props) {
  let blogs = props.banner;
  return (
    <>
      <div className={styles.container}>
        <Navigation navigation={props.navigation} />
        <h1>"When You watch Anime or read Manga you go into a different world!!” </h1>
        <div className={styles.cardContainer}>
          {blogs.map((banner, i) => {
            return (
              <div>
                <div key={i}>
                  <Link href={"/" + banner.uid}>
                    <a>
                      <div className={styles.card}>
                        <img
                          src={banner.image.url}
                          alt={props.banner.blogtitle}
                        />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <Footer footer={props.footer} />
      </div>
    </>
  );
}
export const getStaticProps = async () => {
  const navigation = await getAllBlogs("blog_navigation_swati");
  const banner = await getAllBlogs("blog_cms_swati");
  const footer = await getAllBlogs("blog_footer_swati");

  return {
    props: { navigation: {...navigation}, banner: [...banner[0]], footer: [...footer] },
  };
};
