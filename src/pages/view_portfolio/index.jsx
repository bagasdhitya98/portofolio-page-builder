import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

import {
  validationProfile,
  validationPortofolio,
} from "../../utils/validation";
import Modal from "../../components/Modal";
import LeftArrow from "../../assets/icons/LeftArrow.svg";
import RightArrow from "../../assets/icons/RightArrow.svg";
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import Button from "../../components/Button";

import EditProfile from "../create_profile/ProfileForm";
import EditPortofolio from "../create_profile/PortfolioForm";

const ViewPortfolio = () => {
  const navigate = useNavigate();
  const [portfolio, setPortfolio] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isPortofolio, setIsPortofolio] = useState(false);

  const getAllPortfolio = async () => {
    try {
      const response = await axios.get("portofolio");
      setPortfolio(response.data);
    } catch (error) {
      Swal.fire({
        title: "Error fetching portfolio",
        text: "Please try again later",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const deletePortfolio = async (id) => {
    Swal.fire({
      title: "Warning",
      text: "Are you sure you want to delete?",
      icon: "warning",
      confirmButtonColor: "red",
      confirmButtonText: "Delete",
      showCancelButton: true,
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`portofolio/${id}`);
          Swal.fire({
            title: "Successfully deleted",
            text: "Successfully removed portfolio",
            icon: "success",
            confirmButtonText: "OK",
          });
          getAllPortfolio();
        } catch (error) {
          Swal.fire({
            title: "Error deleting portfolio",
            text: "Please try again later",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      }
    });
  };

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
        const response = await axios.put("portofolio", {
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

  const viewDetail = (id) => {
    navigate(`/builder/detail/${id}`, {
      state: {
        user_id: id,
      },
    });
  };

  useEffect(() => {
    getAllPortfolio();
  }, []);

  return (
    <Layout>
      <div className="my-10 ml-10 w-full flex self-start items-center gap-x-5 ">
        <a className="cursor-pointer" onClick={() => navigate(-1)}>
          <img src={LeftArrow} width={40} height={40} />
        </a>
        <label className="font-semibold text-xl">List Portofolio</label>
      </div>
      <div className="w-full h-full flex justify-center items-center mb-10 mx-16 overflow-x-auto relative">
        <div className="flex gap-x-10">
          {portfolio.length > 0 ? (
            portfolio.map((item, index) => (
              <div className="w-96 h-full flex-shrink-0" key={index}>
                <Card>
                  <div className="flex flex-col justify-center items-center text-center">
                    <div className="flex flex-col">
                      <img
                        src={item?.cover_picture}
                        className="w-screen h-60 relative rounded-md"
                      />
                      <img
                        src={item?.avatar_picture}
                        className="w-20 h-20 self-center z-10 relative bottom-10 rounded-full"
                      />
                    </div>
                    <div className="p-5 flex flex-col justify-center items-center">
                      <p className="font-semibold">{item?.name}</p>
                      <p className="font-medium">{item?.title}</p>
                      <p className="my-5">{item?.description}</p>
                      <div className="grid grid-cols-2 justify-center items-center gap-x-5 w-60">
                        <button
                          className="w-full bg-green-500 text-white"
                          onClick={() => setIsVisible(!isVisible)}
                        >
                          Edit
                        </button>
                        <button
                          className="w-full bg-red-500 text-white"
                          onClick={() => deletePortfolio(item?.id)}
                        >
                          Delete
                        </button>
                        <button
                          className="w-40 bg-blue-500 text-white mx-10 mt-5"
                          onClick={() => viewDetail(item?.id)}
                        >
                          View Detail
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
        <div className="fixed left-0 transform -translate-y-1/2 flex items-center">
          <a className="rounded-md cursor-pointer w-20 h-20 bg-slate-200 flex justify-center items-center">
            <img src={LeftArrow} width={40} />
          </a>
        </div>
        <div className="fixed right-0 transform -translate-y-1/2 flex items-center">
          <a className="rounded-mdcursor-pointer w-20 h-20 bg-slate-200 flex justify-center items-center">
            <img src={RightArrow} width={40} />
          </a>
        </div>
      </div>
      <Modal isOpen={isVisible} onClose={() => setIsVisible(false)}>
        {isEdit ? (
          <div className="w-full h-screen relative">
            <EditProfile formik={formikProfile} />
          </div>
        ) : isPortofolio ? (
          <EditPortofolio formik={formikPorto} />
        ) : (
          <div className="p-5 z-10 space-y-5">
            <p className="font-semibold">Choose what will be edited</p>
            <div className="flex gap-x-5 w-96">
              <Button
                isFilled={true}
                title={"Edit Profile"}
                onClick={() => setIsEdit(true)}
              />
              <Button
                isFilled={false}
                title={"Edit Portofolio"}
                onClick={() => setIsPortofolio(true)}
              />
            </div>
          </div>
        )}
      </Modal>
    </Layout>
  );
};

export default ViewPortfolio;
