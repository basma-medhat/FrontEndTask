/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';

import './Header.scss';

import { THEMES } from 'constants/enums';
import nightMode from 'styles/images/night-mode.png';
import lightMode from 'styles/images/light-mode.png';

const Header = () => {
  const [theme, setTheme] = useState(THEMES.LIGHT);
  const body = document.body;

  useEffect(() => {
    body.classList.add(theme);
  }, []);

  const onToggleTheme = () => {
    switch (theme) {
      case THEMES.LIGHT:
        body.classList.replace(THEMES.LIGHT, THEMES.DARK);
        localStorage.setItem('theme', THEMES.DARK);
        setTheme(THEMES.DARK);
        break;

      default:
        body.classList.replace(THEMES.DARK, THEMES.LIGHT);
        localStorage.setItem('theme', THEMES.LIGHT);
        setTheme(THEMES.LIGHT);
        break;
    }
  };

  return (
    <header className={'header'}>
      <h2 className={'header-title'} style={{ fontWeight: 'bold' }}>
        Where in the world?
      </h2>
      <div
        className={'header-theme-switch'}
        onClick={onToggleTheme}
        onKeyDown={onToggleTheme}
      >
        <img
          src={theme === THEMES.LIGHT ? nightMode : lightMode}
          alt=""
          className={'header-theme-logo'}
        />
        <span style={{ fontWeight: 'bold' }}>{`${
          theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
        } Mode`}</span>
      </div>
    </header>
  );
};

export default Header;
