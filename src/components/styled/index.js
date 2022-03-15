import styled from 'styled-components'


export const Conteiner =styled.div`
display: grid;
justify-content: center;
align-content: center;
width: 400px;
margin: 40px auto;
grid-template-columns: repeat(4, 100px);
grid-template-rows: minmax(120px, auto) repeat(5, 100px);
box-shadow: 2px 2px 10px #333;
border-radius: 10px;
`

export const Scren =styled.div`
grid-column: 1 / -1;
background-color: rgba(60, 64, 67, 0.75);
display: flex;
justify-content: space-around;
flex-direction: column;
padding: 10px;
word-wrap: break-word;
word-break: break-all;
text-align: right;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
`
export const Previos =styled.div`
color: rgba(255, 255, 255, 0.75);
font-size: 1.5rem;
`
export const Curent =styled.div`
color: #ffffff;
font-size: 1.5rem;
`
export const Button =styled.button`
cursor: pointer;
font-size: 2rem;
border: 1px outset #ffffff;
outline: none;
background-color: rgba(255, 255, 255, 0.75);
&:hover{background-color: rgba(255, 255, 255, 0.9);}
${({gridSpan})=>gridSpan &&   `grid-column: span ${gridSpan};`}
${({control})=>control &&   `background-color:skyblue;`}
${({operation})=>operation &&   `background-color:grey;`}
${({period})=>period &&   `background-color:grey; border-bottom-left-radius:10px`}
${({equals})=>equals &&   `background-color:grey; border-bottom-right-radius:10px`}

`