import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Header from "./components/common/header";
import "./App.css";
import "./assets/fonts/fonts.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div>
            <Header />
            <MuiThemeProvider>
              <Routes />
            </MuiThemeProvider>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
