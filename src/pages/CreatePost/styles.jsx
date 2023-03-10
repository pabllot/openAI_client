import styled from "styled-components";

export const Section = styled.section`
    max-width: 80rem;
    margin: 0 auto;
    margin-top: 5rem;
`

export const Wrapper = styled.div``

export const H1 = styled.h1`
    font-weight: 700;
    color: #ffffff;
    font-size: 32px;
`

export const Paragraph = styled.p`
    margin-top: 8.5px;
    color: #ffffff;
    font-size: 16px;
    max-width: 700px;

`

export const Form = styled.form`
    margin-top: 1rem;
    max-width: 30rem;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const ImagesContainer = styled.div`
    position: relative;
    background: #252525; //50
    border: 1px solid black; //300
    color: #f9f4f4; //900
    border-radius: 6px;
    width: 16rem;
    height: 16rem;
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:focus {
        border: 1px solid blue;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

export const Preview = styled.img`
    width: 75%;
    opacity: 0.4;
    object-fit: contain;
    background: #252525;
`

export const LoaderContainer = styled.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.5);
    border-radius: 6px;
`
export const ButtonWrapper = styled.div`
    display: flex;
    margin-top: 20px;
    gap: 20px;
`

export const SubmitButton = styled.button`
    color: white;
    background: #2d602d;
    font-weight: 500;
    border-radius: 6px;
    font-size: 16px;
    width: 100%;
    padding: 10px 20px;
    text-align: center;
    border: none;
`

export const ShareParagraph = styled.p`
margin-top: 8px;
color: #ffffff;
font-size: 12px;
`

export const ShareContainer = styled.div`
    margin-top: 30px;
`

export const ShareButton = styled.button`
    margin-top: 13px;
    color: white;
    background: #6469ff;
    border-radius: 6px;
    font-weight: 500;
    font-size: 16px;
    width: 100%;
    padding: 10px 20px;
    text-align: center;
    border: none;
`