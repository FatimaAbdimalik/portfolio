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
                <Card.Body
                  style={{ color: "black", boxShadow: "5px 5px 5px 3px" }}
                >
                  <Card.Title>{cardDetails.name}</Card.Title>
                  <Card.Text>
                    <h2> {cardDetails.intro} </h2>
                    <Card.Img variant="top" src={cardDetails.image} />
                    {cardDetails.techStack}
                  </Card.Text>
                  <div style={{ display: "flex", alignItems: "flex-end" }}>
                    <Card.Link
                      href={cardDetails.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                    </Card.Link>
                    <Card.Link
                      href={cardDetails.live}
                      target="_blank"
                      rel="noopener noreferrer"
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
