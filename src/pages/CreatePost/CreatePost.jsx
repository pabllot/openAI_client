import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { preview } from '../../assets'
import { getRandomPrompt } from '../../utils'
import { FormField, Loader } from '../../components'
import { ButtonWrapper, Form, FormContainer, H1, Image, ImagesContainer, LoaderContainer, Paragraph, Preview, Section, ShareButton, ShareContainer, ShareParagraph, SubmitButton, Wrapper } from './styles'

const CreatePost = () => {
  const navigate = useNavigate();
  const [generatingImg, setGeneratingImg] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: ''
  });

  const generateImage = () => {

  }

  const handleSubmit = () => {

  }

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt)
    setForm({ ...form, prompt: randomPrompt })
  }

  return (
    <Section>
      <Wrapper>
        <H1>Create</H1>
        <Paragraph>Create images generated by AI and share them with the community</Paragraph>
      </Wrapper>

      <Form onSubmit={handleSubmit}>
        <FormContainer>
          <FormField
            labelName="Your name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="Your Prompt"
            type="text"
            name="prompt"
            placeholder="A man wanders through the rainy streets of Tokyo, with bright neon signs, 50mm"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
          <ImagesContainer>
            {form.photo ? (
              <Image 
                src={form.photo}
                alt={form.prompt}
               />
            ) : (
              <Preview 
                src={preview}
                alt='preview'
              />
            )}

            {generatingImg && (
              <LoaderContainer>
                <Loader />
              </LoaderContainer>
            )}
          </ImagesContainer>
        </FormContainer>

        <ButtonWrapper>
              <SubmitButton
                type='button'
                onClick={generateImage}
              >
                {generatingImg ? 'Gererating...' : 'Generate'}
              </SubmitButton>
        </ButtonWrapper>

        <ShareContainer>
          <ShareParagraph>Once you have created the image you want, you can share it with everybody</ShareParagraph>
          <ShareButton
            type='submit'
          >
            {loading ? 'Sharing...' : 'Share with everybody'}
          </ShareButton>
        </ShareContainer>

      </Form>
    </Section>
  )
}

export default CreatePost