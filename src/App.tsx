import './App.css'
import styled from 'styled-components'
import Header from './components/Header'
import { Link, Outlet } from 'react-router-dom'
import { Suspense } from 'react'

function App () {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback='Loading...'>
          <Outlet />
        </Suspense>
      </main>
    </>
  )
}
const Button = styled.button`
  display: inline-block;
  color: #BF4F74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
  display: block;
`
export default App
