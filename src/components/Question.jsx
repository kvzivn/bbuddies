import Slider from "./Slider.jsx"
import ButtonCard from "./ButtonCard"
import Contact from "./Contact.jsx"
import Select from "./Select.jsx"

const Question = ({ question, onAnswer }) => (
  <div className="w-full text-center px-8">
    <h2 className="text-3xl font-medium">{question.text}</h2>
    <h4 className="mt-4 text-xl">{question.description}</h4>
    {question.buttons ? (
      <div className="flex gap-8 mt-12 justify-center lg:gap-12">
        {question.buttons.map((option) => (
          <ButtonCard
            key={option}
            option={option}
            onClick={() => onAnswer(option)}
          />
        ))}
      </div>
    ) : question.range ? (
      <Slider question={question} onAnswer={onAnswer} />
    ) : question.options ? (
      <Select options={question.options} onAnswer={onAnswer} />
    ) : (
      <Contact onAnswer={onAnswer} />
    )}
  </div>
)

export default Question
