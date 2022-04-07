import { Link } from "react-router-dom"
import styled from "styled-components"

export const Nav =styled.div`

display:flex;
justify-content:space-between;
align-items:center;
// border:1px solid red;
padding:1rem ;
background-color:bisque


`
export const Header=styled.div`
cursor:pointer;

`
export const Menu=styled.div`


 `

export const MenuLink =styled(Link)`
text-decoration:none;
margin:0.5rem

`