import React from "react";
import styled from "styled-components";
import imagenInicio from "../assets/illustration-intro.png";
import "../styles/Principal.css";
import image1 from "../assets/iconoComputador.svg";
import image3 from "../assets/iconoBienPersonas.svg";
import image2 from "../assets/iconoEscudo.svg";
import imagenSecundaria from "../assets/illustration-stay-productive.png";
import image4 from "../assets/iconoCarpetaImagenes.svg";
import sig from "../assets/iconoSigPequeño.svg";
import avatar1 from "../assets/profile-1.jpg"
import avatar2 from "../assets/profile-2.jpg"
import avatar3 from "../assets/profile-3.jpg"
import logo from "../assets/logo.svg";
import ubicacion from "../assets/icon-location.svg";
import phone from "../assets/icon-phone.svg";
import mail from "../assets/icon-email.svg";
import redes from "../assets/fbTwInst.png";

const BtnsAzul = styled.button`
  background-color: #41afd0;
  padding: 15px 100px;
  font-size: 16px;
  margin: 40px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
`;

const Principal = () => {
  return (
    <>
      <div className="imageBack">
        <div className="ContenedorPrincipal">
          <img src={imagenInicio} alt="" />
          <h2 className="title">
            All your files in one secure location, accessible anywhere.
          </h2>
          <p>
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <BtnsAzul>Get Started</BtnsAzul>
        </div>
      </div>
      <div className="backgrounBlack">
        <div className="cartServ">
          <div className="cartasServicios">
            <img alt="" src={image1} height="85px" />
            <h3 className="titleCard">Access your files, anywhere</h3>
            <p className="parrafoServicios">
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>
          <div className="cartasServicios1">
            <img alt="" src={image2} height="85px" />
            <h3 className="titleCard">Security you can trust</h3>
            <p className="parrafoServicios">
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
          <div className="cartasServicios">
            <img alt="" src={image3} height="85px" />
            <h3 className="titleCard">Real-time collaboration</h3>
            <p className="parrafoServicios">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>
          <div className="cartasServicios">
            <img alt="" src={image4} height="85px" />
            <h3 className="titleCard">Store any type of file</h3>
            <p className="parrafoServicios">
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </div>
        </div>
        <div className="section2">
          <img alt="" src={imagenSecundaria} />
          <div className="flex2">
            <h2 className="subTitle">Stay productive, wherever you are</h2>
            <p className="parrSect2">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            {/* <br /> */}
            <p className="parrSect2">
              Securely share files and folders with friends, family and
              collagues for live collaboration. No email attachments required.
            </p>
            {/* <br /> */}
            <p className="parrSect2 ">
              <u className="azul">
                See how Fylo works <img alt="" src={sig} />
              </u>
            </p>
          </div>
        </div>
        <div className="section3">
          <div className="comment">
            <p className="transp">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-olled
              collaboration machine.
            </p>
            <div className="avatarCargo">
              <img alt="" src={avatar1} width="30px" />
              <div className="transp">
                <p className="transp">Satish Patel</p>
                <small className="transp">Founder & CEO, Huddle</small>
              </div>
            </div>
          </div>
          <div className="comment">
            <p className="transp">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-olled
              collaboration machine.
            </p>
            <div className="avatarCargo">
              <img alt="" src={avatar2} width="30px" />
              <div className="transp">
                <p className="transp">Satish Patel</p>
                <small className="transp">Founder & CEO, Huddle</small>
              </div>
            </div>
          </div>
          <div className="comment">
            <p className="transp">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-olled
              collaboration machine.
            </p>
            <div className="avatarCargo">
              <img alt="" src={avatar3} width="30px" />
              <div className="transp">
                <p className="transp">Satish Patel</p>
                <small className="transp">Founder & CEO, Huddle</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fondBlack">
      <img className="logoFooter" alt="" src={logo} />
      <div className="backgBlack dispFlex">
        <div className="flex5">
          <img alt="" src={ubicacion} />
          <p className="transp pFooter">
            Lorem Ipsum sit amet, consectrtur adipdcing elit, sed do eirsmod
            tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="flex6">
          <div className="flex7">
            <img alt="" src={phone} />
            <p className="transp">+1-543-123-4567</p>
          </div>
          <div className="flex8">
            <img alt="" src={mail} />
            <p className="transp">example@fylo.com</p>
          </div>
        </div>
        <div className="flex9">
          <p className="transp">About Us</p>
          <p className="transp">Jobs</p>
          <p className="transp">Press</p>
          <p className="transp">Blog</p>
        </div>
        <div className="flex10">
          <p className="transp">Contact Us</p>
          <p className="transp">Terms</p>
          <p className="transp">Privacy</p>
        </div>
        <img className="redes" alt="" src={redes} />
      </div>
      </div>
      <div className="CartaRegistro">
        <h2 className="titleRegistro">Get Early access today</h2>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div>
          <input className="inputRegistro" placeholder="email@example.com" />
          <button className="btnAzul">Get Started For Free</button>
        </div>
      </div>
    </>
  );
};
export default Principal;
