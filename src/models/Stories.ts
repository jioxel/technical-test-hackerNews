export interface Article {
  by: string
  descendants: number
  id: number
  kids?: number[]
  score: number
  time: number
  title: string
  type: string
  url?: string | null
}

export interface Comment {
  by: string
  id: number
  kids: number[] | null
  parent: number
  text: string
  time: number
  type: string
}
