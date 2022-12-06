import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles/global'
import { Router } from './Router'

export const App = () => {
  return (
    <>
   	<GlobalStyles />
   	<BrowserRouter>
   		<Router />
   	</BrowserRouter>
   </>
  )
}