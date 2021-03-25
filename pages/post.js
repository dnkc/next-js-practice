import Layout from "../components/Layout";
import { withRouter } from "next/router";

const Post = ({ router }) => {
  return (
    <Layout title={router.query.title}>
      <p style={{ width: "80vw" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
        perspiciatis dignissimos fugiat rerum suscipit dolorem ut repellendus
        alias doloremque aliquid.
      </p>
    </Layout>
  );
};

export default withRouter(Post);
