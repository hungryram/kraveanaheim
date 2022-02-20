import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Header() {
  return (
    <>
      <div className="uk-visible@m uk-position-top">
        <div className="uk-sticky">
          <div className="uk-navbar-container uk-navbar-transparent">
            <div className="uk-container uk-container-expand">
              <nav className="uk-navbar" data-uk-navbar>
                <div className="uk-navbar-left">
                  <Link className="uk-navbar-item uk-logo" to="/">
                    <StaticImage
                      src="../images/krave-logo-full.png"
                      width="150"
                    />
                  </Link>
                </div>
                <div className="uk-navbar-right">
                  <ul className="uk-navbar-nav">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/menu">Menu</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>

                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>


      <div data-uk-sticky="animation: uk-animation-slide-top-medium; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-dark; cls-inactive:uk-navbar-transparent; top: 400">
                <nav className="uk-navbar uk-container uk-hidden@m uk-box-shadow-small">
                    <div className="uk-navbar-left">
                        <a href="/">
                            <StaticImage
                              src="../images/krave-logo-full.png"
                              width="120"
                            />
                        </a>
                    </div>
                    <div className="uk-navbar-right">
                        <a className="uk-navbar-toggle" data-uk-navbar-toggle-icon data-uk-toggle="target: #mobile-menu"></a>
                    </div>
                </nav>

                <div id="mobile-menu" data-uk-offcanvas>
                    <div className="uk-offcanvas-bar uk-flex uk-flex-column">
                        <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical uk-dark" data-uk-nav>
                            <li>

                            </li>
                            <li className="uk-nav-header"></li>
                            <li><Link to="/" className="uk-h3">Home</Link></li>
                            <li><Link to="/menu" className="uk-h3">Menu</Link></li>
                            <li><Link to="/about" className="uk-h3">About</Link></li>
                            <li><Link to="/contact" className="uk-h3">Contact</Link></li>
                        </ul>
                    </div>
                </div>

            </div>
    </>
  )
}