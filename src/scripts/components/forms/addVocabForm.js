import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const addVocabForm = (uid, obj = {}) => {
  clearDom();
  console.warn(uid);

  const domString = `
    <form id="${obj.firebaseKey ? `update-book--${obj.firebaseKey}` : 'submit-book'}" class="mb-4">
        <div class="form-group">
            <label for="title">Word</label>
            <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter Word" value="${obj.title || ''}" required>
        </div>
        <div class="form-group">
            <label for="description">Definition</label>
            <textarea class="form-control" placeholder="Word definition" id="description" style="height: 100px">${obj.description || ''}</textarea>
        </div>
        <div class="form-group">
            <label for="image">Image URL</label>
            <input type="url" class="form-control" id="image" placeholder="Image URL" value="${obj.image || ''}" required>
        </div>
        <div class="form-group">
            <label for="price">Price</label>
            <input type="text" class="form-control" id="price" placeholder="Book Price" value="${obj.price || ''}" required>
        </div>
        <div class="form-group" id="select-author">
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="sale" ${obj.sale ? 'checked' : ''}>
            <label class="form-check-label" for="sale">On Sale?</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit Book
        </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
