import React from 'react';

const Form = () => {
  return (
    <div id="form-cont">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form submitted");
        }}
      >
        <input type="text" placeholder="Enter your name"/>
        <br />
        <input type="email" placeholder="Enter your email" />
        <br />
        <button id="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
