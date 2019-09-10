import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import  Select from 'react-dropdown-select'

class MainForm extends React.Component {

  constructor (props) {

    super(props)

    const API_URL = "https://url-shortener.api.ripoul.fr/api",
      PROVIDERS_URL = API_URL + "/providers"

    this.state = {
      //API_URL: "http://url-shortener.api.ripoul.fr/api/",
      API_URL: API_URL,
      PROVIDERS_URL: PROVIDERS_URL,
      resultVisibility: "hidden",
      shortenedUrl: "",
      providerUrl: "",
      url: ""
    }

    /**
         * Binding
         */
    this.getProvidersList = this.getProvidersList.bind(this)
    this.shortenUrl = this.shortenUrl.bind(this)
    this.copyUrl = this.copyUrl.bind(this)
    this.renderProvider = this.renderProvider.bind(this)
    this.providerChange = this.providerChange.bind(this)
    this.urlChange = this.urlChange.bind(this)
  }

  componentDidMount ()
  {
    this.getProvidersList()
  }

  getProvidersList () {

    fetch(this.state.PROVIDERS_URL, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(response => {

        this.setState({providersList: response})
      })
      .catch(function (error) {
        toast.error("Error during API call...")
      })

  }

  renderProvider (provider) {
    return(
      <option
        key={provider.name}
        value={provider.url}
      >
        {provider.name.toUpperCase()}
      </option>
    )
  }

  providerChange (item) {
    if(!item) {
      return
    }
    this.setState({
      providerUrl: item.url
    })
  }

  urlChange (event) {
    this.setState({url: event.target.value})
  }

  isFormValid () {

    if (!this.isUrl(this.state.url)) {
      return false
    }

    if (this.state.providerUrl === "") {
      return false
    }

    return true
  }

  isUrl (url) {
    let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i') // fragment locator
    return !!pattern.test(url)
  }

  shortenUrl () {

    if (!this.isFormValid()) {
      toast.warn("Your form is invalid!")
      return
    }

    let providerUrl = this.state.providerUrl
    providerUrl = providerUrl + "?url=" + this.state.url
    fetch(providerUrl, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(response => {

        if (response.url) {
          this.setState({
            resultVisibility: "",
            shortenedUrl: response.url
          })
        }
        else {
          toast.error("Error during API call...")
        }
      })
      .catch(function (error) {
        toast.error("Error during API call...")
      })

  }

  copyUrl () {
    let copyText = document.querySelector("#shortened-url")
    copyText.select()
    document.execCommand("copy")

    toast.success("Copied !")
  }

  render () {

    if (this.state.providersList) {

      const labelField = "name", valueField = "url"

      return (
        <section className="text-center">
          <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
                        Hey there! Welcome to our URL Shortener.
          </h2>
          <br/>
          <form className="mx-auto md:w-3/4">
            <label 
              className="block font-bold mb-2 text-xs uppercase"
            >
                            provider
            </label>
            <div className="relative">
              <Select
                options={this.state.providersList}
                onChange={items => this.providerChange(items[0])}
                labelField={labelField}
                valueField={valueField}
                noDataLabel="No match"
                className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full uppercase"
              />
            </div>

            <label
              className="block font-bold mb-2 text-xs uppercase"
              htmlFor="source-url"
            >
                            url to shorten
            </label>
        
            <input
              className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full"
              id="source-url"
              type="text"
              placeholder="My URL"
              onBlur={this.urlChange}
            />
        
            <label
              className={"block font-bold mb-2 text-xs uppercase " + this.state.resultVisibility}
              htmlFor="shortened-url"
            >
                            shortened url
            </label>
        
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-5/6">
                <input
                  className={"appearance-none block bg-gray-200 px-3 py-2 rounded-md text-gray-700 w-full " + this.state.resultVisibility}
                  id="shortened-url"
                  type="text"
                  placeholder="Shortened Url"
                  value={this.state.shortenedUrl}
                  readOnly
                />
              </div>
              <div  className="md:w-1/6">
                <button 
                  className={"border-b-4 border-gray-800 hover:border-gray-700 bg-gray-700 hover:bg-gray-600 font-bold px-4 py-2 rounded text-sm text-white " + this.state.resultVisibility}
                  onClick={this.copyUrl}
                  type="button"
                >
                  <FontAwesomeIcon icon={faCopy}/>
                </button>
              </div>
            </div>
        
            <button 
              className="border-b-4 border-gray-800 hover:border-gray-700 bg-gray-700 hover:bg-gray-600 font-bold px-4 py-2 rounded text-sm text-white"
              onClick={this.shortenUrl}
              type="button"
              readOnly
            >
                                Go !
            </button>
          </form>
          <ToastContainer />
        </section>
      )
    }

    return (
      <div className="loader">
        <svg>
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 5 -2" result="gooey" />
              <feComposite in="SourceGraphic" in2="gooey" operator="atop"/>
            </filter>
          </defs>
        </svg>
      </div>
            
    )
        
  }
}

export default MainForm
