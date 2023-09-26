import GlobalStyles from "./styles/GlobalStyles"
import ChartGenerator from "./containers/ChartGenerator"
import { Header } from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChartExamples from "./containers/ChartExamples"
// import Footer from "./components/Footer"
import Login from "./containers/Login/Login"
import SignUp from './containers/SignUp/SignUp'
import ResetPassword from "./containers/ResetPassword/ResetPassword"


function App () {


  return (
    <div className="App">
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path="/" element={<ChartGenerator />} />
          <Route path="/ChartExamples" element={<ChartExamples />} />
          <Route path="/auth" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
        </Routes>
        <button>Logout</button>
      </BrowserRouter>
      <GlobalStyles />
    </div>
  )
}

export default App


