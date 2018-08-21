import React from 'react'
import styled from 'styled-components'

export default () => (
  <Wrapper>
    <Icon src='/svg/loader.svg'/>
    <Text>Загрузка...</Text>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`

const Text = styled.span`
  font-size: 14px;
`
