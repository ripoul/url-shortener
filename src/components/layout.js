import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Location } from '@reach/router'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  EmailIcon
} from 'react-share'
import Header from "./header"

function Layout ({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              menuLinks {
                name
                link
                external
              }
            }
          }
        }
      `}
      render={data => (
        <div className="flex flex-col font-sans min-h-screen text-gray-900">
          <Location>
            {({ location }) => {
              return (<Header 
                menuLinks={data.site.siteMetadata.menuLinks} 
                siteTitle={data.site.siteMetadata.title} 
                location={location.pathname}
              />)
            }}
          </Location>

          <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-6 w-full">
            {children}
          </main>

          <footer className="bg-red-300">
            <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-6 text-sm">
              <p className="text-gray-800">
                Created with {" "}
                <FontAwesomeIcon className="w-4 inline-flex" icon={faHeart}/>
                {" "} 
                by
                {" "} 
                <a
                  href="https://github.com/ripoul"
                  className="font-bold no-underline text-gray-800"
                >
                  Jules LE BRIS
                </a>
                {" "}and{" "}
                <a
                  href="https://github.com/VictorFavreau"
                  className="font-bold no-underline text-gray-800"
                >
                  Victor FAVREAU
                </a>
              </p>
              <p className="inline-flex">
                <FacebookShareButton url="https://url-shortener.ripoul.fr" className="mx-1">
                  <FacebookIcon
                    size={32}
                    round={true} />
                </FacebookShareButton>
                <TwitterShareButton url="https://url-shortener.ripoul.fr" className="mx-1">
                  <TwitterIcon
                    size={32}
                    round={true} />
                </TwitterShareButton>
                <LinkedinShareButton url="https://url-shortener.ripoul.fr" className="mx-1">
                  <LinkedinIcon
                    size={32}
                    round={true} />
                </LinkedinShareButton>
                <WhatsappShareButton url="https://url-shortener.ripoul.fr" className="mx-1">
                  <WhatsappIcon
                    size={32}
                    round={true} />
                </WhatsappShareButton>
                <EmailShareButton url="https://url-shortener.ripoul.fr" className="mx-1">
                  <EmailIcon
                    size={32}
                    round={true} />
                </EmailShareButton>
              </p>
            </nav>
          </footer>
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
