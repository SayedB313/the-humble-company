const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#1a1a1a`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Vector Summit
        </Link>
      </h1>
    </div>
  </header>
) 