import React, { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectPageAllCards = ({ searchText }) => {
  const [allcard, setAllCard] = useState([]);
  const [displayCard, setDisplayCard] = useState([]);
  useEffect(() => {
    fetch("https://maruf02.github.io/Asset-Json-Img-dont-delete/Projects.json")
      .then((res) => res.json())
      .then((data) => setAllCard(data));
  }, []);

  const filterCards = () => {
    if (searchText === "All") {
      // Set searchText to an empty string if it's "All"
      searchText = "";
    }
    if (searchText) {
      const filteredCards = allcard.filter(
        (card) => card.category.toLowerCase() === searchText.toLowerCase()
      );
      setDisplayCard(filteredCards);
    } else if (searchText === "All") {
      setDisplayCard(allcard);
    } else {
      setDisplayCard(allcard);
    }
  };

  useEffect(() => {
    filterCards();
  }, [searchText, allcard]);
  return (
    <div>
      <section className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-12 ">
          {displayCard.map((card) => (
            <ProjectCard key={card.id} card={card}></ProjectCard>
          ))}
        </div>

        {/* sfsfs */}
        {/* sfsfs */}
      </section>
    </div>
  );
};

export default ProjectPageAllCards;
