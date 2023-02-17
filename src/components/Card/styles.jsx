import styled from 'styled-components'

export const HoverContainer = styled.div`
    display: none;
    justify-content: space-between;
    max-height: 94.5%;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background: #f5f5f5;
    margin: 8px;
    padding: 16px;
    border-radius: 6px;

    @media (max-width: 600px) {
            background: none;
        }

    > p {
        @media (max-width: 600px) {
            display: none;
        }
    }
`

export const Container = styled.div`
    border-radius: 12px;
    position: relative;
    overflow: scroll;

    &:hover ${HoverContainer} {
        display: flex;
    }

`

export const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 20px;
`

export const Button = styled.button`
    outline: none;
    border: none;
    background: white;
    width: 25px;
    height: 25px;
    border-radius: 20px;
    
    cursor: pointer;
`

export const DownloadImage = styled.img`
    width: 25px;
    height: 25px;
    object-fit: contain;
`