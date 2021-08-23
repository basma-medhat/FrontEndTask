import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import './Details.scss';

const Details = () => {
  const location = useLocation();
  const history = useHistory();
  const [countryDetails, setCountryDetails] = useState(null);

  useEffect(() => {
    if (location.pathname && location.pathname.split('/')[2]) {
      fetch(
        `https://restcountries.eu/rest/v2/name/${
          location.pathname.split('/')[2]
        }?fullText=true?fields=name;capital;flag;population;region`
      )
        .then((response) => response.json())
        .then((data) => {
          setCountryDetails(data[0]);
        });
    }
  }, [location]);

  const handleBackClick = () => {
    history.goBack();
  };

  return (
    <div className="details-container">
      <button onClick={handleBackClick} className="back-btn">
        Back
      </button>
      <div className="details-container-content">
        <img alt="" src={countryDetails?.flag} />
        <div className="details-container-info" style={{ width: '50%' }}>
          <h2>{countryDetails?.name}</h2>
          <div className="details-container-info-grid">
            <div>
              <span className="bold">Native Name: </span>
              <span>{countryDetails?.nativeName}</span>
            </div>
            <div>
              <span className="bold">Population: </span>
              <span>{countryDetails?.population}</span>
            </div>
            <div>
              <span className="bold">Region: </span>
              <span>{countryDetails?.region}</span>
            </div>
            <div>
              <span className="bold">Sub Region: </span>
              <span>{countryDetails?.nativeName}</span>
            </div>
            <div>
              <span className="bold">Capital: </span>
              <span>{countryDetails?.capital}</span>
            </div>
            <div>
              <span className="bold">Top Level Domain: </span>
              <span>{countryDetails?.nativeName}</span>
            </div>
            <div>
              <span className="bold">Currencies: </span>
              <span>
                {countryDetails?.currencies.map((c) => c.name).join(',')}
              </span>
            </div>
            <div>
              <span className="bold">Languages: </span>
              <span>
                {countryDetails?.languages.map((l) => l.name).join(',')}
              </span>
            </div>
          </div>
          <div style={{ marginTop: '20px' }}>
            <span className="bold">Border Countries :</span>
            {countryDetails?.borders.map((border) => (
              <span className="background-span">{border}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
