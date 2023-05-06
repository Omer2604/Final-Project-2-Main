import React from "react";
import Nav from "react-bootstrap/Nav";
import "../../../css/NavBar.css";

const NavBar = ({ user, onLogout }) => {
  return (
    <Nav className="Nav">
      <Nav.Item>
        <Nav.Link className="HomePage" href="/homepage">
          דף הבית
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="contact" href="/contact">
          צור קשר
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="gallery" href="/gallery">
          גלריה
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="FAQ" href="/FAQ">
          שו"ת
        </Nav.Link>
      </Nav.Item>
      {!user && (
        <>
          <Nav.Item>
            <Nav.Link className="login" href="/login">
              התחבר
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="SignUp" href="/signup">
              הירשם
            </Nav.Link>
          </Nav.Item>
        </>
      )}
      {user && (
        <Nav.Item className="logout-link">
          <button className="logout-button" onClick={onLogout}>
            התנתק
          </button>
        </Nav.Item>
      )}
    </Nav>
  );
};

export default NavBar;
