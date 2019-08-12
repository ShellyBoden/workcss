import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Spin from "../Components/Spinner";
import AOS from "aos";
import {
  startPageImg1,
  startPageImg2,
  startPageImg3,
  startPageImg4,
  startPageImg5,
  startPageImg6,
  startPageImg7,
  startPageLogo
} from "../imgs";

export default class Choice extends Component {
  state = {
    imageRequest: true
  };
  setChoiceDefaultId = choiceId => {
    localStorage.setItem("choiceId", choiceId);
  };
  setExhibitionDefaultId = () => {
    localStorage.setItem("exhibitionId", 1);
  };
  componentDidMount() {
    const imgage = new Image();
    imgage.src = startPageImg1;
    imgage.onload = () => {
      this.setState({ imageRequest: false });
    };

    AOS.init({
      duration: 1000
    });
  }
  render() {
    const { classificationItems } = this.props;
    const { imageRequest } = this.state;
    const StyledHomeDiv = styled.div`
      position: absolute;
      z-index: 10;
      // width: 80%;
      // left: 10%;
      width:100vw;
      height:100vh;
      background-color:rgba(0,0,0,0.5);
    `;

    const StyledContentDiv = styled.div`
      // height: 500px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: white;
      text-shadow: 0.1em 0.1em #333;
      text-decoration: none;
    `;
    const StyledNavbarDiv = styled.div`
      width: 80%;
      margin-left:10%;
      border-bottom: 2px solid #fff;
      height: 50px;
      display: flex;
      margin-top: 5%;
      justify-content: space-between;
      font-size: 23px;
    `;
    const StyledCarouselDiv = styled.div`
      background-attachment: fixed;
      background-size: cover;
      width: 100%;
      height: 100vh;
      align-items: center;
      flex-direction: column;
    `;

    const linkStyle = {
      textDecorationLine: "none",
      color: "white"
    };

    const HomeNavbar = () => {
      return (
        <Fragment>
          <StyledNavbarDiv>
            {classificationItems.map((item, index) => {
              return (
                <Link
                  key={item}
                  to="/Choice"
                  style={linkStyle}
                  onClick={id => this.setChoiceDefaultId(index + 1)}
                >
                  <span>{item}</span>
                </Link>
              );
            })}
          </StyledNavbarDiv>
        </Fragment>
      );
    };
    const HomeContent = () => {
      return (
        <StyledContentDiv>
          <div style={{ marginTop: "10%", height: 150 }}>
            <img src={startPageLogo} alt="" />
          </div>
          <h1 style={{ height: 60 }} className="text-white is-size-1">
            萬寶龍空間設計
          </h1>
          <p className="m-1">SING WAN BAI LONG INTERIOR DESIGH</p>

          <div className="mt-5" style={{ height: 60, width: 200 }}>
            <Link
              to="/Exhibition"
              style={linkStyle}
              onClick={this.setExhibitionDefaultId}
            >
              <button
                style={{ width: 200 }}
                type="button"
                className="mt-3 btn btn-outline-light btn-lg "
              >
                View Gallery
              </button>
            </Link>
          </div>
        </StyledContentDiv>
      );
    };

    const HomeCarousel = () => {
      return (
        <div
          id="carouselExampleControls"
          className="carousel slide carousel-fade "
          data-ride="carousel"
        >
          {/* <figure className="image is-5by3  item-figure" alt=""></figure> */}
          <div className="carousel-inner row m-0">
            <StyledCarouselDiv
              className=" carousel-item active d-flex "
              style={{ backgroundImage: `url(${startPageImg1})` }}
            />
            <StyledCarouselDiv
              className="carousel-item   d-flex "
              style={{ backgroundImage: `url(${startPageImg2})` }}
            />
            <StyledCarouselDiv
              className=" carousel-item  d-flex "
              style={{ backgroundImage: `url(${startPageImg3})` }}
            />
            <StyledCarouselDiv
              className=" carousel-item  d-flex "
              style={{ backgroundImage: `url(${startPageImg4})` }}
            />
            <StyledCarouselDiv
              className=" carousel-item  d-flex "
              style={{ backgroundImage: `url(${startPageImg5})` }}
            />
            <StyledCarouselDiv
              className=" carousel-item   d-flex "
              style={{ backgroundImage: `url(${startPageImg6})` }}
            />
            <StyledCarouselDiv
              className=" carousel-item  d-flex "
              style={{ backgroundImage: `url(${startPageImg7})` }}
            />
          </div>
        </div>
      );
    };
    return (
      <Fragment>
        {imageRequest ? (
          <Spin />
        ) : (
          <Fragment>
            <StyledHomeDiv>
              {/* // */}
              <HomeNavbar buttonStyle="btn-outline-light" />
              <HomeContent />
              {/* // */}
            </StyledHomeDiv>

            <HomeCarousel />
          </Fragment>
        )}
      </Fragment>
    );
  }
}
