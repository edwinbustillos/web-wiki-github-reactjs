import styled from 'styled-components';

export const ItemContainer = styled.div`
    width: 80%;
    h3 {
        color: #FFF;
        font-size: 32px;
        padding: 10px 0;
        font-weight: bold;
    }
    p {
        color: #FAFAFA;
        font-size: 16px;
        padding: 5px;
    }
    p.name {
        color: #888;
        font-size: 16px;
        padding: 5px;
        font-weight: bold;
    }
    a:link, a:visited, a:active, a:focus{
        color: #FF00AA;
        font-size: 16px;
        cursor: pointer;
        text-decoration: none;
        background-color: #FCFCFC;
        padding: 10px 20px;
        border: none;
        font-weight: bold;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        &:hover {
            background-color: #CCC;
            color: #444;
        }
    }
    button.remover {
        background-color: #FF00AA;
        color: #FAFAFA;
        font-size: 16px;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
        margin: 10px 0;
        font-weight: bold;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        &:hover {
            background-color: #CCC;
            color: #444;
        
        }
    }
    hr {
        color: #FAFAFA;
        margin: 20px 0;
    }
`;