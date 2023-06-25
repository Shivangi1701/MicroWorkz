import React, { useState, useReducer } from 'react'
import "./Add.scss"
import { gigReducer, INITIAL_STATE } from '../../reducers/gigReducer';
import upload from "../../utils/upload"

const Add = () => {
  const [singleFile, setSingleFile] = useState();
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);
  
  const handleChange = (e) => {
    // dispatch is send action object having type and payload
    dispatch({
      type:"CHANGE_INPUT", 
      payload: {name: e.target.name, value:e.target.value},
    });
  };

  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({
      type:"ADD_FEATURE", 
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      const images = await Promise.all(
        [...files].map(async (file)=>{ // [...files] bcz to have files as array and not fileList
          const url = await upload(file);
          return url; // for each file we are gonna get url and promise all will make it an array
        }) 
      );
      const cover = await upload(singleFile);
      setUploading(false);
      dispatch({
        type: "ADD_IMAGES",
        payload: {cover, images}
      })
    } catch (err) {
      console.log(err);
    }
  };

  console.log(state);

  return (
    <div className="add">
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Title</label>
            <input 
              type="text"
              name="title"
              placeholder="e.g. I will do something I'm really good at"
              onChange={handleChange}
            />
            <label htmlFor="">Category</label>
            <select name="cat" id="cat" onChange={handleChange}>
              <option value="design">Design</option>
              <option value="web">Web development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <div className="images">
              <div className="imagesInputs">
                <label htmlFor="">Cover Image</label>
                <input type="file" onChange={e=>setSingleFile(e.target.files[0])}/>
                <label htmlFor="">Upload Image</label>
                <input type="file" multiple onChange={e=>setFiles(e.target.files)}/>
              </div>
              <button onClick={handleUpload}>{uploading ? "uploading..." : "Upload"}</button>
            </div>
            <label htmlFor="">Description</label>
            <textarea 
              name="desc" 
              id="" 
              cols="30" 
              rows="16"
              placeholder='Brief description to introduce your service to customers'
              onChange={handleChange}
            ></textarea>
            <button>Create</button>
          </div>
          <div className="right">
            <label htmlFor="">Service Title</label>
            <input 
              type="text"
              name="shortTitle" 
              placeholder='e.g. One-page web design' 
              onChange={handleChange}
            />
            <label htmlFor="">Short Description</label>
            <textarea 
              name="shortDesc"
              id="" 
              cols="30" 
              rows="10" 
              placeholder="Short description of your area"
              onChange={handleChange}
            ></textarea>
            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input type="number" name="deliveryTime" min={1} onChange={handleChange}/>
            <label htmlFor="">Revision Number</label>
            <input type="number" name="revisionNumber" min={1} onChange={handleChange}/>
            <label htmlFor="">Add Features</label>
            <form action="" className='add' onSubmit={handleFeature}>
              <input type="text" placeholder="e.g. page design"/>
              <button type='submit'>Add</button>
            </form>
            <div className="addedFeatures">
              {state?.features?.map((feature) => ( 
                <div className="item" key={feature}>
                  <button onClick={()=>dispatch({type: "REMOVE_FEATURE", payload: feature})}>
                    {feature}  
                    <span>X</span>
                  </button>
                </div>
              ))}
            </div>
            <label htmlFor="">Price</label>
            <input type="number" name="price" min={1} onChange={handleChange}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add