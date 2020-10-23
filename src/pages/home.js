import React, { useContext } from 'react';
import './style.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { UserContext } from '../utility/customHook';

function Home() {
  const { value, setValue } = useContext(UserContext);

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
            <h4>- {value} -</h4>
            <button onClick={() => setValue('Front End Developer')}>
              Tampilkan
            </button>
            <h2>MINAT BAKAT</h2>
            <div className="col-lg">
              <p> - Social Media</p>
            </div>
            <div className="col-lg">
              <p> - Website</p>
            </div>
            <div className="col-lg">
              <p> - Design Graphic</p>
            </div>
            <div className="col-lg">
              <p> - Leadership</p>
            </div>
            <h2>EDUKASI</h2>
            <div className="col-lg">
              <h3>2018</h3>
              <p> Sekolah Menengah Atas - SMA Angkasa 2 Halim P. K</p>
            </div>
            <div className="col-lg">
              <h3>2014</h3>
              <p> Sekolah Menengah Pertama - SMP 192 Jakarta</p>
            </div>
            <h2>PENGALAMAN ORGANISASI</h2>
            <div className="col-lg">
              <h3>2018</h3>
              <p> Staff Kementrian Luar Negeri - BEM IT TELKOM</p>
            </div>
            <div className="col-lg">
              <h3>2019</h3>
              <p> Staff Kementrian Dalam Negeri - BEM IT TELKOM</p>
            </div>
          </div>
        </body>
      </div>
    </HelmetProvider>
  );
}
export default Home;
