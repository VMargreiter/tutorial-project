import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../templates/styles.scss'

const Header = ({ siteTitle }) => (
  <header class="navbar-container">
    <div class="navbar-logo">
      <img></img>
    </div>
    <div class="navbar-options-container">
      <div class="navbar-option">
        <h1>
          <Link class="navbar-item" to="/shop">
            Shop
          </Link>
        </h1>
      </div>
      <div class="navbar-option">
        <h1>
          <Link class="navbar-item" to="/shop">
            Stream
          </Link>
        </h1>
      </div>
      <div class="navbar-option">
        <h1>
          <Link class="navbar-item" to="/shop">
            Riders
          </Link>
        </h1>
      </div>
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
