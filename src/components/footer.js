const Footer = () => (
  <footer
    style={{
      marginTop: `2rem`,
      padding: `1rem`,
      background: `#1a1a1a`,
      color: `white`,
    }}
  >
    © {new Date().getFullYear()} Vector Summit. All rights reserved.
    {` `}
    <a href="https://vectorsummit.com" style={{ color: 'white' }}>
      vectorsummit.com
    </a>
  </footer>
) 