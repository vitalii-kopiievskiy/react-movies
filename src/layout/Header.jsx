function Header() {
  return (
    <>
      <nav className='grey darken-4'>
        <div className='nav-wrapper'>
          <a href='header' className='brand-logo'>
            React movies
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <a href='sass.html'>Repo</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export { Header };
