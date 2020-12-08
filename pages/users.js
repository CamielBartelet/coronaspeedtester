import dbConnect from "../util/mongodb";

export default function Top({ users }) {
  return (
    <div>
      <h1>Top 1000 Movies of All Time</h1>
      <p>
        <small>(According to Metacritic)</small>
      </p>
      <ul>
        {users.map((user) => (
          <li>
            <h2>{user.userName}</h2>
            <h3>{user.userAge}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const { db } = await dbConnect();

  const users = await db
    .collection("users")
    .find({})
    .sort({ metacritic: -1 })
    .limit(1000)
    .toArray();

  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    },
  };
}
