import React, { Component } from "react";
import Header from "./Header";
import Code from "./Code";
import Form from "./Form";
import "../styles/App.css";

class App extends Component {
  state = {
    Dark: true ,
    FormData: {
      FirstName: "Aman",
      LastName: "Kumar Verma",
      Thumbnail: "https://i.imgur.com/3uEyHgdl.png" ,
      URL: "https://github.com/AmanKumarVerma11",
      Description:"just a student doing engineering",
      KeyWords: "Portfolio ,Developer ,Engineer",
      Address: "Delhi, India",
      Phone: "2864479233",
      Email: "akverma11aug2002@gmail.com",
      Socials: {
        Facebook: "xyz",
        WhatsApp: "487894632",
        Instagram: "https://www.instagram.com/amann._exe/",
        Twitter: "xyz",
        LinkedIn: "https://www.linkedin.com/in/aman-kr-verma11/",
        GitHub: "https://github.com/AmanKumarVerma11",
      },
      Experience: "Software developer at Google",
      Education: ["B.Tech", "Information Teachnology", "2020-2024", "CGPA: 9.0", "Inderprastha Engineering College"],
      Skills: ["C/C++ ", "HTML ", "React.js ", "CSS ", "JavaScript ", "Python ", "Java "],
      Interests: [
        "Football ",
        "Gaming ",
        "Coding "
      ],
      Awards: [
        "Developer of the year ",
        "Best coder ",
        "Best footballer ",
        "Best gamer "
      ]
    }
  };
  toggleHeader = () => {
    this.setState({
      Light: !this.state.Light
    });
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    if(name === 'Facebook' || name === 'WhatsApp' || name === 'Instagram' || name === 'Twitter' || name === 'LinkedIn' || name === 'GitHub') {

      this.setState(prevState => ({
        FormData: {
          ...prevState.FormData, 
          Socials: {
            ...prevState.FormData.Socials,
            [name]: value
          }
        }  
      }))
  
    } else {
      this.setState(prevState => ({
        FormData: {
          ...prevState.FormData,
          [name]: value
        }
      }))
    }
  };

  render() {
    return (
      <div className={"App " + (this.state.Light ? "dark" : "light")}>
        <Header dark className="Header">
          <span>Portfolio Generator</span>
          <button id="toggleDark"
            className="btn btn-sm btn-outline-primary rounded-circle"
            onClick={this.toggleHeader}
          >
            <i
              className={"fa fa-" + (this.state.Light ? "moon" : "sun") + "-o"}
            ></i>
          </button>
        </Header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-6">
              <Form
                FormData={{
                  FullName: `${this.state.FormData.FirstName} ${this.state.FormData.LastName}`,
                  ...this.state.FormData
                }}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-12 col-sm-6">
              <h3>Code</h3>
              <Code
                FullName={`${this.state.FormData.FirstName} ${this.state.FormData.LastName}`}
                {...this.state.FormData}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;