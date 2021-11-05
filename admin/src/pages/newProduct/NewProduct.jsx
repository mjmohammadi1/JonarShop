import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import "./newProduct.css";

import fireBaseApp from "../../components/utils/firebase";
import { addProduct } from "../../redux/stateApiRequests";

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState([]);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState("");

  const dispatch = useDispatch();

  const history = useHistory();
  const handleInputChange = (event) => {
    setInputs((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleSplittedInputs = (event, type) => {
    return type === "category"
      ? setCategory(event.target.value.split(","))
      : setColor(event.target.value.split(","));
  };

  const handleSizeSelect = (event) => {
    setSize(event.target.value);
  };

  const handleAddNewProduct = (event) => {
    event.preventDefault();
    const uniqueFileName = new Date().getTime() + file.name;
    const storage = getStorage(fireBaseApp);
    const storageRef = ref(storage, uniqueFileName);
    const firestoreUploadTask = uploadBytesResumable(storageRef, file);

    firestoreUploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        switch (snapshot.state) {
          case "paused":
            break;
          case "running":
            break;
          default:
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(firestoreUploadTask.snapshot.ref).then((downloadURL) => {
          const product = {
            ...inputs,
            img: downloadURL,
            categories: category,
            color,
            size: [size],
          };
          addProduct(product, dispatch);
          history.push("/products");
        });
      }
    );
  };

  return (
    <div className='newProduct'>
      <h1 className='addProductTitle'>New Product</h1>
      <form className='addProductForm'>
        <div className='addProductItem'>
          <label>Image</label>
          <input
            type='file'
            id='file'
            onChange={(event) => setFile(event.target.files[0])}
          />
        </div>
        <div className='addProductItem'>
          <label>Title</label>
          <input
            name='title'
            type='text'
            placeholder='Apple Airpods'
            onChange={handleInputChange}
          />
        </div>
        <div className='addProductItem'>
          <label>Description</label>
          <input
            name='desc'
            type='text'
            placeholder='description...'
            onChange={handleInputChange}
          />
        </div>
        <div className='addProductItem'>
          <label>Price</label>
          <input
            name='price'
            type='number'
            placeholder='100'
            onChange={handleInputChange}
          />
        </div>
        <div className='addProductItem'>
          <label>Categories</label>
          <input
            type='text'
            placeholder='jeans,skirts'
            onChange={(event) => handleSplittedInputs(event, "category")}
          />
        </div>
        <div className='addProductItem'>
          <label>Size</label>
          <select className='addProductItem' onChange={handleSizeSelect}>
            <option value='Size' disabled>
              Size
            </option>
            <option value='S'>S</option>
            <option value='M'>M</option>
            <option value='L'>L</option>
            <option value='XL'>XL</option>
          </select>
        </div>
        <div className='addProductItem'>
          <label>Colors</label>
          <input
            type='text'
            placeholder='Red,Blue'
            onChange={(event) => handleSplittedInputs(event, "color")}
          />
        </div>
        <div className='addProductItem'>
          <label>Stock</label>
          <select name='inStock' onChange={handleInputChange}>
            <option value='true'>Yes</option>
            <option value='false'>No</option>
          </select>
        </div>
        <button onClick={handleAddNewProduct} className='addProductButton'>
          Create
        </button>
      </form>
    </div>
  );
}
