import React from "react";

const ProjectCategoryCard = ({ card }) => {
  const { id, category_title } = card;
  return (
    <div>
      <h2>af</h2>
      <div
        className="btn btn-white tab-active pt-1 text-xl "
        data-name={category_title}
      >
        {category_title}
      </div>
    </div>
  );
};

export default ProjectCategoryCard;
