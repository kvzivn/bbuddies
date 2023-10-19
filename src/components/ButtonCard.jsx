import houseImg from "../assets/house.png"
import apartmentImg from "../assets/apartment.png"

const ButtonCard = ({ option, onClick }) => {
  return (
    <button
      className="flex flex-col items-center justify-center w-36 h-32 bg-white bg-opacity-60 rounded-lg border-2 border-gray-200 hover:border-gray-600 transition-colors"
      onClick={onClick}
    >
      <div className="flex flex-col items-center gap-2">
        <img
          src={option === "Hus" ? houseImg : apartmentImg}
          alt="house"
          className="w-14"
        />
        <p className="text-base">{option}</p>
      </div>
    </button>
  )
}

export default ButtonCard
