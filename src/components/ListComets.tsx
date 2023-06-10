import { useEffect, useState } from 'react'
import { getItemInfo } from '../services/hacker-news'
import { MyLoader } from './SkeletorNote'
import { Comment } from '../models/Stories'
const ListComets = ({ commets }: { commets: number[] | undefined }) => {
  return (
    <ul>
        {commets !== undefined
        ? commets.map(commet => <li key={commet}> <Commet id={commet} /> </li>)
        : 'Sin comentarios'}

    </ul>
  )
}
export default ListComets

const Commet = ({ id }: { id: number }) => {
  const [comment, setComment] = useState<Comment | null>()
  useEffect(() => {
    const commentResponce = async () => {
      const responce = await getItemInfo(id)
      setComment(responce)
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    commentResponce()
  }, [])
  return <p>{comment === null ? <MyLoader /> : comment?.text}</p>
}
