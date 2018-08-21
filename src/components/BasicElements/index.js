import styled from 'styled-components'

export const AppWrapper = styled.div`
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  padding: 20px;
  max-width: 420px;
`

export const ItemsWrapper = styled.div`
  border-top: 1px solid #eee;
  margin-top: 10px;
  padding-top: 10px;
`

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(255,255,255,.6);
  z-index: 999;
`
