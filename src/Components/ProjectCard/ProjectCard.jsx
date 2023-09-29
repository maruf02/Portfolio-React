import React from "react";
import "./ProjectCard.css";
const ProjectCard = ({ card }) => {
  const { id, project_title, category, img, description } = card;
  return (
    <div>
      <section className="profile p-2 justify-center">
        <div className="login-form-container  ">
          <div className="login-form">
            <div className="img-container">
              <div className="img-form">
                <img src={img} alt="" />
              </div>
            </div>
            <div className="txt-container">
              <p>{project_title} </p>
              <br />
              <p>{description}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectCard;
