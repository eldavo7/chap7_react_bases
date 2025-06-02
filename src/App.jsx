// import { useDocumentTitle } from "./hooks/useDocumentTitle.js";
// import { Input } from "./components/froms/Input.jsx";
// import { useState } from "react";
// import { useIncrement } from "./hooks/useIncrement.js";

import { useFetch } from "./hooks/useFetch.js";

function App() {
  const { loading, data, errors } = useFetch('https://jsonplaceholder.typicode.com/posts');

  return (
    <div className="container my-2">
      {loading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      {errors && (
        <div className="alert alert-danger">{errors.toString()}</div>
      )}

      {data && (
        <div>
          <ul>
            {data.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
