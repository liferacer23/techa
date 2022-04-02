import styled from "styled-components";

export const Nav = styled.div`
width: 100vw;
height: 10vh;
padding: 14px;
display: flex;
align-items: center;
justify-content:space-around;
background-color:${({bg})=>bg};
color:${({color})=>color};
transition:1s;
`;
export const NavLower = styled.div`
width: 100vw;
height: 20vh;
padding: 14px;
align-items: center;
display:flex;
justify-content:center;
transition:1s;
flex-direction:column;
margin-top:1rem;
`;

export const InputContainer = styled.div`
width:25%;
height:35%;
border-radius:1rem;
display:flex;
align-items:center;
justify-content:center;
border:1px solid grey;
padding:1px;
`;
export const Logo = styled.div`
width:25%;
`;
export const Input = styled.input`
width:100%;
outline:none;
border:none;
padding:10px;
height:100%;
font-size:1rem;
border-radius:1rem;
`;
export const Dark = styled.div`
width:8%;
height:100%;
border:none;
padding:10px;
height:100%;
color:${(color)=>color};
display:flex;
align-items:center;
justify-content:space-between;
cursor:pointer;
`;

export const NavLinks = styled.div`
width:35%;
display:flex;
align-items:center;
justify-content:space-evenly;
margin-right:16rem;
`
export const NavLinksL = styled.div`
width:45%;
display:flex;
align-items:center;
justify-content:space-evenly;
`
export const NavLeft = styled.div`
width:7%;
display:flex;
align-items:center;
justify-content:space-evenly;
`
export const IconContainer = styled.div`
width:2rem;
height:2rem;
border-radius:100%;
border:1px solid grey;
display:flex;
align-items:center;
justify-content:center;
position:relative;
`
export const Image = styled.image`
width:2rem;
height:2rem;
border-radius:100%;
`