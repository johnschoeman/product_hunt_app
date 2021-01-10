import React, { useState } from "react"

const NewProductForm = ({ history, createProduct }) => {
  const [linkUrl, setLinkUrl] = useState("")
  const [name, setName] = useState("")
  const [tagline, setTagline] = useState("")
  const [thumbnailUrl, setThumbnailUrl] = useState("")
  const [galleryUrl, setGalleryUrl] = useState("")

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const product = {
      link_url: linkUrl,
      name,
      tagline,
      topics,
      thumbnail_url: thumbnailUrl,
      gallery_url: galleryUrl,
      makers,
    }
    createProduct(product).then(history.push("/"))
  }

  const handleOnUpdateLinkUrl = (e) => {
    setLinkUrl(e.target.value)
  }

  const handleOnUpdateName = (e) => {
    setName(e.target.value)
  }

  const handleOnUpdateTagline = (e) => {
    setTagline(e.target.value)
  }

  const handleOnUpdateThumbnailUrl = (e) => {
    setThumbnailUrl(e.target.value)
  }

  const handleOnUpdateGalleryUrl = (e) => {
    setGalleryUrl(e.target.value)
  }

  return (
    <div className="np-form-container">
      <h1 className="np-form-header">Post something new</h1>
      <form className="np-form" onSubmit={handleOnSubmit}>
        <div className="np-form-input-container">
          <div className="np-form-input">
            <label>Link</label>
            <input
              type="text"
              onChange={handleOnUpdateLinkUrl}
              value={linkUrl}
            />
          </div>

          <div className="np-form-input">
            <label>Name</label>
            <input type="text" onChange={handleOnUpdateName} value={name} />
          </div>

          <div className="np-form-input">
            <label>Tagline</label>
            <input
              type="text"
              onChange={handleOnUpdateTagline}
              value={tagline}
            />
          </div>

          <div className="np-form-input">
            <label>Thumbnail</label>
            <input
              type="text"
              onChange={handleOnUpdateThumbnailUrl}
              value={thumbnailUrl}
            />
          </div>

          <div className="np-form-input">
            <label>Gallery</label>
            <input
              type="text"
              onChange={handleOnUpdateGalleryUrl}
              value={galleryUrl}
            />
          </div>
        </div>

        <div className="np-form-buttons">
          <input
            type="submit"
            className="button orange-button medium-size"
            value="Submit"
          ></input>
        </div>
      </form>
    </div>
  )
}

export default NewProductForm

