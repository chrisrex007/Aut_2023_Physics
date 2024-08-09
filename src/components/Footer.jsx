import React from "react";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#150624] text-[#d5c3c3] py-8 mt-12">
      <p className="text-center text-lg mb-4">
        Hi, I am Damiya, CSE sophomore at IIT Kharagpur. This basic website
        contains organized study materials for the physics semester during first
        year. Feel free to reach out for any suggestions!
      </p>
      <div id="contact" className="grid grid-cols-3 gap-4 mb-4">
        <a
          href="https://wa.me//919408975397"
          className="text-[#d5c3c3] text-4xl hover:text-[#bb92bb] transform hover:scale-110 transition-transform duration-200"
        >
          <i className="fa-brands fa-square-whatsapp"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/damiya-gondha79"
          className="text-[#d5c3c3] text-4xl hover:text-[#bb92bb] transform hover:scale-110 transition-transform duration-200"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/damiyagondha/"
          className="text-[#d5c3c3] text-4xl hover:text-[#bb92bb] transform hover:scale-110 transition-transform duration-200"
        >
          <i className="fa-brands fa-square-instagram"></i>
        </a>
      </div>
      <div id="credits" className="text-center text-sm">
        <p>
          Inspired from{" "}
          <a
            href="https://garggopal2001.github.io/cse_material/#links"
            className="font-bold text-[#bb92bb] hover:text-[#d5c3c3]"
          >
            ‘CSE 2020’
          </a>{" "}
          by{" "}
          <a
            href="https://garggopal2001.github.io/me/"
            className="font-bold text-[#bb92bb] hover:text-[#d5c3c3]"
          >
            Garg Gopal.
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
