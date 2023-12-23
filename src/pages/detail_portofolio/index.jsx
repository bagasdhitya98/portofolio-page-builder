import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import Layout from "../../components/Layout";
import Portfolio from "../../components/Portfolio";

const DetailPortfolio = () => {
  const location = useLocation();
  const user_id = location?.state?.user_id;
  const [detail, setDetail] = useState();

  const getDetailPortofolio = async () => {
    try {
      const response = await axios.get(`portofolio/${user_id}`);
      setDetail(response.data);
      console.log(response.data);
    } catch (error) {
      Swal.fire({
        title: "Failed load detail portofolio",
        text: "Please refresh your page",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };
  2;

  useEffect(() => {
    getDetailPortofolio();
  }, []);

  return (
    <Layout>
      <div className="w-screen h-full flex justify-center">
        <Portfolio
          cover_picture={detail?.cover_picture}
          avatar_picture={detail?.avatar_picture}
          name={detail?.name}
          title={detail?.title}
          description={detail?.description}
          list_portofolio={detail?.list_portofolio}
        />
      </div>
    </Layout>
  );
};

export default DetailPortfolio;
