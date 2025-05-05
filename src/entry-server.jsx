import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'

/**
 * @param {string} _url
 */
export function render(_url) {

  const language = _url.startsWith('/en') ? 'en' : 'ro';

  const html = renderToString(
    <StrictMode>
      <App language={language}/>
    </StrictMode>,
  )
  return { html }
}