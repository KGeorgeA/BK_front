import React from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  let { id } = useParams();
  return <div>Profile {id}</div>;
}

export default UserProfile;
