import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

import Post from "./Post";

class Posts extends React.Component {
  state = {
    posts: [],
  };

  // First ten Posts
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/posts?_start=10&_limit=10")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ posts: data });
      });
  }

  fetchMoreData = async () => {
    const response = await axios.get(
      "http://jsonplaceholder.typicode.com/posts?_start=10&_limit=10"
    );
    this.setState({
      posts: this.state.posts.concat(response.data),
    });
  };

  render() {
    return (
      <div className="bg-gray-100">
        <h1 className="text-center text-5xl uppercase font-semibold text-gray-600 py-6">
          Posts
        </h1>
        <InfiniteScroll
          dataLength={this.state.posts.length}
          next={this.fetchMoreData}
          className="md:grid grid-cols-2 md:px-10 lg:px-32 px-4"
          hasMore={true}
          loader={
            <div className="flex col-span-2 justify-center items-center">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
            </div>
          }
        >
          {this.state.posts &&
            this.state.posts.map((post) => {
              return <Post key={post.id} post={post} />;
            })}
        </InfiniteScroll>
      </div>
    );
  }
}

export default Posts;
