import FormGroup from "./FormGroup";
import React from "react";

const Form = ({ FormData, onChange }) => {
  const { Socials } = FormData;
  const Desc = {
    FullName: [
      "text",
      "Full Name",
      "This is your full name. This has been generated from your first and last names."
    ],
    FirstName: [
      "text",
      "First Name",
      "Please enter your First Name or given name."
    ],
    LastName: ["text", "Last Name", "Please enter your Last Name or surname."],
    Thumbnail: [
      "text",
      "Your Photo",
      "Please upload your photo in a CDN (Ex. Imgur) and paste the Direct Image URL here."
    ],
    URL: [
      "text",
      "Website Link",
      "Please enter the URL of your website, where this page is going to be hosted."
    ],
    Description: ["text", "About You", "Write something nice about you."],
    KeyWords: [
      "text",
      "Keywords",
      "If someone wants to search for you, what keywords should they use."
    ],
    Address: [
      "text",
      "Address",
      "Type in your full Address."
    ],
    Phone: [
      "text",
      "Phone Number",
      "Please enter your phone number."
    ],
    Email: ["email", "Email Address", "Tell us your primary email address."],
    Skills: ["text", "Skills" , "Please enter few skills in which you are familiar with."],
    Experience: ["text", "Experience" , "Please enter your previous experience of working in an organization"],
    Education: ["object", "Highest level of education","Please enter your education details that you have done"],
    Interests: ["text","Hobbies","Enter your hobbies or things your like to do in your spare time."],
    Awards:["text","Achievements", "Please enter your achievments and awards you have received till now."]
  };
  return (
    <div className="Form">
      <h3>Basic Info</h3>
      {Object.keys(FormData).map(
        fd =>
          Object.keys(Desc).includes(fd) && (
            <FormGroup
              key={fd}
              Label={Desc[fd][1]}
              Type={Desc[fd][1]}
              Id={fd}
              Desc={Desc[fd][2]}
              Value={FormData[fd]}
              Placeholder={`Enter something for ${Desc[fd][1]}`}
              onChange={fd === "FullName" ? () => { } : onChange}
              readOnly={fd === "FullName" ? true : undefined} />
          )
      )}
      <h6>Social Media :</h6>
      <FormGroup
        Id="Facebook"
        Label="Facebook"
        Desc={"Please enter your Facebook profile URL."}
        Value={Socials.Facebook}
        onChange={onChange} />
      <FormGroup
        Id="WhatsApp"
        Label="WhatsApp"
        Desc={"Please enter your WhatsApp number."}
        Value={Socials.WhatsApp}
        onChange={onChange} />
      <FormGroup
        Id="Instagram"
        Label="Instagram"
        Desc={"Please enter your Instagram profile URL."}
        Value={Socials.Instagram}
        onChange={onChange} />
      <FormGroup
        Id="Twitter"
        Label="Twitter"
        Desc={"Please enter your Twitter profile URL."}
        Value={Socials.Twitter}
        onChange={onChange} />
      <FormGroup
        Id="LinkedIn"
        Label="LinkedIn"
        Desc={"Please enter your LinkedIn profile URL."}
        Value={Socials.LinkedIn}
        onChange={onChange} />
      <FormGroup
        Id="GitHub"
        Label="GitHub"
        Desc={"Please enter your GitHub profile URL."}
        Value={Socials.GitHub}
        onChange={onChange} />
    </div>
  );
};

export default Form;