import { useState } from 'react'
import './App.css'
import { LayoutGeneral } from './assets/componentesGenerales/Layout/LayoutGeneral'

import { Route, Routes } from 'react-router-dom'
import { routesConfig } from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <LayoutGeneral>
      <Routes>
        {routesConfig.map((ruta, index) => {
          return <Route key={index} path={ruta.path} element={ruta.element} />;
        })}
      </Routes>

    </LayoutGeneral>
  )
}

export default App
