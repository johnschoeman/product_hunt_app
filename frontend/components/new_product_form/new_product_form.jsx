import React from 'react';

class NewProductForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      link_url: "",
      name: "",
      tagline: "",
      topics: [],
      availableStatus: true,
      thumbnail_url: "",
      gallery_url: "",
      makers: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log('new product form was submitted');
    e.preventDefault();
    let product = Object.assign({}, this.state);
    this.props.createProduct(product).then(this.props.history.push('/'));
  }

  update(key) {
    return (e) => {
      this.setState({ [key]: e.target.value });
    };
  }

  render() {

    return (
      <div className="np-from-container">
        <h1 className="np-form-header">Post something new</h1>
        <form className="np-form" onSubmit={this.handleSubmit} >

          <div className="np-form-input-container" >
            <div className="np-form-input">
              <label>Link</label>
              <input type="text"
                     onChange={this.update('link_url')}
                     value={this.state.link_url}/>
            </div>

            <div className="np-form-input">
              <label>Name</label>
              <input type="text"
                     onChange={this.update('name')}
                     value={this.state.name}/>
            </div>

            <div className="np-form-input">
              <label>Tagline</label>
              <input type="text"
                     onChange={this.update('tagline')}
                     value={this.state.tagline}/>
            </div>

            <div className="np-form-input">
              <label>Topics</label>
              
            </div>

            <div className="np-form-input">
              <label>Status</label>
            
            </div>

            <div className="np-form-input">
              <label>Thumbnail</label>
              <input type="text"
                     onChange={this.update('thumbnail_url')}
                     value={this.state.thumbnail_url}/>
            </div>

            <div className="np-form-input">
              <label>Gallery</label>
              <input type="text"
                     onChange={this.update('gallery_url')}
                     value={this.state.gallery_url}/>
            </div>

            <div className="np-form-input">
              <label>Makers</label>
        
            </div>
          </div>

          <div className="np-form-buttons">
            <input type="submit" className="button orange-button medium-size" value="Submit"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default NewProductForm;