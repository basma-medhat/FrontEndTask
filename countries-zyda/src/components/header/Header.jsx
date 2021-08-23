import './Header.scss';

const Header = () => {
  return (
    <header className={'header'}>
      <h2 className={'header-title'}>Where in the world?</h2>
      <div className={'header-theme-switch'}>
        <span>Dark Mode</span>
      </div>
    </header>
  );
};

export default Header;
