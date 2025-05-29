// import React, { useState ,useEffect} from 'react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'
// import { Container,Card, ListGroup, Button, Badge } from 'react-bootstrap';

// const GameDetail = () => {

//   const {id}=useParams()

//   const [Info,setInfo]=useState(null)

//   const getData = async () => {
//       const { data } = await axios.get(
//         `https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/game?id=${id}`
//       );
//       console.log("games data:", data);
//       setInfo(data);
//     };
  
//     useEffect(() => {
//       getData();
//     }, []);


//     if (!Info){
//       return <p>Loading..</p>
//     }

//      const {
//     title,
//     thumbnail,
//     status,
//     short_description,
//     genre,
//     platform,
//     publisher,
//     developer,
//     release_date
//   } =Info

//   return (
//        <Container className="d-flex justify-content-center py-5">
//       <Card>
//         <Card.Img variant="top" src={thumbnail} alt={title} />
//         <Card.Body>
//           <Card.Title>
//             {title} <Badge bg="success">{status}</Badge>
//           </Card.Title>
//           <Card.Text>{short_description}</Card.Text>
//         </Card.Body>
//         <ListGroup className="list-group-flush">
//           <ListGroup.Item><strong>Tür:</strong> {genre}</ListGroup.Item>
//           <ListGroup.Item><strong>Platform:</strong> {platform}</ListGroup.Item>
//           <ListGroup.Item><strong>Yayıncı:</strong> {publisher}</ListGroup.Item>
//           <ListGroup.Item><strong>Geliştirici:</strong> {developer}</ListGroup.Item>
//           <ListGroup.Item><strong>Yayın Tarihi:</strong> {release_date}</ListGroup.Item>
//         </ListGroup>
      
//       </Card>
//     </Container>
//   )
// }

// export default GameDetail

//! Use Location kullanımı

import React, { useState ,useEffect} from 'react'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
import { Container,Card, ListGroup, Button, Badge } from 'react-bootstrap';

const GameDetail = () => {

  const {id}=useParams()
  const {state:{game}}=useLocation()

  console.log(game)

  
     const {
    title,
    thumbnail,
    status,
    short_description,
    genre,
    platform,
    publisher,
    developer,
    release_date
  } =game

  return (
       <Container className="d-flex justify-content-center py-5">
      <Card>
        <Card.Img variant="top" src={thumbnail} alt={title} />
        <Card.Body>
          <Card.Title>
            {title} <Badge bg="success">{status}</Badge>
          </Card.Title>
          <Card.Text>{short_description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item><strong>Tür:</strong> {genre}</ListGroup.Item>
          <ListGroup.Item><strong>Platform:</strong> {platform}</ListGroup.Item>
          <ListGroup.Item><strong>Yayıncı:</strong> {publisher}</ListGroup.Item>
          <ListGroup.Item><strong>Geliştirici:</strong> {developer}</ListGroup.Item>
          <ListGroup.Item><strong>Yayın Tarihi:</strong> {release_date}</ListGroup.Item>
        </ListGroup>
      
      </Card>
    </Container>
  )
}

export default GameDetail