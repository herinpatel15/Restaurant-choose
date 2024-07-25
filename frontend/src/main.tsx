import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { RestuarantsContextProvider } from './provider/restuarantProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <RestuarantsContextProvider>
      <App />
    </RestuarantsContextProvider>
  </BrowserRouter>,
)
