import React, { Component } from 'react';
import Modal from 'react-modal';
import RecipesList from './components/recipes-list';
import AddButton from './components/add-button';
import AddRecipe from './components/add-recipe';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipesList : [],
      modalIsOpen: false
    };

    this.addRecipeModal = this.addRecipeModal.bind(this);
    this.addRecipe = this.addRecipe.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
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
    this.setState({modalIsOpen: true});
  }

  addRecipe(newRecipe) {
    let updatedList = this.state.recipesList;
    updatedList.push(newRecipe);
    this.setState({recipesList: updatedList});
    localStorage.setItem('recipes',JSON.stringify(updatedList));
  }

  editRecipe(index) {
    const editRecipeFn = () => {
      console.log("Edit the recipe", index);
    };
    return editRecipeFn;
  }

  deleteRecipe(index) {
    const deleteRecipeFn = () => {
      let newList = this.state.recipesList;
      newList.splice(index, 1);
      this.setState({recipesList: newList});
      localStorage.setItem('recipes',JSON.stringify(newList));
    };
    return deleteRecipeFn;
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Your Recipe Box</h2>
        </div>
        <div className="App-body">
          <RecipesList
            list={this.state.recipesList}
            editRecipe={this.editRecipe}
            deleteRecipe={this.deleteRecipe}
          />
          <AddButton what="a recipe" openModal={this.addRecipeModal} />
        </div>
        <Modal
          isOpen = {this.state.modalIsOpen}
          contentLabel= "Add a recipe"
          shouldCloseOnOverlayClick={true}
          onRequestClose = {() => this.setState({ modalIsOpen: false})}
        >
          <AddRecipe addRecipe={this.addRecipe} closeModal={this.closeModal} />
        </Modal>
      </div>
    );
  }
}

export default App;
