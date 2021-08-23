import React, { useState, useEffect, useMemo } from 'react';
import './Home.scss';

import { useHistory } from 'react-router-dom';
import Card from 'components/common/card/Card';

import { Input, Dropdown, Button, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const Home = () => {
  let history = useHistory();
  const [countriesData, setCountriesData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [noDataFound, setNoDataFound] = useState(false);

  const { Search } = Input;

  const fetchAllCountries = () => {
    fetch(
      'https://restcountries.eu/rest/v2/all?fields=name;capital;flag;population;region'
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setNoDataFound(false);
        setCountriesData(data);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    fetchAllCountries();
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

  const fetchCountriesByName = (name) => {
    fetch(
      `https://restcountries.eu/rest/v2/name/${name}?fields=name;capital;flag;population;region`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data && !data.status) {
          setIsLoading(false);
          setNoDataFound(false);
          setCountriesData(data);
        } else if (data.status === 404) {
          setNoDataFound(true);
          setCountriesData(null);
        }
      });
  };

  const onSearch = (value) => {
    setIsLoading(true);
    if (value) fetchCountriesByName(value);
    else fetchAllCountries();
  };

  const fetchCountriesByRegion = (region) => {
    fetch(
      `https://restcountries.eu/rest/v2/region/${region}?fields=name;capital;flag;population;region`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data && !data.status) {
          setIsLoading(false);
          setNoDataFound(false);
          setCountriesData(data);
        } else if (data.status === 404) {
          setNoDataFound(true);
          setCountriesData(null);
        }
      });
  };

  const handleMenuClick = (e) => {
    if (e.key !== 'all') fetchCountriesByRegion(e.key);
    else fetchAllCountries();
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="all">All</Menu.Item>
      <Menu.Item key="africa">Africa</Menu.Item>
      <Menu.Item key="america">America</Menu.Item>
      <Menu.Item key="asia">Asia</Menu.Item>
      <Menu.Item key="europe">Europe</Menu.Item>
      <Menu.Item key="oceania">Oceania</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <div className="countries-toolbar">
        <Search
          placeholder="Search for a country"
          onSearch={onSearch}
          style={{ width: 300 }}
        />
        <Dropdown overlay={menu}>
          <Button>
            Filter by Region <DownOutlined />
          </Button>
        </Dropdown>
      </div>
      {countriesData && !isLoading && !noDataFound
        ? countriesData.length && (
            <div className="countries-cards-holder">{countriesCards}</div>
          )
        : isLoading && !noDataFound
        ? 'Loading Countries'
        : noDataFound
        ? 'No Results'
        : ''}
    </div>
  );
};

export default Home;
