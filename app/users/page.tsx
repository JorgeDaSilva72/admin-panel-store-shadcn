import Link from "next/link";

const UsersPage = () => {
  return (
    <div className="">
      <h1>UsersPage</h1>
      <Link href="/users/doe">See John Doe</Link>
    </div>
  );
};

export default UsersPage;
