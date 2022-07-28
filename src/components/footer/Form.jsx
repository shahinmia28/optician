import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [errMassage, setErrMassage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uxz2wz3",
        "template_fiot61h",
        form.current,
        "jkYs_JR56BJQ6vazO"
      )
      .then(
        (result) => {
          console.log(result.text);
          setErrMassage(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    if (name !== "" && email !== "" && comment !== "") {
      setComment("");
      setEmail("");
      setName("");
      setErrMassage("");
    } else if (name === "" || email === "" || comment === "") {
      setErrMassage("All field are mandatory");
    }
  };

  return (
    <div>
      <form className="form-container my-3" onSubmit={sendEmail} ref={form}>
        <div className="mb-2">
          <input
            value={name}
            name="name"
            type="text"
            className="form-control"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="mb-2">
          <input
            value={email}
            name="email"
            type="email"
            className="form-control"
            placeholder="email@example.com"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div className="mb-2">
          <textarea
            value={comment}
            name="comment"
            className="form-control"
            rows="3"
            placeholder="Write your comments...."
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>

        <p className="errMassage text-center">{errMassage}</p>

        <div className="mb-2">
          <button type="submit" className="btn btn-outline-light">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
