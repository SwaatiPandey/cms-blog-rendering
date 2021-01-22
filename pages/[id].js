import Link from "next/link";
import styles from "../styles/anchorBlog.module.css";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
//query
import getAllBlogs from "../fetchEnteries/allEnteries";
import getBlogById from "../fetchEnteries/singleEnteries";

//function to display home page
export default function Home(props) {
  let blog = props.banner;
  // console.log(blog);
  return (
    <>
      <div className={styles.container}>
        <Navigation navigation={props.navigation} />
        <h1>
          "When You watch Anime or read Manga you go into a different world!!”
        </h1>
        <div className={styles.cardContainer}>
          <div>
            <div className={styles.card}>
              <h1>{blog.title}</h1>
              <img src={blog.image.url} alt={blog.blogtitle} />
              <p>{blog.content}</p>
              <h2>Links:</h2>
              <div>
              {blog.related_links.map((links) => {
                // console.log(links);
                return (
                  <div className={styles["relLinks"]}>
                    <Link href={`${links.related_blog[0].uid}`}>
                     <p> {links.title}</p>
                    </Link>
                  </div>
                );
              })}
            </div>
         
            </div>
    
          </div>
        </div>
        <Footer footer={props.footer} />
      </div>
    </>
  );
}
export const getStaticProps = async (context) => {
  const navigation = await getAllBlogs("blog_navigation_swati");
  const banner = await getBlogById(`${context.params.id}`);
  const footer = await getAllBlogs("blog_footer_swati");
  return {
    props: {
      navigation: { ...navigation },
      banner: { ...banner },
      footer: { ...footer },
    },
  };
};
export const getStaticPaths = async () => {
  let data = await getAllBlogs("blog_cms_swati");
  let paths = data[0].map((blog) => {
    return {
      params: {
        id: blog.uid,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
