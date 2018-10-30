import React, { Component } from "react";
import Section1 from "../common/landingPage-section/section1";
import Section2 from "../common/landingPage-section/section2";
import Section3 from "../common/landingPage-section/section3";
import SectionBottom from "../common/landingPage-section/bottom";
import Header from "../common/header";
class LandingPage extends Component {
  render() {
    return (
      <div>
        <section className="sec1">
          <div className="container-div-sec1">
            <div className="container-title-sect1">
              <div className="title-sec1 css-typing">
                <h1 className="text-big-size text-typing">
                  Welcome to my world
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="main main-raised">
          <Section1 />
          <Section2 />
          <Section3 />
          <SectionBottom />
        </section>
      </div>
    );
  }
}

export default LandingPage;
