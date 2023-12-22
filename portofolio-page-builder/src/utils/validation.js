import * as Yup from "yup";

export const validationPortofolio = Yup.object().shape({
  list_portofolio: Yup.array().of(
    Yup.object().shape({
      job_position: Yup.string().required("Job Position is required"),
      company: Yup.string().required("Company is required"),
      short_description: Yup.string().required("Short Description is required"),
      start_date: Yup.date().required("Start Date is required"),
      end_date: Yup.date().required("End Date is required"),
    })
  ),
});

export const validationProfile = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  cover_picture: Yup.string(),
  avatar_picture: Yup.string(),
});
