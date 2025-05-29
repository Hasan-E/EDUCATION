import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function GameCard({ game }) {
  const { thumbnail, id, title, short_description, developer } = game;

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/games/${id}`, { state: { game } });
  };

  return (
    <Card className="bg-dark text-white m-2 p-3" onClick={handleSubmit}>
      <Card.Img variant="top" src={thumbnail} />

      <Card.ImgOverlay className="overlay">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="lh-1">{short_description}</Card.Text>
        </Card.Body>
      </Card.ImgOverlay>
    </Card>
  );
}

export default GameCard;
