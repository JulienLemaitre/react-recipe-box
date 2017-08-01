import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import RecipesList from './components/recipes-list';
import AddButton from './components/add-button';
import EditRecipe from './components/edit-recipe';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipesList: [],
      modalIsOpen: false,
      selectedRecipe: {}
    };

    this.addRecipeModal = this.addRecipeModal.bind(this);
    this.addRecipe = this.addRecipe.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    const storage = localStorage.getItem('recipes');
    if (storage) {
      this.setState({recipesList : JSON.parse(storage)});
    }
  }

  addRecipeModal() {
    this.setState({selectedRecipe: {} ,modalIsOpen: true});
  }

  addRecipe(newRecipe) {
    let updatedList = this.state.recipesList;
    updatedList.push(newRecipe);
    this.setState({recipesList: updatedList});
    localStorage.setItem('recipes',JSON.stringify(updatedList));
  }

  editRecipe(index) {
    return () => {
      let recipeToEdit = {
        index: index,
        title: this.state.recipesList[index].title,
        ingredients: this.state.recipesList[index].ingredients
      };
      this.setState({selectedRecipe: recipeToEdit, modalIsOpen: true});
    };
  }

  saveRecipe(editedRecipeInfos) {
      const { title, ingredients, index } = editedRecipeInfos;
      let changedList = this.state.recipesList;
      let changedRecipe = { title: title, ingredients: ingredients };
      changedList.splice(index, 1, changedRecipe);
      this.setState({recipesList: changedList});
      localStorage.setItem('recipes', JSON.stringify(changedList));
  }

  deleteRecipe(index) {
    return () => {
      let newList = this.state.recipesList;
      newList.splice(index, 1);
      this.setState({recipesList: newList});
      localStorage.setItem('recipes',JSON.stringify(newList));
    };
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="App modal-container">
        <div className="App-header">
          <h1>Your Recipe Box<br /><small>Stored in your browser !</small></h1>
        </div>
        <div className="App-body container">
          <RecipesList
            list={this.state.recipesList}
            editRecipe={this.editRecipe}
            deleteRecipe={this.deleteRecipe}
          />
          <AddButton what="a recipe" openModal={this.addRecipeModal} />
        </div>
        <Modal
          show={this.state.modalIsOpen}
          onHide={this.closeModal}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <EditRecipe
            addRecipe={this.addRecipe}
            saveRecipe={this.saveRecipe}
            closeModal={this.closeModal}
            {...this.state.selectedRecipe}
          />
        </Modal>
      </div>
    );
  }
}

export default App;
