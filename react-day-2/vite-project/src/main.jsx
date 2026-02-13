import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './props-practice/App.jsx'
// import App from './ProjectCard/app.jsx'
// import App from './SkillBadge/app.jsx'
// import App from './css practice/app.jsx'
// import App from './css practice/Exercise1/app.jsx'
import App from './external_css/app.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
