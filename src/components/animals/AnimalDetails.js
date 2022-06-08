import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_BASE_URL + "wp/v2/posts";

export default function AnimalDetails() {
  const [animal, setAnimal] = useState([]);
  const [error, setError] = useState(null);

  let history = useHistory();
  const { id } = useParams();

  if (!id) {
    history.push("/");
  }
  const API_URL = API + "/" + id;

  useEffect(
    function () {
      async function getDetail() {
        try {
          const response = await axios.get(API_URL);
          console.log(response);
          setAnimal(response.data);
        } catch (error) {
          setError(error.toString());
        }
      }
      getDetail();
    }[API_URL]
  );
  return (
    <>
      {animal.map((items) => {
        return (
          <>
            <h2 key={items.id}>{items.title.rendered}</h2>
            <img src={items.featured_media_src_url} />
          </>
        );
      })}
    </>
  );
}
