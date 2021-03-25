import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Name = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div>
      <label htmlFor="firstname">
        {" "}
        FirstName:
        <input
          type="text"
          id="firstname"
          value={firstName}
          name="firstname"
          placeholder="firstname"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label htmlFor="lastname">
        {" "}
        LastName:
        <input
          type="text"
          id="lastname"
          value={lastName}
          name="lastname"
          placeholder="lastname"
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <h2>
        Hello, {firstName} {lastName}
      </h2>
    </div>
  );
};

const FullName = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = () => {
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  return (
    <div>
      <label>
        {" "}
        FirstName:
        <input type="text" ref={firstNameRef} />
      </label>
      <label>
        {" "}
        LastName:
        <input type="text" ref={lastNameRef} />
      </label>
      <button onClick={handleSubmit}>Submit</button>
      <h2>
        Hello, {firstName} {lastName}!
      </h2>
    </div>
  );
};

class FullNames extends React.Component {
  constructor(props) {
    super(props);
    this.firstNameRef = React.createRef();
    this.lastNameRef = React.createRef();
    this.state = {
      firstName: "",
      lastName: "",
    };
  }

  updateName = () => {
    this.setState({
      firstName: this.firstNameRef.current.value,
      lastName: this.lastNameRef.current.value,
    });
  };

  render() {
    const { firstName, lastName } = this.state;

    return (
      <div>
        <label>
          First Name
          <br />
          <input name="firstName" ref={this.firstNameRef} />
        </label>
        <br />
        <label>
          Last Name
          <br />
          <input name="lastName" ref={this.lastNameRef} />
        </label>
        <button onClick={this.updateName}>Submit</button>

        <h1>
          Hello {firstName} {lastName}!
        </h1>
      </div>
    );
  }
}

class Pizza extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: "medium",
      glutenFree: false,
      topping: "",
      instructions: "",
    };

    this.setSize = this.setSize.bind(this);
    this.setTopping = this.setTopping.bind(this);
    this.setGlutenFree = this.setGlutenFree.bind(this);
    this.setInstructions = this.setInstructions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setSize(event) {
    this.setState({
      size: event.target.value,
    });
  }

  setTopping(event) {
    this.setState({
      topping: event.target.value,
    });
  }

  setGlutenFree(event) {
    this.setState({
      glutenFree: event.target.value,
    });
  }

  setInstructions(event) {
    this.setState({
      instructions: event.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { size, glutenFree, topping, instructions } = this.state;
    alert(`Your order:
    Size: ${size}
    Gluten free? ${glutenFree ? "yes" : "no"}
    Topping: ${topping || "none"}
    Special instructions: ${instructions || "none"}`);
  }

  render() {
    const { size, glutenFree, topping, instructions } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Order Your Pizza</h1>
          <h2>Size:</h2>
          <label>
            <input
              type="radio"
              value="small"
              checked={size === "small"}
              onChange={this.setSize}
            />
            Small
          </label>
          <label>
            <input
              type="radio"
              value="medium"
              checked={size === "medium"}
              onChange={this.setSize}
            />
            Medium
          </label>
          <label>
            <input
              type="radio"
              value="large"
              checked={size === "large"}
              onChange={this.setSize}
            />
            Large
          </label>
          <br />
          <br />
          <label>
            Topping
            <br />
            <select onChange={this.setTopping} value={topping}>
              <option value="">Pick a Topping!</option>
              <option value="chicken">Chicken</option>
              <option value="mozzarella">Mozzarella</option>
              <option value="garlic">Garlic</option>
              <option value="onions">Onions</option>
            </select>
          </label>
          <br />
          <br />
          <label>
            <input
              type="checkbox"
              checked={glutenFree}
              onChange={this.setGlutenFree}
            />{" "}
            Gluten Free
          </label>
          <br />
          <br />
          <label>
            Special Instructions: <br />
            <textarea value={instructions} onChange={this.setInstructions} />
          </label>
          <br />
          <br />
          <button type="submit">Send Order</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<FullName />, document.getElementById("root"));
