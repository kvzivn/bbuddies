import { useState } from "react"
import { default as ReactSelect } from "react-select"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

const CustomOption = ({ innerProps, label, data, isFocused, isSelected }) => {
  const [part1, part2] = label.split(",")

  return (
    <div
      {...innerProps}
      style={{
        backgroundColor: isSelected ? data.color : isFocused ? "#eaeaea" : null,
        color: isFocused ? "black" : "black",
        cursor: "pointer",
        display: "block",
        fontSize: "inherit",
        padding: "6px 12px",
        overflow: "hidden",
      }}
    >
      <span>{part1 + " - "}</span>
      <span style={{ color: "gray" }}>{part2}</span>
    </div>
  )
}

const Select = ({ options, onAnswer }) => {
  const [value, setValue] = useState("")

  const handleChange = (option) => {
    setValue(option.label)
  }

  const selectStyles = {
    input: (provided) => ({
      ...provided,
      height: "40px",
    }),
    control: (provided, state) => ({
      ...provided,
      paddingLeft: "2.15rem",
      borderRadius: "6px",
      cursor: "text",
      width: "100%",
      borderColor: state.isFocused ? "#f59e0c" : provided.borderColor,
      boxShadow: state.isFocused ? "0 0 0 1px #f59e0c" : provided.boxShadow,
      ":hover": {
        borderColor: "#f59e0c",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#f59e0c" : provided.backgroundColor,
    }),
  }

  return (
    <div className="mt-10 max-w-sm mx-auto">
      <div className="relative">
        <ReactSelect
          options={options}
          onChange={handleChange}
          isSearchable
          className="text-left"
          styles={selectStyles}
          components={{ Option: CustomOption }}
          placeholder="Område eller address"
        />
        <MagnifyingGlassIcon className="absolute top-1/2 left-4 -translate-y-1/2 h-5 text-gray-700" />
      </div>
      <button
        onClick={() => onAnswer(value)}
        className="px-6 py-3 rounded-md font-medium text-lg bg-amber-500 text-white mt-12 hover:bg-opacity-90 transition-colors"
      >
        Gå vidare
      </button>
    </div>
  )
}

export default Select
