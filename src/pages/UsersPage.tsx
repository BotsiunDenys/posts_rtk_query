/* import { Link } from "react-router-dom" */
import { useGetUsersQuery } from "../redux/api/usersApi";
import UserDetail from "../components/UserDetail";

const UsersPage = () => {
  const { data: users, error, isLoading } = useGetUsersQuery("");

  return (
    <div className="flex justify-center items-center py-20 min-h-screen bg-[rgb(243,245,247)]">
      <div className="grid grid-cols-2 gap-20">
        {isLoading && <h1 className="text-3xl font-bold">Loading...</h1>}
        {error && (
          <h1 className="text-3xl font-bold text-red-500">
            Getting users error
          </h1>
        )}
        {users?.map((user) => (
          <UserDetail key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
