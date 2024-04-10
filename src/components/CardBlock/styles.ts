import styled from "styled-components/native";

export const ContainerBook = styled.View`
    width: 150px; 
    height: 370px; 
    align-items: center; 
    border-radius: 8px; 
    
    background-color: ${({ theme }) => theme.COLORS.RED}; 
`; 

export const ImageBook = styled.Image`
    width: 95%; 
    height: 200px; 
`; 


export const TitleBook = styled.Text
`
color: black`;


export const PriceBook = styled.Text
``;

export const DescriptionBook = styled.Text
``;



