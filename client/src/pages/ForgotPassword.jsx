import React from "react";
import Form from "../components/Form/form";
import Joi from "joi-browser";
// import { Navigate } from "react-router-dom";
// import { restPassword } from "../services/userService";
import Swal from "sweetalert2";
import PageHeader from "../components/PageHeader";
import emailjs from "emailjs-com";

const SERVICE_ID = "1";
const TEMPLATE_ID = "template_yaxiwe7";
const PUBLIC_KEY = "5i2Qc7VaP2mnFP00I";

const handleOnSubmit = (e) => {
  e.preventDefault();
  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
    (result) => {
      console.log(result.text);
      Swal.fire({
        icon: "success",
        title: "!הההודעה נשלחה בהצלחה",
        text: "במידה וזה המייל איתו נרשמת לאתר קיבל אליו הודעה עם הוראות לשחזור הסיסמה",
      });
    },
    (error) => {
      console.log(error.text);
      Swal.fire({
        icon: "error",
        title: "אופס! משהו השתבש, אנא נסו שוב במועד מאוחר יותר",
        text: "ניתן גם לפנות אלינו בטופס צור קשר",
        // text: error.text,
      });
    }
  );
  e.target.reset();
};

class ForgotPassword extends Form {
  state = {
    data: {
      email: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
  };

  render() {
    // const user = getCurrentUser();
    // if (user) return <Navigate replace to="/homepage" />;

    return (
      <div>
        <div className="container">
          <PageHeader title="שכחתי סיסמה" subTitle="" />
          <div className="center">
            <form
              onSubmit={handleOnSubmit}
              autoComplete="off"
              method="POST"
              className="fieldsLogin"
            >
              {this.renderInput("email", "מייל:", "email")}
              {this.renderButton("שחזר סיסמה")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
