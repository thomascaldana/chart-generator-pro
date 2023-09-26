import GlobalStyles from "./styles/GlobalStyles"
import ChartGenerator from "./containers/ChartGenerator"
import { Header } from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChartExamples from "./containers/ChartExamples"
// import Footer from "./components/Footer"
import Login from "./containers/Login/Login"
import SignUp from './containers/SignUp/SignUp'
import ResetPassword from "./containers/ResetPassword/ResetPassword"
import { StytchHeadlessClient } from '@stytch/vanilla-js/headless'
import { StytchProvider } from "@stytch/react"


function App () {

  const stytchClient = new StytchHeadlessClient("public-token-test-3f407f39-b779-440c-a64c-18d260212048")

  // when publishing create a token in GithuB and a Env key to improve secure about the key


  return (
    <div className="App">
      <BrowserRouter >
        <Header />
        <StytchProvider stytch={stytchClient} >
          <Routes>
            <Route path="/" element={<ChartGenerator />} />
            <Route path="/ChartExamples" element={<ChartExamples />} />
            <Route path="/auth" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
          </Routes>
          <button>Logout</button>
        </StytchProvider>
      </BrowserRouter>
      <GlobalStyles />
    </div>
  )
}

export default App


