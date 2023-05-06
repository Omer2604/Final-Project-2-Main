import PageHeader from "../components/PageHeader";
import Search from "../components/SearchBar";
import { getPhoto } from "../services/photoService";
import React from "react";
import "../css/Gallery and galleryDetails.css";
import { Component } from "react";

class Gallery extends Component {
  state = {
    data: [],
    photos: [],
    isMount: false,
  };

  async componentDidMount() {
    try {
      const { data } = await getPhoto();
      this.setState({ data, isMount: true, photos: data });
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    return (
      <div className="container">
        <PageHeader title="גלריה" subTitle="והנה כמה מהדברים שלנו" />
        <div>
          <Search handleChange={this.handleChange} />
        </div>
        <div>
          <div className="hoverPics">
            <a href="donatsDetails">
              <img
                className="gallery"
                src="/assets/images/donats.png"
                alt="donats"
                title="סופגניות"
                description="סופגניות עבור חנוכה בלבד"
              />
            </a>
            <a href="alphaphoresDetails">
              <img
                className="gallery"
                src="/assets/images/alphaphores.png"
                alt="alphaphores"
              />
            </a>
            <a href="simbaDetails">
              <img
                className="gallery"
                src="/assets/images/simba.png"
                alt="simba"
              />
            </a>
            <a href="heartCakeDetails">
              <img
                className="gallery"
                src="/assets/images/heart cake.png"
                alt="heart cake"
              />
            </a>
            <a href="puffsDetails">
              <img
                className="gallery"
                src="/assets/images/puffs.png"
                alt="puffs"
              />
            </a>
            <a href="ofirCakeDetails">
              <img
                className="gallery"
                src="/assets/images/ofir cake.png"
                alt="ofir cake"
              />
            </a>
            <a href="macaroonsDetails">
              <img
                className="gallery"
                src="/assets/images/macaroon.png"
                alt="macaroons"
              />
            </a>
            <a href="whiteCakeDetails">
              <img
                className="gallery"
                src="/assets/images/white cake.png"
                alt="whiteCake"
              />
            </a>
            <a href="redCakeDetails">
              <img
                className="gallery"
                src="/assets/images/red cake.png"
                alt="redcake"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
