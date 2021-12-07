import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color: #2C4C66;
`

function Header() {
    return (
        <StyledHeader>
            <h1 class="title is-1 has-text-white p-4">Coffee Calc</h1>
        </StyledHeader>
    )
}

export default Header;