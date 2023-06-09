import { useEffect, useState } from 'react'

import { getTopStories } from '../services/hacker-news'
import Story from '../components/Story'

const TopStories = () => {
  const [stories, setStories] = useState< number[] >()
    useEffect(() => {
    const storiesResponce = async () => {
      const data: number[] = await getTopStories(2, 10)
      setStories(data)
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    storiesResponce()
  }, [])
  return (
    <ol>
      {stories?.map(storie => {
      return (
      <li key={storie}>
        <Story id={storie} />
      </li>
      )
      }
      )}
    </ol>
  )
}
export default TopStories
