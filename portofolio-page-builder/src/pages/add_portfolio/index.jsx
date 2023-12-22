import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import { validationPortofolio } from "../../utils/validation";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Carousel from "../../components/Carousel";
import Modal from "../../components/Modal";
import PortfolioForm from "./PortfolioForm";
import images from "../../data/carousel.json";

const AddPortfolio = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formikPorto = useFormik({
    initialValues: {
      list_portofolio: [
        {
          job_position: "",
          company: "",
          short_description: "",
          start_date: "",
          end_date: "",
        },
      ],
    },
    validationSchema: validationPortofolio,
    onSubmit: async (values) => {
      console.log(values);
      setIsModalOpen(false);
    },
  });

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
            <div className="w-96 h-14">
              <Button
                isFilled={false}
                title={"Add Portfolio"}
                onClick={() => setIsModalOpen(!isModalOpen)}
              />
            </div>
          )}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(!isModalOpen)}>
        <PortfolioForm formik={formikPorto} />
      </Modal>
    </Layout>
  );
};

export default AddPortfolio;
