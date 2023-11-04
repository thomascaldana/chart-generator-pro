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
import MyCharts from "./containers/MyCharts"
import Footer from "./components/Footer"


function App () {

  const stytchToken = import.meta.env.VITE_STYTCH_TOKEN;
  const stytchClient = new StytchHeadlessClient(stytchToken);

  // adding new comment

  return (
    <div className="App">
      <BrowserRouter >
        <Header />
        <StytchProvider stytch={stytchClient} >
          <Routes>
            <Route path="/" element={<ChartGenerator />} />
            <Route path="/ChartExamples" element={<ChartExamples />} />
            <Route path="/mycharts" element={<MyCharts />} />
            <Route path="/auth" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/resetpassword/*" element={<ResetPassword />} />
          </Routes>
        </StytchProvider>
        <Footer />
      </BrowserRouter>
      <GlobalStyles />
    </div>
  )
}

export default App


