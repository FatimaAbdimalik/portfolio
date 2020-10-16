import React from "react";
import { Card } from "react-bootstrap";

const ProjectCards = ({ data }) => {
  console.log(data);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
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
                <Card.Body style={{ color: "black" }}>
                  <Card.Title>{cardDetails.name}</Card.Title>
                  <Card.Text>{cardDetails.url}</Card.Text>
                  <Card.Link href={cardDetails.url}>Code</Card.Link>
                  <Card.Link href="#">Live app</Card.Link>
                </Card.Body>
              </Card>
            );
          })
        : "Loading"}
    </div>
  );
};

export default ProjectCards;
