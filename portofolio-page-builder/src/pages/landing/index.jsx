import { useNavigate } from "react-router-dom";

import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";

import Career from "../../assets/illustrations/iExperience_career.jpeg";
import data from "../../data/landing.json";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="fixed top-0">
        <Navbar />
      </div>
      <div className="flex grid grid-cols-2 w-full">
        <div className="h-screen flex flex-col justify-center items-center space-y-12">
          <h1 className="text-black text-xl font-semibold">
            Welcome to iExperience - The Best Place to Build Your Career!
          </h1>
          <p className="text-left mx-12">
            iExperience is your steadfast companion on the journey to the
            pinnacle of career success. With our innovative platform, you can
            effortlessly create a portfolio that reflects your uniqueness,
            skills, and outstanding achievements.
          </p>
          <div className="w-96 h-14 self-start ml-12">
            <Button
              isFilled={true}
              title={"Get Started"}
              onClick={() => navigate("/builder/edit_portofolio")}
            />
          </div>
        </div>
        <div className="h-screen flex flex-col justify-center space-y-5">
          <img src={Career} alt="Your Image" class="rounded-full h-96 w-max" />
        </div>
      </div>
      <div
        id="about-us"
        className="flex flex-col justify-center items-center space-y-10"
      >
        <h1 className="text-black text-xl font-semibold">Why iExperience?</h1>
        <div className="grid grid-cols-3 gap-x-8">
          {data &&
            data.sections_why.map((item, index) => {
              return (
                <div
                  key={index}
                  className="border border-cyan-500 rounded-lg h-80 w-96 p-10 space-y-8 text-center"
                >
                  <h1 className="text-black text-xl font-semibold">
                    {item.title}
                  </h1>
                  <p className="text-left text-center mx-12">{item.content}</p>
                </div>
              );
            })}
        </div>
      </div>
      <div
        id="contact"
        className="flex flex-col justify-center items-center space-y-10 my-80"
      >
        <h1 className="text-black text-xl font-semibold">Contact Us</h1>
        <p className="text-center">
          For any assistance or inquiries, feel free to reach out to us. <br />{" "}
          We are here to provide the best solutions for you with dedication and
          professionalism.
        </p>
        <p className="text-center font-bold">Phone Number : +62895375705250</p>
      </div>
      <footer className="w-screen h-40 bg-cyan-500 flex justify-center items-center text-white">
        &copy; 2023 iExperience | All rights reserved
      </footer>
    </Layout>
  );
};

export default Landing;
