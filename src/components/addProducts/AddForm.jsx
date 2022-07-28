import "./addForm.scss";
import { inputData } from "../../Data";
import { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase_config";

const AddForm = (props) => {
  const [data, setData] = useState({});
  const [file, setFile] = useState("");
  const [per, setPer] = useState(0);

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
            setData((prev) => ({ ...prev, image: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({
      ...data,
      [id]: value,
    });
  };
  const add = (e) => {
    e.preventDefault();
    try {
      props.addItem(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="addProduct container">
      <h2 className="text-center my-4">Add Product Here</h2>

      <div className="my-4">
        <form className="form p-4" onSubmit={add}>
          <div className="group row p-2 d-flex">
            {inputData.map((input) => (
              <div className="title col-12 col-md-4 py-3" key={input.id}>
                <label className="form-label">{input.label}</label>
                <input
                  id={input.id}
                  value={input.title}
                  name={input.title}
                  type={input.type}
                  className="form-control"
                  onChange={handleInput}
                ></input>
              </div>
            ))}
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
              id="docs"
              name="docs"
              value={data.docs}
              className="form-control"
              placeholder="Write here the Description of the product"
              rows="5"
              onChange={handleInput}
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

export default AddForm;
