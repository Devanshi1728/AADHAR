import { useEffect, useState } from "react";
import "../App.css";

const AadharCard = ({ data }) => {
  const [userData, setData] = useState(data);
  useEffect(() => {
    setData(data);
  }, []);

  return (
    <div className="mainWrapper">
      <h2>Aadhar Card</h2>
      <div className="aadharCard">
        <div className="header">
          <div className="headerLeftLogo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
              alt="aadhar"
              height="50px"
            />
          </div>
          <div className="headerLetter">
            <h4 className="orangeLine">भारत सरकार</h4>
            <h4 className="greenLine">GOVERMENT OF INDIA</h4>
          </div>
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/1200px-Aadhaar_Logo.svg.png"
              alt="logo"
              height="50px"
            />
          </div>
        </div>

        <div className="main">
          <div className="profileLeft">
            <img
              src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-business-user-profile-vector-png-image_1541960.jpg"
              alt="profile"
              height="100px"
            />
            <div className="mainContent">
              <h5 className="content">{`${userData?.firstName} ${userData?.lastName}`}</h5>
              <h5 className="content">{userData?.phoneNumber}</h5>
            </div>
          </div>

          <div className="rightQR">
            <img
              src="https://static.vecteezy.com/system/resources/previews/002/557/391/original/qr-code-for-scanning-free-vector.jpg"
              alt="qr"
              height="100px"
            />
          </div>
        </div>
        <h3 className="aadharNumber">
          {" "}
          {userData?.aadharNumber.toString().replace(/\d{4}(?=.)/g, "$& ")}
        </h3>
        <hr />
        <div className="footer">
          <h4>
            मेरा <span className="myAadhar">आधार</span>, मेरी पहचान
          </h4>
        </div>
      </div>
    </div>
  );
};

export default AadharCard;
