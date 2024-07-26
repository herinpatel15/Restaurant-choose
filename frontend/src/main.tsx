import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { RestaurantProvider } from './provider/restuarantProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <RestaurantProvider>
      <App />
    </RestaurantProvider>
  </BrowserRouter>,
)
