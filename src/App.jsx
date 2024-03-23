import { useState } from 'react'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import SignIn from "./pages/signIn/SignIn.jsx";
import Compositions from "./pages/compositions/Compositions.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="signin" >
          <Route index element={<SignIn />} />
        </Route>
        <Route path="compositions">
          <Route index element={<Compositions />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
