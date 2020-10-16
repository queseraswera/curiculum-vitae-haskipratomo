import React from 'react';
import './style.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Profile() {
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
            </div>
            <div className="col-lg">
              <p> - Programming</p>
            </div>
            <div className="col-lg">
              <p> - Design</p>
            </div>
            <div className="col-lg">
              <p> - Website</p>
            </div>
          </div>
        </body>
      </div>
    </HelmetProvider>
  );
}
export default Profile;