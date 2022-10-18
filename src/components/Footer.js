import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="flex w-full justify-center items-center text-md p-5 bg-secondary-dark text-white">
        Created With <BsFillHeartFill className="mx-2 text-red-500" /> by
        @MSOBKYY{" "}
        <a href="https://github.com/msobkyy">
          <FaGithubSquare size={30} className="mx-4 " />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
