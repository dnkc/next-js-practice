import Layout from "../components/Layout";
import { Component, useEffect } from "react";
import fetch from "isomorphic-unfetch";

import Error from "./_error";

export default class About extends Component {
  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/dnkc");
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();

    // works with stateful and stateless components
    // fetch("https://api.github.com/users/dnkc")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
    return { user: data, statusCode };
  }

  //   componentDidMount() {
  //     const githubInfo = fetch("https://api.github.com/users/dnkc")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         this.setState({
  //           user: data,
  //         });
  //       });
  //   }
  render() {
    const { user, statusCode } = this.props;
    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }
    return (
      <Layout title="About">
        {/* {JSON.stringify(this.state.user)} */}
        {/* {JSON.stringify(this.props.user)} */}
        <p>{user.login}</p>
        <img src={user.avatar_url} alt="dnkc" height="200px" />
      </Layout>
    );
  }
}
