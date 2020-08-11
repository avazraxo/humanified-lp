import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div>
      
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>

      <nav role="navigation">
        <ul>
          <li>
            <AnchorLink to="/#mission" title="Mission">
              Mission
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/#meat-the-team" title="Meat the team">
              Meat the team
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/#what-we-do" title="What we do">
              What we do
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/#contact" title="Contact">
              Contact
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/#download" title="Download">
              Download
            </AnchorLink>
          </li>
          
          {/* <li><a onClick={() => scrollTo('#meat-the-team')}>Meat the team</a></li>
          <li><a onClick={() => scrollTo('#what-we-do')}>What we do</a></li>
          <li><a onClick={() => scrollTo('#contact')}>Contact</a></li>
          <li><a class="primary__btn" onClick={() => scrollTo('#download')}>Download</a></li> */}
        </ul>
      </nav>
      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
