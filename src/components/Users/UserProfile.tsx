import React from "react";
import { useAppSelector } from "../../utils/hooks/reduxHooks";


function UserProfile() {
  const {name, surname, email, phoneNumber, dob} = useAppSelector(state => state.userAuth.user) // add phonenumber to the store
  
  return <div>Profile {name}</div>;
}

export default UserProfile;
