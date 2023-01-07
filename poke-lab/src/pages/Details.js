import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/header/Header";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constants/url";

function Details() {
  const [details, setDetails] = useState([]);
  const params = useParams();

  console.log(params);

  useEffect(() => {
    fetchDetails();
  }, [params]);

  const fetchDetails = () => {
    axios
      .get(`${BASE_URL}/pokemon/${params.url}`)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((error) => {
        console.log("Erro ao buscar informações de pokemon");
        console.log(error.response);
      });
  };

  return (
    <div>
      <Header />

      <h1 className="title">Detalhes</h1>
    </div>
  );
}

export default Details;
