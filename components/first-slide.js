import React from 'react'
import styled from 'styled-components'

import {Image} from 'mdx-deck'

const TitleContainer = styled.div`
  padding-top: 6.6rem;
  padding-left: 2.6rem;
  text-align: left;
`

const Title = styled.h1`
  font-size: 2.1rem;
  font-weight: bold;
`

const SubTitle = styled.h2`
  margin-top: 1.9rem;
  font-size: 2.1rem;
  font-weight: normal;
`

function FirstSlide () {
  return (
    <Image src="images/first-slide-bg.png">
      <TitleContainer>
        <Title>Дорога к async/await</Title>
        <SubTitle>Олег Кислицын</SubTitle>
      </TitleContainer>
    </Image>
  )
}

export { FirstSlide }
