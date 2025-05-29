import { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import GameCard from "./../components/GameCard";

const Games = () => {
  const [games, setGames] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games"
    );
    console.log("games data:", data);
    setGames(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Row>
        {games.map((game) => (
          <Col sm={1} md={4} lg={3} key={game.id}>
            <GameCard game={game} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Games;
