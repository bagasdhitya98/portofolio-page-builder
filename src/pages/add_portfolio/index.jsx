import { useNavigate } from "react-router-dom";

import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Carousel from "../../components/Carousel";
import images from "../../data/carousel.json";

const AddPortfolio = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");

  return (
    <Layout>
      <div className="flex h-full">
        <Carousel images={images.placeholder} />
      </div>
      <div className="flex flex-col items-center space-y-8 my-16">
        <p className="text-center text-xl font-semibold">
          Create Your Amazing Experience
        </p>
        <p className="text-center">
          {!name
            ? ` With just a click on the 'Create Your Profile' button, embark on the
          journey to build your professional portfolio.`
            : ""}{" "}
          <br /> Showcase your achievements and creativity effortlessly and
          effectively.
        </p>
        <div className="flex gap-x-7">
          {!name ? (
            <div className="w-96 h-14">
              <Button
                isFilled={true}
                title={"Create Your Profile"}
                onClick={() => navigate("/builder/create_profile")}
              />
            </div>
          ) : (
            <div className="flex gap-x-8">
              <div className="w-96 h-14">
                <Button
                  isFilled={true}
                  title={"Create Your Profile"}
                  onClick={() => navigate("/builder/create_profile")}
                />
              </div>
              <div className="w-96 h-14">
                <Button
                  isFilled={false}
                  title={"View List Portfolio"}
                  onClick={() => navigate("/builder/view_portofolio")}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AddPortfolio;
