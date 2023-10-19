import { useState } from "react"
import { ThemeProvider } from "@mui/material/styles"
import theme from "./styles/theme"
import logo from "./assets/logo.png"
import Dashboard from "./components/Dashboard.jsx"
import Question from "./components/Question.jsx"
import { questions } from "./lib/constants"

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState([])

  const handleNext = (val) => {
    setAnswers((a) => [...a, val])
    setCurrentIndex((i) => i + 1)
  }

  return (
    <ThemeProvider theme={theme}>
      <a href="https://www.bolanebuddies.se/">
        <img
          src={logo}
          alt="logo"
          className="absolute top-8 left-1/2 w-48 -translate-x-1/2 lg:translate-x-0 lg:left-8"
        />
      </a>
      {currentIndex < questions.length ? (
        <Question question={questions[currentIndex]} onAnswer={handleNext} />
      ) : (
        <Dashboard answers={answers} />
      )}
    </ThemeProvider>
  )
}

export default App
