import styled from "styled-components";


export const Wrapper = styled.div`
height:90vh;
display:flex;
flex-wrap:wrap;
padding:1rem;
background-color:${({bg})=>bg};
color:${({color})=>color};
gap:2rem;
align-items:center;
justify-content:center;
overflow:scroll;
overflow-X:hidden;
transition:1s;
`