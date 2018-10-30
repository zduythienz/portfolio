import React, { Component } from "react";
import HeaderLogo from "../../assets/images/header-portfo.png";
import { Link, withRouter } from "react-router-dom";

class Header extends Component {
  state = {
    logoStyle: "logo"
  };

  handleScroll = event => {
    if (window.pageYOffset === 0) {
      let navStyle = "";
      this.setState({
        navStyle,
        linkStyle: "text-white",
        scaleScrollLi: "",
        logoStyle: "logo"
      });
    } else {
      let navStyle = "black";
      this.setState({
        navStyle,
        linkStyle: "text-black",
        scaleScrollLi: "padding-header-scroll",
        logoStyle: "logo margin-header-scroll"
      });
    }
  };
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
    this.unlisten();
  };
  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      console.log("on route change");
    });
  }
  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
    this.unlisten();
  };

  render() {
    return (
      <header>
        <nav className={this.state.navStyle}>
          <div className={this.state.logoStyle}>
            <img src={HeaderLogo} alt="logo" style={{ width: "100px" }} />
          </div>
          <ul className={this.state.ulStyle}>
            <li className={this.state.scaleScrollLi}>
              <Link to="/new-landing-page" className={this.state.linkStyle}>
                Resume
              </Link>
            </li>
            <li className={this.state.scaleScrollLi}>
              <Link to="/projects" className={this.state.linkStyle}>
                Projects
              </Link>
            </li>
            <li className={this.state.scaleScrollLi}>
              <Link to="/new-landing-page" className={this.state.linkStyle}>
                About Me
              </Link>
            </li>
            <li className={this.state.scaleScrollLi}>
              <Link to="/new-landing-page" className={this.state.linkStyle}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
