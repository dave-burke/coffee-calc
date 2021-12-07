import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color: #2C4C66;
`

const H1 = styled.h1`
  color: white;
`

function Header() {
    return (
        <StyledHeader>
            <H1 className="title is-1 p-4">Coffee Calc</H1>
        </StyledHeader>
    )
}

export default Header;