import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import { RepoCard } from "react-repo-widget"; // Pass repo data to the component
import { RepoCardFetch } from "react-repo-widget"; // Fetch data from the GitHub
import "react-repo-widget/dist-esm/styles.css";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>
        <section className="section">
        <script src="common/js/jquery.githubRepoWidget.min.js"></script>
          <div className="container">
            <div className="content">
            <h1>test</h1>
            <RepoCardFetch login="rv-rescala" reponame="gatsby-rescala-blog"></RepoCardFetch>
            <div class="github-widget" data-repo="JoelSutherland/GitHub-jQuery-Repo-Widget"></div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
