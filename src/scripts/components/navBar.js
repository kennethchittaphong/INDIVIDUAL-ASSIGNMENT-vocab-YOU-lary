import renderToDOM from '../helpers/renderToDom';

const navBar = () => {
  const domString = `
  <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a id="home" class="navbar-brand" href="#">
      <img src="https://en-ingles.com.ar/blog/wp-content/uploads/2019/09/voc.jpg">
    </a>
    <ul class="navbar-nav">
    <li class="nav-item">
      <a id="create-entry" class="nav-link" href="#">Create Entry</a>
    </li>
    </ul>
    <div class="space"></div>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="searchBar">
      <button class="btn btn-outline-success" type="submit" id="search-btn">Search</button>
    </form>
    <div id="logout-button"></div>
  </div>
</nav>
`;

  renderToDOM('#nav-container', domString);
};

export default navBar;
