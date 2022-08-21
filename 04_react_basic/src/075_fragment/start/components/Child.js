import "./Child.css";
import React from "react";

const Child = () => {
  return (
    <React.Fragment>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorum voluptas odit, quidem ipsam natus, officiis neque unde dolores at qui alias voluptatem in eius, doloremque temporibus earum sed libero.</p>
    </React.Fragment>
  );
};

export default Child;
