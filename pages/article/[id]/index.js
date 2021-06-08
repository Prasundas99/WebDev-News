import Link from "next/link";
import Meta from "../../../components/Meta";
import style from "../../../styles/Header.module.css";
const article = ({ article }) => {


  return (
    <>
      <div className={style.container}>
        <Meta title={article.title} description={article.description} />
        <img src={article.urlToImage} />
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <br />
        <Link href="/">Go Back</Link>
      </div>
    </>
  );
};



 export const getStaticProps = async (context) => {
   const res = await fetch(
     `https://newsapi.org/v2/everything?q=bitcoin&apiKey=e43de8f63f324efaa6de2af34e510b7f/${context.params.id}`
   )

   const article = await res.json()

   return {
     props: {
       article,
     },
   }
 }

 export const getStaticPaths = async () => {
   const res = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=e43de8f63f324efaa6de2af34e510b7f`)

   const articles = await res.json()

   const ids = articles.articles.source.map((id) => article.articles.source.id)
   const paths = ids.map((id) => ({ params: { id: id.toString() } }))

   return {
     paths,
     fallback: false,
   }
 }

export default article;





