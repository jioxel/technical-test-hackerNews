export const getTopStories = async (page: number, limit: number) => {
     const responce = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
     const json = await responce.json()
     // page start with 1
     const startIndex = (page - 1) * limit
     const endIndex = startIndex + limit
     const ids = json.slice(startIndex, endIndex)
     return ids
}
export const getItemInfo = async (id: number) => {
     try {
          const responce = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          return await responce.json()
     } catch {
return null
     }
}
