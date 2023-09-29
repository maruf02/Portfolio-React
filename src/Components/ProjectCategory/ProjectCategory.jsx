import React, { useEffect, useState } from "react";
import ProjectsAllCards from "../ProjectsAllCards/ProjectsAllCards";
import ProjectCategoryCard from "../ProjectCategoryCard/ProjectCategoryCard";

const ProjectCategory = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch(
      "https://maruf02.github.io/Asset-Json-Img-dont-delete/ProjectCategory.json"
    )
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div>
      <h2>g</h2>
      <section className="container mx-auto  h-fit wcontainer portfolio-container">
        {/* <!-- tab section --> */}
        <section className=" flex flex-row flex-wrap gap-3 md:gap-5 text-center justify-center pt-10 pb-8 ">
          {category.map((card) => (
            <ProjectCategoryCard
              key={card.id}
              card={card}
            ></ProjectCategoryCard>
          ))}
        </section>
      </section>
    </div>
  );
};

export default ProjectCategory;
