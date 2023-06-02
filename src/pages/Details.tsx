import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const Details = () => {
     const { id } = useParams()
     console.log(id)
  return (
     <main>
          <Div> NW </Div>
     </main>

  )
}
export default Details
const Div = styled.div`
width:100px;
height:200px;
background-color:red;
`
