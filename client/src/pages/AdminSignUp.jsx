import React from "react";
import Form from "../components/Form/form";
import Joi from "joi-browser";
import PageHeader from "../components/PageHeader";
import { toast } from "react-toastify";
import { login, signup } from "../services/userService";
// import { Navigate } from "react-router-dom";
import "../css/SignUp and Admin.css";

class AdminSignUp extends Form {
  state = {
    data: {
      name: "",
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    name: Joi.string()
      .required()
      .min(2)
      .label("Name"),
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    password: Joi.string()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]+4)(?=.*[!@#$%^&*])(?=.{8,})/)
      .required()
      .min(8),
  };

  doSubmit = async () => {
    try {
      const user = { ...this.state.data };
      await signup(user);
      toast.success(`!נרשמת בהצלחה`);
      delete user.name;
      await login(user);
      window.location = "/";
    } catch (error) {
      if (error.response && error.response.status === 400)
        this.setState({
          errors: { email: "משתמש זה כבר נרשם לאתר" },
        });
    }
  };

  render() {
    // const user = getCurrentUser();
    // if (user) return <Navigate replace to="/" />;

    return (
      <div>
        <div className="container">
          <PageHeader title="הרשמה לאדמין" subTitle="" />
          <div className="center">
            <form
              onSubmit={this.handleSubmit}
              autoComplete="off"
              method="POST"
              className="field"
            >
              {this.renderInput("name", "שם:")}
              {this.renderInput("email", "אימייל:", "email")}
              {this.renderInput("password", "סיסמה:", "password")}
              {this.renderButton("הירשם")}
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

export default AdminSignUp;
