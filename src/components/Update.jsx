import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../reducer/UserReducer";
import { toast } from "react-toastify";

const Update = () => {
  const { id } = useParams();
  console.log(id);
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((u) => u.id == id);
  const { name, email } = existingUser[0];
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedEmail, setUpdatedEmail] = useState(email);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id: id, name: updatedName, email: updatedEmail }));
    navigate("/");
    toast.info("User Data Updated Successfully!");
  };

  return (
    <div className="container lg:w-[50%] w-[100%] mx-auto mt-10">
      <form className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-center text-xl py-5 font-bold">
          Update User Details
        </h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            value={updatedEmail}
            onChange={(e) => setUpdatedEmail(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleUpdate}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
