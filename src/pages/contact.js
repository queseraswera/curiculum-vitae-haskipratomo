import React from 'react';
import './style.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Contact() {
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
            <h2>KONTAK</h2>
            <div className="col-lg">
              <p>
                Alamat : Jalan Merapi 2 Blok C11 No.6 RT 03 RW05, Jatiwarna,
                Pondok Melati, Kota Bekasi, Jawa Barat.
              </p>
            </div>
            <div className="col-lg">
              <p>Email : hasktmo26@gmail.com</p>
            </div>
            <div className="col-lg">
              <p>Nomor Handphone : 082138940887</p>
            </div>
            <div className="col-lg">
              <p>Instagram : @hasktmo</p>
            </div>
            <div className="col-lg">
              <p>Blog : https://tomononoke.student.ittelkom-pwt.ac.id/</p>
            </div>
          </div>
        </body>
      </div>
    </HelmetProvider>
  );
}
export default Contact;
