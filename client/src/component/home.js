/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Container, Card, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  const getPosts = () => {
    axios({
      method: "GET",
      url: "http://localhost:3500/posts/",
    })
      .then((result) => {
        setPosts(result.data);
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container">
      <h3>Home</h3>
      {posts.map((x) => {
        const { id, imgpost, caption, userId } = x;
        return (
          <Card
            key={id}
            className="md-2 mt-2"
            style={{ width: "auto", height: "auto" }}
          >
            <Card.Header>User {userId}</Card.Header>
            <Card.Body>
              <Card.Img src={`http://localhost:3500${imgpost}`} />
              <Card.Text>{caption}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Home;
