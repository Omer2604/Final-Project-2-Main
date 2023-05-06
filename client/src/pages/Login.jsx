import React from "react";
import Form from "../components/Form/form";
import Joi from "joi-browser";
import PageHeader from "../components/PageHeader";
import { toast } from "react-toastify";
import { login } from "../services/userService";
import "../css/Login.css";

class Login extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  doSubmit = async () => {
    try {
      const user = { ...this.state.data };
      await login(user);
      toast.success("!התחברת בהצלחה");
      window.location = "/";
    } catch (error) {
      if (error.response && error.response.status === 400)
        this.setState({
          errors: { email: "האימייל או הסיסמה שהקלדת שגויים, אנא נסה שנית" },
        });
    }
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/)
      .required()
      .min(8),
  };

  render() {
    // const user = getCurrentUser();
    // if (user) return <Navigate replace to="/" />;

    return (
      <div>
        <div className="container">
          <PageHeader title="התחברות" subTitle="" />
          <div className="center">
            <form
              onSubmit={this.handleSubmit}
              autoComplete="off"
              method="POST"
              className="fieldsLogin"
            >
              {this.renderInput("email", "מייל:", "email")}
              {this.renderInput("password", "סיסמה:", "password")}
              {this.renderButton("התחבר")}
              <p className="forgotpassword">
                במידה ושכחתם את הסיסמה יש ללחוץ{" "}
                <a href="/forgotpassword">כאן</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
