import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import LeftArrow from "../../assets/icons/LeftArrow.svg";

const placeholderAvatar =
  "https://via.placeholder.com/300x200?text=Avatar+Placeholder";
const placeholderCover =
  "https://via.placeholder.com/1200x400?text=Cover+Placeholder";

const ProfileForm = ({ formik, onSubmit }) => {
  const navigate = useNavigate();
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
        formik.setFieldValue("avatar_picture", reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setAvatarPreview(null);
      formik.setFieldValue("avatar_picture", "");
    }
  };

  const handleCoverChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverPreview(reader.result);
        formik.setFieldValue("cover_picture", reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setCoverPreview(null);
      formik.setFieldValue("cover_picture", "");
    }
  };

  return (
    <form className="p-8 w-full" onSubmit={onSubmit}>
      <div className="flex flex-col gap-y-5">
        <div className="my-10 flex items-center gap-x-5">
          <a className="cursor-pointer" onClick={() => navigate(-1)}>
            <img src={LeftArrow} width={40} height={40} />
          </a>
          <label className="font-semibold text-xl">Create Your Profile</label>
        </div>
        <label
          htmlFor="avatar_picture"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Avatar Picture
        </label>
        <input
          type="file"
          id="avatar_picture"
          accept="image/*"
          onChange={handleAvatarChange}
          className="hidden"
        />
        <label
          htmlFor="avatar_picture"
          className="cursor-pointer bg-gray-100 border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 mb-4"
        >
          Choose Avatar Picture
        </label>
        {avatarPreview ? (
          <img
            src={avatarPreview}
            alt="Avatar Preview"
            style={{ objectFit: "contain" }}
            className="mb-4 w-96 h-60"
          />
        ) : (
          <img
            src={placeholderAvatar}
            alt="Placeholder Avatar Preview"
            width={300}
            className="mb-4 rounded"
          />
        )}
        <label
          htmlFor="cover_picture"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Cover Picture
        </label>
        <input
          type="file"
          id="cover_picture"
          accept="image/*"
          onChange={handleCoverChange}
          className="hidden"
        />
        <label
          htmlFor="cover_picture"
          className="cursor-pointer bg-gray-100 border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 mb-4"
        >
          Choose Cover Picture
        </label>
        {coverPreview ? (
          <img
            src={coverPreview}
            alt="Cover Preview"
            width={300}
            className="mb-4 rounded"
          />
        ) : (
          <img
            src={placeholderCover}
            alt="Placeholder Cover Preview"
            width={300}
            className="mb-4 rounded"
          />
        )}
        <label
          htmlFor="name"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Name<span className="text-red-500 ml-1">*</span>
        </label>
        <input
          type="text"
          id="name"
          className={`bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 ${
            formik.submitCount > 0 && formik.errors.name ? "border-red-500" : ""
          }`}
          placeholder="Name"
          {...formik.getFieldProps("name")}
        />
        {formik.submitCount > 0 && formik.errors.name && (
          <p className="text-red-500">{formik.errors.name}</p>
        )}
        <label
          htmlFor="title"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Title<span className="text-red-500 ml-1">*</span>
        </label>
        <input
          type="text"
          id="title"
          className={`bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 ${
            formik.submitCount > 0 && formik.errors.title
              ? "border-red-500"
              : ""
          }`}
          placeholder="Title"
          {...formik.getFieldProps("title")}
        />
        {formik.submitCount > 0 && formik.errors.title && (
          <p className="text-red-500">{formik.errors.title}</p>
        )}
        <label
          htmlFor="description"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Description<span className="text-red-500 ml-1">*</span>
        </label>
        <textarea
          id="description"
          className={`bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 ${
            formik.submitCount > 0 && formik.errors.description
              ? "border-red-500"
              : ""
          }`}
          placeholder="Description"
          {...formik.getFieldProps("description")}
        />
        {formik.submitCount > 0 && formik.errors.description && (
          <p className="text-red-500">{formik.errors.description}</p>
        )}

        <div className="mt-8 text-center">
          <Button isFilled={true} title={"Submit Profile"} type="submit" />
        </div>
      </div>
    </form>
  );
};

export default ProfileForm;
