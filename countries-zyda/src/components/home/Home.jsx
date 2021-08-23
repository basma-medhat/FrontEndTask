import React, { useState, useEffect, useMemo } from 'react';
import './Home.scss';

import { useHistory } from 'react-router-dom';
import Card from 'components/common/card/Card';

const Home = () => {
  let history = useHistory();
  const [countriesData, setCountriesData] = useState(null);
  useEffect(() => {
    fetch(
      'https://restcountries.eu/rest/v2/all?fields=name;capital;flag;population;region'
    )
      .then((response) => response.json())
      .then((data) => {
        console.log('countries', data);
        setCountriesData(data);
      });
  }, []);

  const handleCardClick = (countryName) => {
    history.push({ pathname: '/Country/' + countryName });
  };

  const countriesCards = useMemo(
    () =>
      countriesData?.map((country, index) => {
        return (
          <Card
            key={index}
            picURL={country.flag}
            title={country.name}
            subTitle1={'Population'}
            subTitleValue1={country.population}
            subTitle2={'Region'}
            subTitleValue2={country.region}
            subTitle3={'Capital'}
            subTitleValue3={country.capital}
            handleCardClick={() => handleCardClick(country.name)}
          />
        );
      }),
    [countriesData]
  );

  return countriesData
    ? countriesData.length && (
        <div className="countries-cards-holder">{countriesCards}</div>
      )
    : 'loading';
};

export default Home;
