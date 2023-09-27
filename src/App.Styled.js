import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
  
    * {
      box-sizing: border-box;
      font-family: 'Space Grotesk', sans-serif;
    }
    body {
      margin: 0;
    }
    h1{
      font-size: 45px;
    }
    
    img{
      max-width: 100%;
    }
  li{
    list-style: none;

  }
  
    a{
      text-decoration: none;
      color: #000;
    }
`

export const theme = {
  pallete: {
    black: "#000",
    white: "#fff",
  },
};

export const FlexBox = styled.div`
  display: flex;
`;

export const FlexColum = styled(FlexBox)`  
    flex-direction: column;
`
export const Container= styled.div`
margin: 0 auto;
width: 80%;
`



export const Typography = styled.p`
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
`;

export const Image = styled.img`
  width: 100%;
  max-width: 100%;
`;

export const MainButton = styled('button')`
background-color: black;
color:white;
display: flex;
padding: 10px 26px;
justify-content: center;
align-items: center;
border-radius: 39px;
width: fit-content;
font-size:20px;
`
