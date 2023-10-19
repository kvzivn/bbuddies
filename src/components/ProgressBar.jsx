const ProgressBar = ({ currentIndex, totalSteps }) => {
  if (currentIndex < 1) return
  return (
    <div className="flex gap-4 mt-8 justify-center">
      {Array.from({ length: totalSteps }, (_, index) => {
        const backgroundColor = index === currentIndex ? "#f59e0c" : "#ddd"
        return (
          <span
            className="block w-6 h-1 rounded"
            key={index}
            style={{ backgroundColor }}
          />
        )
      })}
    </div>
  )
}

export default ProgressBar
