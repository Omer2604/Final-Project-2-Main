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
                name="סופגניות"
                description="סופגניות עבור חנוכה בלבד"
                id="6470efde79abf06ff44d3db0"
              />
            </a>
            <a href="alphaphoresDetails">
              <img
                className="gallery"
                src="/assets/images/alphaphores.png"
                alt="alphaphores"
                id="64707da379abf06ff44d3dac"
                name="עוגת אלפחורס"
                description="עוגת מוס אלפחורס עם ריבת חלב"
              />
            </a>
            <a href="simbaDetails">
              <img
                className="gallery"
                src="/assets/images/simba.png"
                alt="simba"
                id="6470efe379abf06ff44d3db1"
                name="עוגת סימבה"
                description="עוגת מוס ליום הולדת בצורת סימבה"
              />
            </a>
            <a href="heartCakeDetails">
              <img
                className="gallery"
                src="/assets/images/heartCake.png"
                alt="heart cake"
                id="6470efe679abf06ff44d3db2"
                name="עוגת לב"
                description="בצק שקדים פריך עם שוקולד"
              />
            </a>
            <a href="puffsDetails">
              <img
                className="gallery"
                src="/assets/images/puffs.png"
                alt="puffs"
                id="6470efe979abf06ff44d3db3"
                name="פחזניות"
                description="פחזניות"
              />
            </a>
            <a href="ofirCakeDetails">
              <img
                className="gallery"
                src="/assets/images/ofirCake.png"
                alt="ofir cake"
                id="6470efef79abf06ff44d3db4"
                name="עוגת מוס ליום הולדת"
                description="עוגת מוס ליום הולדת"
              />
            </a>
            <a href="macaroonsDetails">
              <img
                className="gallery"
                src="/assets/images/macaroon.png"
                alt="macaroons"
                id="6470eff179abf06ff44d3db5"
                name="מקרונים"
                description="מקרונים בטעמי פסיפלורה, פטל ופירות יער"
              />
            </a>
            <a href="whiteCakeDetails">
              <img
                className="gallery"
                src="/assets/images/whiteCake.png"
                alt="whiteCake"
                id="6470eff579abf06ff44d3db6"
                name="עוגת מוס עם שוקולד לבן"
                description="עוגת מוס שוקולד לבן ושמנת בעיטורי נשיקות וקקאו"
              />
            </a>
            <a href="redCakeDetails">
              <img
                className="gallery"
                src="/assets/images/redCake.png"
                alt="redcake"
                id="6470eff879abf06ff44d3db7"
                name="עוגת גבינה"
                description="עוגת גבינה וג'לי תותים עם פירות יער מעל"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
