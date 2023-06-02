import { useEffect, useState } from 'react'
import { Article } from '../models/Stories'
import { getItemInfo } from '../services/hacker-news'

const Story = ({ id }: { id: number }) => {
     const [article, setArticle] = useState<Article>()
  useEffect(() => {
     const articleResponce = async (id: number) => {
          const responce: Article = await getItemInfo(id)
          setArticle(responce)
     }
     // eslint-disable-next-line @typescript-eslint/no-floating-promises
     articleResponce(id)
   }, [])
  return (
    <div>{article?.title}</div>
  )
}
export default Story
