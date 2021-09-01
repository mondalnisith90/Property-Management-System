import ListItem from "./ListItem";
import PropertyForm from "./PropertyForm";
import "../css/Home.css";
import { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

let itemId = 0;

const Home = () => {

    const [propertyList, setPropertyList] = useState([]);
    const [formVisibility, setFormVisibility] = useState(false);

    const addItemOnPropertyList = (newItem) => {
      newItem.id = ++itemId;
        setPropertyList([newItem, ...propertyList]);
    }

    console.log(propertyList)

    const removeItemFromPropertyList = (itemId) => {
      const newList = [...propertyList].filter((itemObj) => itemObj.id != itemId);
      setPropertyList(newList);
     
    }



    const addPropertyButtonClick = () => {
      if(formVisibility){
        //if form is visible, Hide the form
        setFormVisibility(false);
      }else{
        //if form is not visible, Show the form
        setFormVisibility(true);
      }
    }




    return(
        <>
        <div>
           <div className="home_heading_div">
             <h1 className="home_heading_text">Property Management System</h1>
           </div>
          <div className="home_body_div">
            <Button className="add_property_button" 
              startIcon={formVisibility ? <VisibilityOffIcon style={{color: "white", fontSize: "25px"}}/> : <AddIcon style={{color: "white", fontSize: "25px"}}/> }
             onClick={addPropertyButtonClick} >
             {formVisibility ? "Hide Form" : "Add Property" }
            </Button>
            
          </div>
            {formVisibility ? <PropertyForm addItem = {addItemOnPropertyList} /> : null } 
             {
              propertyList.map((value, index)=> {
                return(<ListItem deleteItem={removeItemFromPropertyList} name={value.name} description={value.description} size={value.size} key={index} id={value.id}  />);
              })
           }
          </div>
        </>
    );
}

export default Home;