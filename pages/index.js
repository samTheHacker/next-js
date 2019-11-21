import axios from "axios";
import Link from "next/link";

// import React, { Component } from "react";

// class index extends Component {
//   constructor(props) {
//     super(props);
//   }

//   static async getInitialProps() {
//     const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//     const { data } = res;
//     console.log(data[0]);

//     return { posts: data };
//   }

//   render() {
//     const {posts} = this.props
//     return (
//       <div>
//         <h1>Our Index Page!!!</h1>
//         <ul>
//           {posts.map(post => (
//             <li key={post.id}>{post.title}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default index;

const Index = ({ posts }) => {
  return (
    <div>
      <h1>Our Index Page!!!</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/post?id=${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Index.getInitialProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const { data } = res;
  console.log(data[0]);

  return { posts: data };
};

export default Index;
