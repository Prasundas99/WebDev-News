import ArticleList from '../components/ArticleList'

export default function Home({ articles }) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://newsapi.org/v2/everything?q=dev&apiKey=e43de8f63f324efaa6de2af34e510b7f`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}