import { createRoot } from 'react-dom/client'
import './styles/main.scss'
import init from './init.jsx'

const root = createRoot(document.getElementById('root'))

init().then((vdom) => {
  root.render(vdom)
})

