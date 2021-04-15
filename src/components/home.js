import React, { useEffect, useState } from "react";
import "./cards/card.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { getSuggestedQuery } from "@testing-library/dom";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import "moment-timezone";

import axios from "axios";

const mystyle = {
  color: "black",
  backgroundColor: "white",
  padding: "10px",
  fontFamily: "Arial",
  textAlign: "center",
  fontSize: "2em",
};

const Home = () => {
  const [user, setUsers] = useState([]);

  const getUser = async () => {
    const response = await fetch("http://localhost:5000/data");

    setUsers(await response.json());
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <h1 style={mystyle}>List of Missing People</h1>
      <div className="container-fluid ">
        <div className="row text-center">
          <div className="cards-container">
            {user.map((CurElem) => {
              return (
                <div>
                  <div className="col-10 col-md-4 mt-5" key={CurElem._id}>
                    <Card
                      style={{ width: "18rem", backgroundColor: "white" }}
                      className="d-flex align-items-center"
                    >
                      <Card.Body>
                        <Card.Text
                          style={{
                            textAlign: "center",
                            fontFamily: "sans-serif",
                          }}
                        >
                          {" "}
                          {CurElem.username}
                        </Card.Text>
                        <Card.Title>{CurElem.age}</Card.Title>
                        <Card.Text>{CurElem.location}</Card.Text>
                        <Card.Text>
                          <Moment format="YYYY/MM/DD">{CurElem.date}</Moment>
                        </Card.Text>
                      </Card.Body>
                      <Card.Text>
                        <Link to={"/edit/" + CurElem._id}>edit</Link> |{" "}
                        <a
                          href="#"
                          onClick={() => {
                            CurElem.deleteData(CurElem._id);
                          }}
                        >
                          delete
                        </a>
                      </Card.Text>
                    </Card>
                  </div>
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
