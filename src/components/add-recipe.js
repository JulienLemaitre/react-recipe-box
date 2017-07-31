import React, { Component } from 'react';

class AddRecipe extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      ingredients: ""
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
    console.log("A recipe has been submitted :", this.state.title);
    this.props.addRecipe({title: this.state.title, ingredients: this.state.ingredients});
    this.closeModal();
    event.preventDefault();
  }
  closeModal() {
    this.props.closeModal();
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <button onClick={this.closeModal}>Close</button>
        <label>Recipe Title</label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.changeTitle}
        />
        <label>Add your ingredients, separated by commas</label>
        <input
          type="text"
          name="ingredients"
          value={this.state.ingredients}
          onChange={this.changeIngredients}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddRecipe;