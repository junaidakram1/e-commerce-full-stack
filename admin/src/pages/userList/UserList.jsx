import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteUser,
  getUsersStart,
  getUsersSuccess,
  getUsersFailure,
} from "../../redux/userRedux";
import { userRequest } from "../../requestMethods"; // ✅ Use token-based axios instance

export default function UserList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    const fetchUsers = async () => {
      dispatch(getUsersStart());
      try {
        const res = await userRequest.get("/users");
        dispatch(getUsersSuccess(res.data));
      } catch (err) {
        dispatch(getUsersFailure());
      }
    };

    fetchUsers();
  }, [dispatch]);

  const handleDelete = async (id) => {
    try {
      await userRequest.delete(`/users/${id}`);
      dispatch(deleteUser(id));
    } catch (err) {
      console.error(err);
    }
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => (
        <div className="userListUser">
          <img
            className="userListImg"
            src={params.row.avatar || "https://via.placeholder.com/40"}
            alt=""
          />
          {params.row.username}
        </div>
      ),
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => (
        <>
          <Link to={`/user/${params.row._id}`}>
            <button className="userListEdit">Edit</button>
          </Link>
          <DeleteOutline
            className="userListDelete"
            onClick={() => handleDelete(params.row._id)}
          />
        </>
      ),
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={users}
        getRowId={(row) => row._id}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
