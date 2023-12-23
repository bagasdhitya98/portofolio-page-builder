import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import {
  validationProfile,
  validationPortofolio,
} from "../../utils/validation";
import axios from "axios";
import Swal from "sweetalert2";
import ProfileForm from "./ProfileForm";
import PortfolioForm from "./PortfolioForm";

const CreateProfile = () => {
  const navigate = useNavigate();
  const [nextStep, setNextStep] = useState(false);
  const [userId, setUserId] = useState("");

  const formikProfile = useFormik({
    initialValues: {
      name: "",
      title: "",
      description: "",
      cover_picture: "",
      avatar_picture: "",
    },
    validationSchema: validationProfile,
    onSubmit: async (values) => {
      try {
        const body = {
          name: values.name,
          title: values.title,
          description: values.description,
          cover_picture: values.cover_picture,
          avatar_picture: values.avatar_picture,
        };
        const response = await axios.post("portofolio", {
          name: body.name,
          title: body.title,
          description: body.description,
          cover_picture: body.cover_picture,
          avatar_picture: body.avatar_picture,
        });
        if (response.data) {
          Swal.fire({
            title: "Successfully Saved!",
            text: "Your profile was successfully submitted",
            icon: "success",
            confirmButtonText: "OK",
          }).then((res) => {
            if (res.isConfirmed) {
              localStorage.setItem("name", body.name);
              setUserId(response.data.id);
              setNextStep(true);
            }
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Something went wrong",
          text: "Please refresh your page",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    },
  });

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
      try {
        const response = await axios.put(`portofolio/${userId}`, {
          list_portofolio: values.list_portofolio,
        });
        if (response.data) {
          Swal.fire({
            title: "Successfully Saved!",
            text: "Your portofolio was successfully added!",
            icon: "success",
            confirmButtonText: "OK",
          }).then((res) => {
            if (res.isConfirmed) {
              navigate("/builder/edit_portofolio");
            }
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Something went wrong",
          text: "Please refresh your page",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    },
  });

  useEffect(() => {
    if (!nextStep) {
      Swal.fire({
        title: "Warning!",
        text: "Make sure your cover and avatar picture have size less than 38kB before continue",
        icon: "warning",
        confirmButtonText: "OK",
      });
    }
  }, []);

  return (
    <section className="flex justify-center items-center w-screen h-full">
      <div className="w-full mx-40">
        {nextStep ? (
          <PortfolioForm formik={formikPorto} />
        ) : (
          <ProfileForm
            onSubmit={formikProfile.handleSubmit}
            formik={formikProfile}
          />
        )}
      </div>
    </section>
  );
};

export default CreateProfile;
