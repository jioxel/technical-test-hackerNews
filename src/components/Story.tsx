import { useEffect, useState } from 'react'
import { Article } from '../models/Stories'
import { getItemInfo } from '../services/hacker-news'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MyLoader } from './SkeletorNote'

const Story = ({ id }: { id: number }) => {
     const [article, setArticle] = useState<Article | null>(null)
  useEffect(() => {
     const articleResponce = async (id: number) => {
          const responce: Article = await getItemInfo(id)
          setArticle(responce)
     }
     // eslint-disable-next-line @typescript-eslint/no-floating-promises
     articleResponce(id)
   }, [])

     const domain = article?.url == null ? '' : new URL(article.url).hostname.replace('www.', '')

     return (
     <>
     {article == null
     ? <MyLoader />
     : <ArticleContent>
          <Header>
               <A1 href={`/details/${article.id}`}>{article?.title}</A1>
               <A2 href={domain}> {domain} </A2>
          </Header>
          <footer>
               <Link style={{ textDecoration: 'none', color: '#e3d2d2', fontSize: '11px', fontFamily: 'Arial' }} to={`/details/${article.id}`}>by {article.by}  |</Link>
               <Link style={{ textDecoration: 'none', color: '#cdcdcd', fontSize: '11px', fontFamily: 'Arial' }} to={`/details/${article.id}`}>  {article.by}  |</Link>
               <Link style={{ textDecoration: 'none', color: '#cdcdcd', fontSize: '11px', fontFamily: 'Arial' }} to={`/details/${article.id}`}>  {article.kids?.length ?? 0}</Link>
          </footer>
          {}
       </ArticleContent>}
     </>
)
}
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

export default Story
