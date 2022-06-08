import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_BASE_URL + "wp/v2/posts?per_page=12";

export default function RenderAnimals() {
  const [animals, setAnimals] = useState([]);

  useEffect(function () {
    async function getAnimals() {
      try {
        const response = await axios.get(API);
        setAnimals(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getAnimals();
  }, []);

  return (
    <>
      {animals.map((animal) => {
        return (
          <>
            <Link to={`details/${animal.id}`}>
              <h2 key={animal.id}>{animal.title.rendered}</h2>
              <img src={animal.featured_media_src_url} />
            </Link>
          </>
        );
      })}
    </>
  );
}

RenderAnimals.propTypes = {
  register: PropTypes.func,
};

RenderAnimals.defaultProps = {
  register: () => {},
};
