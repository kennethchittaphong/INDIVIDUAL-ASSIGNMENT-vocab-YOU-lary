import renderToDOM from '../helpers/renderToDom';

const domBuilder = () => {
  const domString = `
    <div id="nav-container"></div>
    <div id="main-container">
      <div id="filter-container"></div>
      <div id="form-container"></div>
      <div id="sort"></div>
      <div id="vocab-container"></div>
    </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
