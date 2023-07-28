import { Button } from "../Button";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import global from "../../content/global.json";
import { Link, Nav } from "./styles";

export const Navigation = ({ locale }) => {
  return (
    <Nav>
      <Link
        href="https://www.linkedin.com/in/salenjs/"
        target="_blank"
        rel="noreferrer"
        responsive
      >
        <FaLinkedin />
      </Link>
      <Link
        href="https://github.com/jsalen"
        target="_blank"
        rel="noreferrer"
        responsive
      >
        <FaGithub />
      </Link>
      <Button>{global[locale].sendEmail}</Button>
    </Nav>
  );
};
