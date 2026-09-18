import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/Global.css';
import Body from './body.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Body />
  </StrictMode>,
)
