import React, { Component } from "react";
import PageHeader from "../components/PageHeader";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "../css/Contact.css";

const SERVICE_ID = "1";
const TEMPLATE_ID = "template_7e52n4c";
const PUBLIC_KEY = "5i2Qc7VaP2mnFP00I";

const handleOnSubmit = (e) => {
  e.preventDefault();
  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
    (result) => {
      console.log(result.text);
      Swal.fire({
        icon: "success",
        title: "!הההודעה נשלחה בהצלחה",
        text: "מענה יינתן בתוך כ-48 שעות",
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
class Contact extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <PageHeader title="צור קשר" subTitle="" />
        <Form method="POST" onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3 col-4" controlId="NameField">
            <Form.Label className="LabelName">:שם*</Form.Label>
            <Form.Control
              className="NameField"
              type="text"
              placeholder="הכנס שם"
              name="name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 col-4" controlId="EmailField">
            <Form.Label className="LabelMailContact">:מייל*</Form.Label>
            <Form.Control
              className="EmailFieldContact"
              type="email"
              placeholder="הכנס מייל"
              required
              name="email"
            />
          </Form.Group>
          <Form.Group className="mb-3 col-4" controlId="PhoneField">
            <Form.Label className="LabelPhone">:טלפון*</Form.Label>
            <Form.Control
              className="PhoneField"
              type="tel"
              placeholder="דוגמה: 050-000-0000"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              title="יש לכתוב לפי הפורמט המתאים, לדוגמה: 050-000-0000"
              required
              name="phone"
            />
          </Form.Group>
          <Form.Label className="SelectField">:בחר דרך ליצירת קשר*</Form.Label>
          <br />
          <select className="choice" name="contact">
            <option>מייל</option>
            <option>טלפון</option>
            <option>סמס</option>
            <option>ווטסאפ</option>
            <option>אחר</option>
          </select>
          <p className="remark">
            במידה ואתם מסמנים אחר יש לפרט בתוכן ההודעה את האמצעי ליצירת הקשר*
          </p>
          <Form.Label className="LabelSubject">
            :בחר את נושאי הפנייה*
          </Form.Label>
          <Form.Group className="mb-3 col-4" controlId="SubjectLabel">
            <Form.Control
              className="SubjectField"
              type="text"
              placeholder="תקלה\הזמנה\שאלה\הצעה\אחר"
              required
              name="subject"
            />
          </Form.Group>
          <Form.Label className="LabelRemarks">:תוכן הפנייה*</Form.Label>
          <textarea
            className="RemarksField"
            value={this.state.value}
            required
            name="remarks"
            id="user_msg"
            cols="25"
            rows="5"
            placeholder="הכנס כאן את פנייתך"
          />
          <br />
          <Button className="buttonSend" variant="primary" type="submit">
            שלח
          </Button>
          <p className="contactAnother">
            :ניתן ליצור איתנו קשר גם באחד מהדרכים הבאות
            <br />
            <div className="contactAnotherImg">
              <a
                href="https://www.instagram.com/edenn_cakes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="instagram"
                  src="/assets/images/instagram.jpg"
                  alt="אינסטגרם"
                />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=509243097"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="whatsapp"
                  src="/assets/images/whatsapp.png"
                  alt="וואטסאפ"
                />
              </a>
              <a href="tel:+972509243097">
                <img
                  className="phone"
                  src="/assets/images/phone.png"
                  alt="טלפון"
                />
              </a>
              <a href="mailto:eden199974@gmail.com">
                <img
                  className="email"
                  src="/assets/images/email.png"
                  alt="מייל"
                />
              </a>
            </div>
          </p>
        </Form>
      </React.Fragment>
    );
  }
}

export default Contact;
