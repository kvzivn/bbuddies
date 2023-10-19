import { useEffect, useState } from "react"
import { default as MuiSlider } from "@mui/material/Slider"
import Button from "./Button"

const Slider = ({ question, onAnswer }) => {
  const isArray = Array.isArray(question.defaultValue)
  const [value, setValue] = useState(question.defaultValue)

  useEffect(() => {
    setValue(question.defaultValue)
  }, [question.defaultValue])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const next = () => {
    if (isArray) {
      const singleValue = (value[0] + value[1]) / 2
      onAnswer(singleValue)
    } else {
      onAnswer(value)
    }
  }

  const displayValue = isArray
    ? `Mellan ${value[0].toLocaleString("sv-SE", {
        useGrouping: true,
      })} och ${value[1].toLocaleString("sv-SE", { useGrouping: true })} kr`
    : `${value.toLocaleString("sv-SE", { useGrouping: true })} kr`

  return (
    <div className="max-w-[24rem] mx-auto mt-12">
      <h2 className="text-lg font-medium mb-2">{displayValue}</h2>
      <MuiSlider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="off"
        min={question.range[0]}
        max={question.range[1]}
        step={isArray ? 100000 : 500}
      />
      <Button onClick={() => next()} className="mt-8">
        Gå vidare
      </Button>
    </div>
  )
}

export default Slider
