import React from "react";
import { Container } from "react-bootstrap";
import { BiHeart, BiBookmarkAltMinus } from "react-icons/bi";
import Reviews from "./Reviews";
import UpcommigShows from "./UpcommigShows";

const Home = () => {
  return (
    <>
      <div className="main-container">
        <svg
          width="1439"
          height="756"
          viewBox="0 0 1439 756"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="svg-image"
          style={{ width: "100%" }}
        >
          <rect y="-2" width="1440" height="758" fill="url(#pattern0)" />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_1_354"
                transform="translate(-0.0263889) scale(0.000822483 0.0015625)"
              />
            </pattern>
            <image
              id="image0_1_354"
              width="1280"
              height="640"
            />
          </defs>
        </svg>

        <h1 className="cari-cari">Cari Cari</h1>
        <p className="para">
          Live from their sofa to yours. Get closer to your favorite artists,
          and never miss out.
        </p>
        <Container className="circle-boxes">
          <div className="circle">
            <p className="element">
              <BiHeart fontSize="30px" />
              <br />0<br /> Label
            </p>
          </div>
          <div className="circle">
            <p className="element">
              <BiBookmarkAltMinus fontSize="30px" />
              <br />0<br /> Label
            </p>
          </div>
          <div className="circle">
            <p className="element">
              <BiBookmarkAltMinus fontSize="30px" />
              <br />0<br /> Label
            </p>
          </div>
          <div className="circle">
            <p className="element">
              <BiBookmarkAltMinus fontSize="30px" />
              <br />0<br /> Label
            </p>
          </div>
        </Container>
      </div>
      <UpcommigShows />
      <Reviews />
    </>
  );
};

export default Home;