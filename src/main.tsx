import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'flowbite/dist/flowbite.min.css';
import 'flowbite';
import App from './App.tsx'
import Providers from './providers.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
    <App />
    </Providers>
  </StrictMode>,
)
