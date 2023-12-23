const Portfolio = ({
  name,
  title,
  description,
  cover_picture,
  avatar_picture,
  list_portofolio,
  company,
}) => {
  return (
    <div className="w-96 h-full shadow-sm rounded-md z-10 bg-white">
      <div className="flex flex-col justify-center items-center">
        <img className="w-full h-40 z-5 border" src={avatar_picture} />
        <img
          className="w-32 h-32 rounded-full z-10 relative bottom-20"
          style={{ objectFit: "fit" }}
          src={cover_picture}
        />
        <div className="grid grid-cols-1 px-5 text-center">
          <p className="font-semibold">{name}</p>
          <p>{title}</p>
          <p className="text-sm my-10">{description}</p>
        </div>
        <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
          <h1 className="text-2xl font-bold mb-4">Work Experience</h1>
          {list_portofolio &&
            list_portofolio.map((item, index) => {
              return (
                <div className="my-10 border-b" key={index}>
                  <div className="mb-4">
                    <p className="text-gray-600">Company:</p>
                    <p className="font-semibold">{item?.company}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-600">Job Position:</p>
                    <p className="font-semibold">{item?.job_position}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-600">Dates:</p>
                    <p className="font-semibold">
                      {item?.start_date} - {item?.end_date}
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-600">Brief Description:</p>
                    <p className="text-justify">{item?.short_description}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
