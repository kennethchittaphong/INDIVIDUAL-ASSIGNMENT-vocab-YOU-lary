import clearDom from '../helpers/clearDom';

const emptyVocab = () => {
  document.querySelector('#vocab-container').innerHTML = '<h1 id="empty">No Vocab Entries</h1>';
};

const showVocabs = (array) => {
  clearDom();

  // FILTER BUTTONS
  document.querySelector('#filter-container').innerHTML = `
    <button type="button" class="btn btn-primary" id="filter--CSS">CSS</button>
    <button type="button" class="btn btn-primary" id="filter--HTML">HTML</button>
    <button type="button" class="btn btn-primary" id="filter--Javascript">Javascript</button>
    <button type="button" class="btn btn-primary" id="filter--Tech">Tech</button>
  `;

  document.querySelector('#sort').innerHTML = `
    <div class="btn-group">
      <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="sort-btn">
        Sort by
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#" id="sort-name">Name - Alphabetically</a></li>
        <li><a class="dropdown-item" href="#" id="sort-newest">Newest to Oldest</a></li>
        <li><a class="dropdown-item" href="#" id="sort-oldest">Oldest to Newest</a></li>
      </ul>
    </div>
  `;

  if (array.length === 0) {
    emptyVocab();
  } else {
    array.forEach((item) => {
      document.querySelector('#vocab-container').innerHTML += `
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${item.category}</h6>
            <p class="card-text">${item.definition}</p>
            <a href="#" class="card-link" id="edit--${item.firebaseKey}">Edit</a>
            <a href="#" class="card-link" id="delete--${item.firebaseKey}">Delete</a>
            <p class="card-subtitle mb-2 text-muted" id="time">Last Updated: ${item.time}</p>
          </div>
        </div>
      `;
    });
  }
};

export { showVocabs, emptyVocab };
