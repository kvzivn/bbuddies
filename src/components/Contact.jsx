import { useState } from "react"

const Contact = ({ onAnswer }) => {
  const [value, setValue] = useState("")

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className="mt-10 max-w-sm mx-auto">
      <input
        type="email"
        placeholder="Din e-post"
        className="w-full px-4 py-3 rounded-md border-2 border-gray-200 focus:border-gray-600 focus:ring-0 transition-colors"
        onChange={handleChange}
      />
      <button
        onClick={() => onAnswer(value)}
        className="mt-10 px-6 py-3 rounded-md font-medium text-lg bg-amber-500 text-white hover:bg-opacity-90 transition-colors"
      >
        Se resultatet
      </button>
    </div>
  )
}

export default Contact
