import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Article } from '../models/Stories'
import { getItemInfo } from '../services/hacker-news'
import { MyLoader } from '../components/SkeletorNote'
import ListComets from '../components/ListComets'

const Details = () => {
     const { id } = useParams<string>()
     const [article, setArticle] = useState<Article | null>(null)
     useEffect(() => {
        const articleResponce = async (id: number) => {
             const responce: Article = await getItemInfo(id)
             setArticle(responce)
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        if (id !== undefined) {
         const idNumber = parseInt(id) // Convertir a número entero
         if (!isNaN(idNumber)) {
           // La conversión fue exitosa y el valor no es NaN
           // eslint-disable-next-line @typescript-eslint/no-floating-promises
           articleResponce(idNumber)
         }
       }
      }, [])
  return (
     <main>
     <>
     {article == null
     ? <MyLoader />
     : <ArticleContent>
          <Header>
               <A1 href={`/details/${article.id}`}>{article?.title}</A1>
          </Header>
          <footer>
               <Link style={{ textDecoration: 'none', color: '#e3d2d2', fontSize: '11px', fontFamily: 'Arial' }} to={`/details/${article.id}`}>by {article.by}  |</Link>
               <Link style={{ textDecoration: 'none', color: '#cdcdcd', fontSize: '11px', fontFamily: 'Arial' }} to={`/details/${article.id}`}>  {article.by}  |</Link>
               <Link style={{ textDecoration: 'none', color: '#cdcdcd', fontSize: '11px', fontFamily: 'Arial' }} to={`/details/${article.id}`}>  {article.kids?.length ?? 0}</Link>
               <ListComets comets={article.kids} />
          </footer>
          {}
       </ArticleContent>}
     </>
     </main>

  )
}
export default Details
const Div = styled.div`
width:100px;
height:200px;
background-color:red;
`

const ArticleContent = styled.article`
margin: 8px 0;
`
const Header = styled.header`
display: flex;
flex-direction: center;
align-items: center;
gap: 20px;

`
const H2 = styled.h2`
font-size: 16px;
font-weight:100;
`
const A1 = styled.a`
font-family: Arial, Helvetica, sans-serif;
font-size:14px;
color: #cdcdcd;
text-decoration: none;
margin: 5px, 0;
`
const A2 = styled.a`
font-family: Arial, Helvetica, sans-serif;
font-size:11px;
color: #cdcdcd;
text-decoration: none;
`
const P = styled.p`
margin:0;
`
