import { Hono } from 'hono'
import { Style, css } from 'hono/css'
import type { FC } from 'hono/jsx'

const app = new Hono()

const nomal = css`
  margin: 0;
`

const global = css`
@media (prefers-color-scheme: dark) {
  body {
    background-color: #242526;
    color: white;
  }
}
@media (prefers-color-scheme: light) {
  body {
    background-color: #f3ebe7;
    color: #646946;
  }
}
`

const Layout: FC = (props) => {
  return (
    <html>
      <head>
        <title>vlapwd</title>
        <Style>{global}</Style>
      </head>
      <body class={nomal}>{props.children}</body>
    </html>
  )
}

const wrapper = css`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
`
const Top: FC = () => {
  return (
    <Layout>
      <div class={wrapper}>
        <h1>vlapwd</h1>
      </div>
    </Layout>
  )
}

app.get('/', (c) => {
  return c.html(<Top />)
})

export default app