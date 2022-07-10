function Header() {
  return (
    <>
      <nav className='grey darken-4'>
        <div className='nav-wrapper'>
          <a
            href='https://vitalii-kopiievskiy.github.io/react-movies'
            className='brand-logo'
          >
            React movies
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <a
                href='https://github.com/vitalii-kopiievskiy/react-movies'
                target='_blank'
              >
                Repo
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export { Header };
