import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import ListRecipesComponent from "./ListRecipesComponent";
import NavbarComponent from "./NavbarComponent";
import update from './redux/foodSlice'
export default function PageRecipes() {
    const [isShow, setIsShow] = useState(false)
    const [foodName,setFoodName] = useState('')
    // const [addIngredient, setAddIngredient] = useState(false)
    const dispatch = useDispatch();
    const handleNewRecipes = () =>{
            setIsShow(!isShow)
    }
    const handleSave = () =>{
         dispatch(update(foodName))
    }
    const handleSubmit = (e) =>{
      e.prevenDeFault();
    }
  return (
    <div>
      <NavbarComponent />
      <ListRecipesComponent/>
      <div className="container-fluid content">
        <div className="row">
          <div className="col-sm-4 button">
            <button onClick={()=>handleNewRecipes()}
            type="button" className="btn btn-success">
              New Recipes
            </button>
          </div>

          <div className="col-sm-8 content">
            {
              isShow ? (
                <form onClick={handleSubmit}>
                <div className="mb-3">
                <button 
                onClick={()=>handleSave()}
                type="button" 
                 className="m-1 btn btn-success">
                Save
                </button>
                <button type="button" className="btn btn-danger">
                 Cancel
                </button>
                </div>
                <label className="form-label">Name</label>
                  <input 
                  value={foodName}
                  onChange={(e)=>setFoodName(e.target.value)}
                  type="text" 
                  placeholder="foodName"
                  className="form-control" />
                <div className="mb-3">
                  <label className="form-label">Image URL</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <input type="text" className="form-control" />
                </div>
                {/* {addIngredient?(
                  <div className="mb-3">
                  <button type="button" className="btn btn-success">
                    Add Ingredient
                  </button>
                </div>
                ):(
                  <div className="mb-3">
                  <button type="button" className="btn btn-success">
                    Add Ingredient
                  </button>
                  </div>
                )}
                 */}
              </form>
              ):(
                <h5>Please select a Recipe</h5>
              )
            }
            
         
          
          </div>
        </div>
      </div>
    </div>
  );
}
