import React from 'react'

interface Props {
  view: JSX.Element
}

const Main = (props: Props) => {
  return <main>{props.view}</main>
}

export default Main
