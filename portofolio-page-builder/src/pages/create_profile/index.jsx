import React from "react";
import { useFormik } from "formik";
import { validationProfile } from "../../utils/validation";

import Portfolio from "../../components/Portfolio";
import ProfileForm from "./ProfileForm";

const CreateProfile = () => {
  const formikProfile = useFormik({
    initialValues: {
      name: "",
      title: "",
      description: "",
      cover_picture: "",
      avatar_picture: "",
    },
    validationSchema: validationProfile,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <section className="flex justify-center items-center w-max h-full">
      <div className="w-1/2 mx-40 absolute left-0 top-0">
        <ProfileForm
          onSubmit={formikProfile.handleSubmit}
          formik={formikProfile}
        />
      </div>
      <div className="absolute right-0 top-0">
        <Portfolio />
      </div>
    </section>
  );
};

export default CreateProfile;
