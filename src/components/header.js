import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle, menuLinks, location }) => {
  const [menuOpen, toggleMenu] = useState(false)
  const buildLink = link => {
    const commonClass =
      "lg:text-center lg:border block lg:rounded lg:inline-block lg:mt-0 mr-4 py-2 px-4"
    return !link.external ? (
      <Link
        key={link.name}
        to={link.link}
        className={
          link.link == location
            ? `lg:border lg:border-white lg:hover:bg-blue-700 lg:text-white
               text-teal-800 ${ commonClass }`
            : `lg:border-blue-500 lg:bg-white lg:hover:bg-blue-700 lg:text-black
               hover:text-white text-teal-200 ${ commonClass }`
        }
      >
        {link.name}
      </Link>
    ) : (
      <a
        key={link.name}
        rel="noopener noreferrer"
        target="_blank"
        href={link.link}
        className={`lg:border-blue-500 lg:bg-white lg:hover:bg-blue-700
           lg:text-black hover:text-white text-teal-200 ${ commonClass }`}
      >
        {link.name}
      </a>
    )
  }

  return (
    <header>
      <nav className="bg-teal-600 p-5 flex lg:justify-center items-center flex-row-reverse justify-between">
        <div
          className="flex items-center justify-between flex-wrap w-full"
          style={{ maxWidth: 960, margin: "0 auto" }}
        >
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">
              {siteTitle}
            </span>
          </div>
          <div className="block lg:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
              onClick={() => toggleMenu(!menuOpen)}
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className={`w-full lg:block lg:flex lg:items-center lg:w-auto ${ menuOpen ? '' : 'hidden' }`}>
            <div className="text-sm">{menuLinks.map(buildLink)}</div>
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuLinks: PropTypes.array,
  location: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  menuLinks: [],
  location: "",
}

export default Header
