import { StrictMode } from 'react'
// import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import 'react-card-adapter/src/styles/main.css';
// import '../../packages/react-card-adapter/src/styles/all-styles.css';
// import '../../packages/react-card-adapter/src/styles/all-styles.css';
import "../../../packages/react-card-adapter/src/styles/all-styles.css";


// ReactDOM.createRoot(...).render(...);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
