import React from "react";
import PageHeader from "../components/PageHeader";
import Form from "../components/Form/form";
import "../css/NewPassword.css";
import Joi from "joi-browser";
import { toast } from "react-toastify";

class NewPassword extends Form {
  state = {
    data: {
      password: "",
    },
    errors: {},
  };

  schema = {
    password: Joi.string()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]+4)(?=.*[!@#$%^&*])(?=.{8,})/)
      .required()
      .min(8),
  };

  doSubmit = async () => {
    try {
      const { password } = this.state.data;
      let email = window.location.search.split("email=")[1];
      if (window.location.search && email) {
        await NewPassword(email, password);
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
              method="POST"
              className="field"
            >
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
