import React, { useState } from 'react';
import './style.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Profile() {
  const [office, setOffice] = useState(0);
  const [program, setProgram] = useState(0);
  const [design, setDesign] = useState(0);
  const [website, setWebsite] = useState(0);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Haski Pratomo</title>
      </Helmet>
      <div className="home">
        <body>
          <div className="container">
            <div className="me">
              <h3>HASKI</h3>
              <h3>PRATOMO</h3>
            </div>
            <h2>DATA PRIBADI</h2>
            <div className="col-lg">
              <p>Tempat, Tanggal Lahir : Kulon Progo, 26 Januari 2000</p>
            </div>
            <div className="col-lg">
              <p>Jenis Kelamin : Laki - Laki</p>
            </div>
            <div className="col-lg">
              <p>Asal : Jakarta</p>
            </div>
            <div className="col-lg">
              <p>Agama : Islam</p>
            </div>
            <div className="col-lg">
              <p>Kewarganegaraan : Indonesia</p>
            </div>
            <h2>KEMAMPUAN</h2>
            <div className="col-lg">
              <p> - Microsoft Office</p>
              <p> Kemampuan saya {office}%</p>
            </div>
            <div className="col-lg">
              <p> - Programming</p>
              <p> Kemampuan saya {program}%</p>
            </div>
            <div className="col-lg">
              <p> - Design</p>
              <p> Kemampuan saya {design}%</p>
            </div>
            <div className="col-lg">
              <p> - Website</p>
              <p> Kemampuan saya {website}%</p>
            </div>
            <div className="col-lg">
              <button
                onClick={() => {
                  setOffice(60);
                  setProgram(50);
                  setDesign(70);
                  setWebsite(50);
                }}
              >
                Click Me!
              </button>
            </div>
          </div>
        </body>
      </div>
    </HelmetProvider>
  );
}
export default Profile;
