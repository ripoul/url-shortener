import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle, menuLinks, location }) => (
  <header
    className={"bg-teal-600"}
  >
    <div>
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          display: "flex",
          justifyItems: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0, flex: 1 }}>
          <Link
            className="flex items-center no-underline text-white"
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            <span className="font-bold text-xl tracking-tight">{siteTitle}</span>
          </Link>
        </h1>
        <div>
          <nav>
            <ul style={{ display: "flex", flex: 1 }}>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  {
                    !link.external ?
                      <Link
                        style={{ color: link.link == location ? "white" : "black" }}
                        to={link.link}
                        className={link.link == location ?
                          "text-center block border border-white rounded py-2 px-4 hover:bg-blue-700 text-white" :
                          "text-center block border border-blue-500 rounded bg-white py-2 px-4 hover:bg-blue-700 hover:text-white"}>
                        {link.name}
                      </Link> : 
                      <a 
                        rel="noopener noreferrer" 
                        target="_blank" 
                        href={link.link}
                        className="text-center block border border-blue-500 rounded bg-white py-2 px-4 hover:bg-blue-700 hover:text-white"
                      >{link.name}</a>
                  }

                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuLinks: PropTypes.array,
  location: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
  menuLinks: [],
  location: ""
}

export default Header