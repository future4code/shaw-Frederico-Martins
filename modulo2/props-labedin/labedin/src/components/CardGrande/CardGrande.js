import React from 'react';
import styled from 'styled-components';
const Item = styled.div `
display: flex;
align-items: center;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
height: 200px;
> img {
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
}
h4 {
    margin-bottom: 15px;
}
> div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
}

`
function CardGrande(props) {
    return (
        <Item>    
            <img src={ props.imagem } alt=""/>
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
           </Item>
    )
}

export default CardGrande;