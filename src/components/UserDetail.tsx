import { Link } from "react-router-dom";
import { UserType } from "../types/UserType";

interface Props {
  user: UserType;
}

const UserDetail = ({ user }: Props) => {
  return (
    <div className="text-xl flex flex-col gap-3 bg-white rounded-md p-4">
      <p className="font-bold">Username: {user.username}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <Link
        className="underline hover:text-[rgb(243,245,247)] transition-colors text-white bg-[rgb(75,117,226)] hover:bg-[rgb(119,149,226)] p-2 max-w-max rounded-sm"
        to={`/posts/${user.id}`}
      >
        {user.username} posts
      </Link>
    </div>
  );
};

export default UserDetail;