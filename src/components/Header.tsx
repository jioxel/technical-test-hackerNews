import styled from 'styled-components'
const Header = () => {
  return (
    <Nav>
      <Image
          src='/logo.png '
          alt='lOGO YnAVIGATION Hacker nsdasews'
      />
    </Nav>
  )
}
export default Header

const Nav = styled.nav`
     display: flex;
     align-items: flex-start;
     gap: 16px;
     padding: 8px;
     border-bottom: 1px solid white;
`
const Image = styled.img`
     height: 20px;
     width: 30px;
`
