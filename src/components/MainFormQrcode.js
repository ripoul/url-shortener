import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class MainForm extends React.Component {

  constructor (props) {

    super(props)

    const API_URL = "https://url-shortener.api.ripoul.fr/api/qrcode"

    this.state = {
      API_URL: API_URL,
      resultVisibility: "hidden",
      shortenedUrl: "",
      url: "",
      urlImg:""
    }

    /**
         * Binding
         */
    this.shortenUrl = this.shortenUrl.bind(this)
    this.copyUrl = this.copyUrl.bind(this)
    this.urlChange = this.urlChange.bind(this)
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

    this.setState({urlImg: this.state.API_URL + "?url=" + this.state.url})
    fetch(this.state.urlImg, {
      method: 'GET'
    })
      .then(response => {
        this.setState({
          resultVisibility: "",
          shortenedUrl: this.state.urlImg
        })
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
    return (
      <section className="text-center">
        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
                      Try to shorten to url with qrcode !
        </h2>
        <br/>
        <form className="mx-auto md:w-3/4">
          
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

          <div className={"flex justify-center" + this.state.resultVisibility}>
            <img 
              src={this.state.urlImg}
              className={"h-56" + this.state.resultVisibility}
            >
            </img>
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
}

export default MainForm
