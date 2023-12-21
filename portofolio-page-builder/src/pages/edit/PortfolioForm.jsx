import React from "react";
import Button from "../../components/Button";

const PortfolioForm = ({ formik }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    formik.submitForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 w-96 p-5">
        {formik?.values?.list_portofolio?.map((portofolio, index) => (
          <div key={index} className="mb-4 space-y-5">
            <label
              htmlFor={`job_position_${index}`}
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Job Position<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              id={`job_position_${index}`}
              className={`bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 ${
                formik.submitCount > 0 &&
                formik.errors.list_portofolio &&
                formik.errors.list_portofolio[index]?.job_position
                  ? "border-red-500"
                  : ""
              }`}
              placeholder="Job Position"
              {...formik.getFieldProps(
                `list_portofolio[${index}].job_position`
              )}
            />
            {formik.submitCount > 0 &&
              formik.errors.list_portofolio &&
              formik.errors.list_portofolio[index]?.job_position && (
                <p className="text-red-500">
                  {formik.errors.list_portofolio[index].job_position}
                </p>
              )}

            <label
              htmlFor={`company_${index}`}
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Company<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              id={`company_${index}`}
              className={`bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 ${
                formik.submitCount > 0 &&
                formik.errors.list_portofolio &&
                formik.errors.list_portofolio[index]?.company
                  ? "border-red-500"
                  : ""
              }`}
              placeholder="Company"
              {...formik.getFieldProps(`list_portofolio[${index}].company`)}
            />
            {formik.submitCount > 0 &&
              formik.errors.list_portofolio &&
              formik.errors.list_portofolio[index]?.company && (
                <p className="text-red-500">
                  {formik.errors.list_portofolio[index].company}
                </p>
              )}

            <label
              htmlFor={`short_description_${index}`}
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Short Description<span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              type="text"
              id={`short_description_${index}`}
              className={`bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 ${
                formik.submitCount > 0 &&
                formik.errors.list_portofolio &&
                formik.errors.list_portofolio[index]?.short_description
                  ? "border-red-500"
                  : ""
              }`}
              placeholder="Short Description"
              {...formik.getFieldProps(
                `list_portofolio[${index}].short_description`
              )}
            />
            {formik.submitCount > 0 &&
              formik.errors.list_portofolio &&
              formik.errors.list_portofolio[index]?.short_description && (
                <p className="text-red-500">
                  {formik.errors.list_portofolio[index].short_description}
                </p>
              )}

            <label
              htmlFor={`start_date_${index}`}
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Start Date<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="date"
              id={`start_date_${index}`}
              className={`bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 ${
                formik.submitCount > 0 &&
                formik.errors.list_portofolio &&
                formik.errors.list_portofolio[index]?.start_date
                  ? "border-red-500"
                  : ""
              }`}
              {...formik.getFieldProps(`list_portofolio[${index}].start_date`)}
            />
            {formik.submitCount > 0 &&
              formik.errors.list_portofolio &&
              formik.errors.list_portofolio[index]?.start_date && (
                <p className="text-red-500">
                  {formik.errors.list_portofolio[index].start_date}
                </p>
              )}

            <label
              htmlFor={`end_date_${index}`}
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              End Date<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="date"
              id={`end_date_${index}`}
              className={`bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 ${
                formik.submitCount > 0 &&
                formik.errors.list_portofolio &&
                formik.errors.list_portofolio[index]?.end_date
                  ? "border-red-500"
                  : ""
              }`}
              {...formik.getFieldProps(`list_portofolio[${index}].end_date`)}
            />
            {formik.submitCount > 0 &&
              formik.errors.list_portofolio &&
              formik.errors.list_portofolio[index]?.end_date && (
                <p className="text-red-500">
                  {formik.errors.list_portofolio[index].end_date}
                </p>
              )}
          </div>
        ))}
        <div className="mt-8 text-center">
          <Button isFilled={true} title={"Add Portofolio"} type="submit" />
        </div>
      </div>
    </form>
  );
};

export default PortfolioForm;
