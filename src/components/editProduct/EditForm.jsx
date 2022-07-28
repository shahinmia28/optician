import "./editProduct.scss";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase_config";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditForm = (props) => {
  const editInfo = useLocation().state.product;
  const id = editInfo.id;
  const [code, setCode] = useState(editInfo.code);
  const [title, setTitle] = useState(editInfo.title);
  const [rPrice, setRPrice] = useState(editInfo.rPrice);
  const [discount, setDiscount] = useState(editInfo.discount);
  const [docs, setDocs] = useState(editInfo.docs);
  const [image, setImage] = useState(editInfo.image);
  const product = { id, code, title, rPrice, discount, docs, image };

  const [file, setFile] = useState("");
  const [per, setPer] = useState(0);
  const navigate = useNavigate();

  // image upload in storage
  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setPer(progress);

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImage(downloadURL);
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const edit = (e) => {
    e.preventDefault();
    try {
      props.editItem(product);
      navigate("/ds1fgh64d8fas68g7487/admin_page");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="editProduct">
      <h2 className="text-center my-4">Edit your product details</h2>
      <div className="container my-4">
        <form className="form p-4" onSubmit={edit}>
          <div className="row p-2 d-flex">
            <div className="title col-12 col-md-4 py-3">
              <label className="form-label">Product Title</label>
              <input
                value={title}
                name="title"
                type="text"
                className="form-control"
                onChange={(e) => setTitle(e.target.value)}
                required
              ></input>
            </div>
            <div className="price col-12 col-md-4 py-3">
              <label className="form-label">Product's Regular Price</label>
              <input
                name="rPrice"
                value={rPrice}
                type="number"
                className="form-control"
                onChange={(e) => setRPrice(e.target.value)}
                required
              ></input>
            </div>

            <div className="discount col-12 col-md-4 py-3">
              <label className="form-label">
                Product's Discount Percentage
              </label>
              <input
                name="discount"
                value={discount}
                type="number"
                className="form-control"
                onChange={(e) => setDiscount(e.target.value)}
              ></input>
            </div>
            <div className="Code col-12 col-md-4 py-3">
              <label className="form-label">Product Code</label>
              <input
                name="code"
                value={code}
                type="text"
                className="form-control"
                onChange={(e) => setCode(e.target.value)}
              ></input>
            </div>
            <div className="image col-12 col-md-4 py-3">
              <label className="form-label">
                Upload Product Image <span> is {per} % done</span>
              </label>
              <input
                name="image"
                className="form-control"
                type="file"
                id="formFile"
                onChange={(e) => setFile(e.target.files[0])}
              ></input>
            </div>
          </div>

          <div className="item p-2">
            <textarea
              name="docs"
              value={docs}
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Write here the Description of the product"
              rows="5"
              onChange={(e) => setDocs(e.target.value)}
            ></textarea>
          </div>
          <button
            disabled={per !== 0 && per < 100}
            type="submit"
            className="btn btn-secondary"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
