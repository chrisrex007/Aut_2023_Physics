import React from "react";
import subjectImages from "../assets"; // Import the images from the assets folder

const subjects = [
  {
    link: "https://drive.google.com/drive/folders/1DzqV4aYao3RLRr_yVk0XDfCabtx5n3yJ?usp=sharing",
    imgSrc: "EQUIVALENT_CIRCUIT",
    title: "Electrical Technology\nEE11003",
  },
  {
    link: "https://drive.google.com/drive/folders/16oCI3mPovH-110Q9LW_Puqr_4DgkiUGe?usp=sharing",
    imgSrc: "MECHANICS",
    title: "Basic Engineering Mechanics\nME11003",
  },
  {
    link: "https://drive.google.com/drive/folders/1DnelEU_aYWDEeufOli-B1TLFIa_MjejX?usp=sharing",
    imgSrc: "WELDING",
    title: "Engineering Laboratory\nEN19003",
  },
  {
    link: "https://drive.google.com/drive/folders/12UYQYH704j-NB3M7SvPzJdTM1SIiZ0zT?usp=sharing",
    imgSrc: "WAVES",
    title: "Physics of Waves\nPH11003",
  },
  {
    link: "https://drive.google.com/drive/folders/1NSgudzkqBDiHnYWH76LsjP2r3hrHF30Q?usp=sharing",
    imgSrc: "ENVIRONMENTAL",
    title: "Environmental Science\nEV10003",
  },
  {
    link: "https://drive.google.com/drive/folders/1CLxxczQLqjb3TeSblJPResozOgyKjsne?usp=sharing",
    imgSrc: "CALCULUS",
    title: "Advanced Calculus\nMA11003",
  },
  {
    link: "http://www.physlab.iitkgp.ac.in/",
    imgSrc: "PHYSICS_LAB",
    title: "Physics Laboratory\nPH19003",
  },
];

function Subjects() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-12">
      {subjects.map((subject, index) => (
        <div key={index} className="flex flex-col items-center">
          <a href={subject.link} target="_blank" rel="noopener noreferrer">
            <img
              src={subjectImages[subject.imgSrc]} // Use the imported image here
              alt={subject.title}
              className="w-[18vw] h-[12vw] mix-blend-multiply rounded-lg hover:shadow-custom hover:transition-transform duration-200 hover:border-4 hover:border-black"
            />
          </a>
          <p className="font-sans text-center text-lg mt-2">{subject.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Subjects;
