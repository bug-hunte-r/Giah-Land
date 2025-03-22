import {useRoutes} from 'react-router-dom'
import Header from './Components/Header/Header';
import router from './router';

function App() {

  const routes = useRoutes(router)


  return (
    <div>
      <Header />

      {routes}
    </div>

  )
}

export default App