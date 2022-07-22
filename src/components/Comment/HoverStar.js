import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function App() {
  const [number, setNumber] = useState(0);
  const [hoverStar, setHoverStar] = useState(undefined);

  const handleText = () => {
    switch (number || hoverStar) {
      case 0:
        return "Evaluate";
      case 1:
        return "Dissatifation";
      case 2:
        return "Unsatisfied";
      case 3:
        return "Normal";
      case 4:
        return "Satisfied";
      case 5:
        return "Very Satisfied";
      default:
        return "Evaluate";
    }
  };

  const handlePlaceHolder = () => {
    switch (number || hoverStar) {
      case 0:
        return "Comment here...";
      case 1:
      case 2:
      case 3:
      case 4:
        return "What is your problem?";
      case 5:
        return "Why do you like the product?";
      default:
        return "Comment here...";
    }
  };
    return (
        <div className="wrapper__star">
            {Array(5)
                .fill()
                .map((_, index) =>
                number >= index + 1 || hoverStar >= index + 1 ? (
                    <AiFillStar
                    onMouseOver={() => !number && setHoverStar(index + 1)}
                    onMouseLeave={() => setHoverStar(undefined)}
                    style={{ color: "#FF5050" }}
                    onClick={() => setNumber(index + 1)}
                    className="star"
                    />
                    ) : (
                    <AiOutlineStar
                    onMouseOver={() => !number && setHoverStar(index + 1)}
                    onMouseLeave={() => setHoverStar(undefined)}
                    style={{ color: "#FF5050" }}
                    onClick={() => setNumber(index + 1)}
                    className="star"
                    />
                )
            )}
        </div>
    )
}
