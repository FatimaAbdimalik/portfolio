import React from "react";
import { Card } from "react-bootstrap";

const ProjectCards = ({ data }) => {
  console.log(data);
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {data
        ? data.map((cardDetails, key) => {
            return (
              <Card
                style={{
                  width: "18rem",
                  marginRight: "1rem",
                  marginLeft: "1rem",
                  marginBottom: "1rem",
                }}
                key={key}
              >
                <Card.Body
                  style={{ color: "black", boxShadow: "5px 5px 5px 3px" }}
                >
                  <div style={{ height: "8rem" }}>
                    <Card.Title>{cardDetails.name}</Card.Title>
                    <Card.Text>
                      <h2> {cardDetails.intro} </h2>
                    </Card.Text>
                  </div>
                  <Card.Img variant="top" src={cardDetails.image} />
                  <div style={{ height: "100px", margin: "10px 0 5px 3px" }}>
                    {cardDetails.techStack}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "space-around",
                      // padding: "2px 2px 2px 2px",
                      // backgroundColor: "#3cb371",
                      // color: "black",
                    }}
                  >
                    <Card.Link
                      href={cardDetails.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "5px 5px 5px 5px",
                        backgroundColor: "#3cb371",
                        color: "black",
                      }}
                    >
                      Code
                    </Card.Link>
                    <Card.Link
                      href={cardDetails.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "5px 5px 5px 5px",
                        backgroundColor: "#3cb371",
                        color: "black",
                      }}
                    >
                      Live app
                    </Card.Link>
                  </div>
                </Card.Body>
              </Card>
            );
          })
        : "Loading"}
    </div>
  );
};

export default ProjectCards;
