import React from "react";
import PageHeader from "../components/PageHeader";
import Form from "../components/Form/form";
import "../css/NewPassword.css";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { newPassword } from "../services/userService";
// import { Navigate } from "react-router-dom";
// import { getCurrentUser } from "../services/userService";

class NewPassword extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    password: Joi.string()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{4,})(?=.*[!@#$%^&*])(?=.{8,})/)
      .required()
      .min(8),

    email: Joi.string()
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "org"] } }),
  };

  doSubmit = async () => {
    try {
      const { email, password } = this.state.data;
      if (email) {
        await newPassword(email, password);
        window.location = "/";
        toast.success(`הסיסמה שונתה בהצלחה`);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log("err");
        this.setState({
          errors: { password: "" },
        });
      }
    }
  };

  render() {
    // const user = getCurrentUser();
    // if (user) return <Navigate replace to="/" />;

    return (
      <div>
        <div className="container">
          <PageHeader title="סיסמה חדשה" subTitle="" />
          <div className="center">
            <form
              onSubmit={this.handleSubmit}
              autoComplete="off"
              method="PUT"
              className="field"
            >
              {this.renderInput("email", "אימייל:", "email")}
              {this.renderInput("password", "סיסמה:", "password")}
              {this.renderButton("שנה סיסמה")}
            </form>
            <div className="orders">
              <ul>
                <p className="line1">הסיסמה חייבת להכיל לפחות:</p>
                <li> ארבעה מספרים</li>
                <li>אות גדולה באנגלית</li>
                <li>אות קטנה באנגלית </li>
                <li> (!@#$%^&*) סימן מיוחד אחד לפחות </li>
                <li>סך הכל 8 תווים לפחות </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPassword;
