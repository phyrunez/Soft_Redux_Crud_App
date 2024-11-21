import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../reducer/UserReducer";
import { toast } from "react-toastify";

const Home = () => {
  const usersData = useSelector((state) => state.users);
  const dispatch = useDispatch();

  console.log("usersData", usersData);

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
    toast.error("User Deleted!!!");
  };

  return (
    <div className="container lg:w-[80%] w-[100%] mx-auto">
      <div className="my-4">
        <Link
          to="/create"
          className="bg-green-600 rounded-lg font-bold p-2 text-white"
        >
          Create +
        </Link>
      </div>
      <table className="w-[100%] table-auto border-collapse mx-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((u, index) => {
            return (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">{u.id}</td>
                <td className="px-4 py-2">{u.name}</td>
                <td className="px-4 py-2">{u.email}</td>
                <td className="lg:px-5 md:px-5 lg:space-x-5 md:space-x-5 space-x-2 py-2">
                  <Link
                    to={`/edit/${u.id}`}
                    className="text-white rounded-xl p-3 text-sm bg-blue-500"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(u.id)}
                    className="text-white rounded-xl text-sm p-3 bg-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
