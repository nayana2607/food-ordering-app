import { useState } from "react";

const User = () => {
  const [count] = useState(0);
  const [count2] = useState(2);
  return (
    <div className="user-card">
      <h1>{count}</h1>
      <h2>{count2}</h2>
      <h2>Name: Nayana</h2>
      <h3>Location: Vadodara</h3>
      <h3>Contact:naynuz_99</h3>
    </div>
  );
};

export default User;
