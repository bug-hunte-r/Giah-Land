import {useRoutes} from 'react-router-dom'
import Header from './Components/Header/Header';
import router from './router';
import ScrollToTop from './Components/scrollToTop/scrollToTop';

function App() {

  const routes = useRoutes(router)


  return (
    <div>
      <ScrollToTop />
      <Header />

      {routes}
    </div>

  )
}

export default App