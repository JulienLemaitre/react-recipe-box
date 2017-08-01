import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

const INITIAL_STATE = {
  title: "",
  ingredients: ""
};

class EditRecipe extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      ingredients: props.ingredients
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeIngredients = this.changeIngredients.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  changeTitle(event) {
    this.setState({title: event.target.value})
  }

  changeIngredients(event) {
    this.setState({ingredients: event.target.value})
  }

  handleSubmit(event) {
    if (Number.isInteger(this.props.index)) {
      this.props.saveRecipe({title: this.state.title, ingredients: this.state.ingredients, index: this.props.index});
    } else {
      this.props.addRecipe({title: this.state.title, ingredients: this.state.ingredients});
    }
    this.closeModal();
    event.preventDefault();
  }
  closeModal() {
    this.setState(INITIAL_STATE);
    this.props.closeModal();
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <Modal.Header closeButton onHide={this.closeModal}>
          <Modal.Title id="contained-modal-title">Recipe editing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="recipe-title">Recipe Title</label>
            <input
              id="recipe-title"
              type="text"
              className="form-control"
              placeholder="Apple pie"
              name="title"
              value={this.state.title}
              onChange={this.changeTitle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="recipe-ingredients">Add your ingredients, separated by commas</label>
            <input
              id="recipe-ingredients"
              type="text"
              name="ingredients"
              className="form-control"
              placeholder="Apples, flour, eggs..."
              value={this.state.ingredients}
              onChange={this.changeIngredients}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button type="submit" className="btn btn-primary btn-submit" value="Submit">Save</button>
          <Button onClick={this.closeModal} className="btn-close">Close</Button>
        </Modal.Footer>
      </form>

    );
  }
}

export default EditRecipe;