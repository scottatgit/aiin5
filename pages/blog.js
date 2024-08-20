import { getSortedPostsData } from '../lib/posts';

export default function Blog({ allPostsData }) {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <h2>{title}</h2>
            <small>{date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
