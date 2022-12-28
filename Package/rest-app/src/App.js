
import { useState, useEffect } from "react";

import { Card, Container, Row, Col, Table } from "react-bootstrap";

import axios from "axios";

function App() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const data = await response.data;
    setPost(data);
  }

  return (
    <Container className="mt-3">
      <Row>
        <Col md="{12}">
          <Card className="border-0 rounded shadow-sm">
            <Card.Body>
              <Table striped bordered hover className="mb-1">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Username</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post, index) => (
                    <tr key={post.id}>
                      <td>{++index}</td>
                      <td>{post.name}</td>
                      <td>{post.username}</td>
                      <td>{post.email}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );

}

export default App;
