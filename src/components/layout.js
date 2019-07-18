import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import Header from "./header";

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className="flex flex-col font-sans min-h-screen text-gray-900">
          <Header siteTitle={data.site.siteMetadata.title} />

          <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
            {children}
          </main>

          <footer className="bg-red-300">
            <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">
              <p className="text-gray-800">
                Created with {" "}
                <FontAwesomeIcon icon={faHeart}/>
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

              <p>
                <a
                  href="https://github.com/ripoul/url-shortener"
                  className="font-bold no-underline text-gray-800"
                >
                  GitHub
                </a>
              </p>
            </nav>
          </footer>
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
