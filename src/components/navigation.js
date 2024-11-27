const Navigation = () => (
  <nav
    style={{
      background: `#333`,
      padding: `1rem`,
    }}
  >
    <ul
      style={{
        listStyle: `none`,
        display: `flex`,
        margin: 0,
        padding: 0,
      }}
    >
      <li style={{ margin: `0 1rem` }}>
        <Link to="/" style={{ color: `white` }}>
          Home
        </Link>
      </li>
      <li style={{ margin: `0 1rem` }}>
        <Link to="/about" style={{ color: `white` }}>
          About Vector Summit
        </Link>
      </li>
      <li style={{ margin: `0 1rem` }}>
        <Link to="/contact" style={{ color: `white` }}>
          Contact
        </Link>
      </li>
    </ul>
  </nav>
) 