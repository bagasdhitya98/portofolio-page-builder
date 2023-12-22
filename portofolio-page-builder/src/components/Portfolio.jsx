const Portfolio = () => {
  return (
    <div className="w-96 h-full shadow-sm rounded-md z-10 bg-white">
      <div className="flex flex-col justify-center items-center">
        <img
          className="w-full h-40 z-5 border"
          src="https://i.pinimg.com/564x/1b/1f/92/1b1f92bf7d89c843b3a449246c225ac6.jpg"
        />
        <img
          className="w-32 h-32 rounded-full z-10 relative bottom-20"
          style={{ objectFit: "fit" }}
          src="https://i.pinimg.com/564x/e4/c5/9f/e4c59fdbb41ccd0f87dc0be871d91d98.jpg"
        />
        <div className="grid grid-cols-1 px-5 text-center">
          <p className="font-semibold">John Doe</p>
          <p>Frontend Developer</p>
          <p className="text-sm my-10">
            "As a Frontend Developer, I design and build user-friendly websites
            and applications using HTML, CSS, and JavaScript. I focus on
            creating visually appealing and responsive interfaces to ensure a
            great user experience. Let's work together to bring your digital
            projects to life!"
          </p>
        </div>
        <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
          <h1 className="text-2xl font-bold mb-4">Work Experience</h1>
          <div className="my-10 border-b">
            <div className="mb-4">
              <p className="text-gray-600">Company:</p>
              <p className="font-semibold">Company Name</p>
            </div>

            <div className="mb-4">
              <p className="text-gray-600">Job Position:</p>
              <p className="font-semibold">Frontend Developer</p>
            </div>

            <div className="mb-4">
              <p className="text-gray-600">Dates:</p>
              <p className="font-semibold">January 2020 - December 2022</p>
            </div>

            <div className="mb-4">
              <p className="text-gray-600">Brief Description:</p>
              <p className="text-justify">
                I was responsible for developing responsive and engaging user
                interfaces using HTML, CSS, and JavaScript. Involved in the
                development and maintenance of frontend features to enhance the
                user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
