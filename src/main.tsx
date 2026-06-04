import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx' // Импортируем твой главный компонент
import './index.css'       // Импортируем глобальные стили (если они есть)
import { BrowserRouter } from "react-router";
// Находим в index.html элемент с id="root" и создаем в нем "корень" React
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> 
      <App/>
    </BrowserRouter> 
  </React.StrictMode>,
)