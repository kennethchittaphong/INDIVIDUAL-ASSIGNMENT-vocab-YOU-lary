import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const addVocabForm = (obj = {}) => {
  clearDom();
  console.warn('add vocab form ===', obj);

  const domString = `
  <form id="submit-vocab-form" class="mb-4">
  <div class="form-group">
    <label for="title">Title</label>
    <input type="text" class="form-control" id="title" aria-describedby="Title" placeholder="Enter a word or phrase" value="${obj.title || ''}" required>
  </div>
  <div class="form-group">
    <label for="definition">Definition</label>
    <textarea class="form-control" placeholder="Enter a definition" id="definition" style="height: 100px" required>${obj.definition || ''}</textarea>
  </div>
  <div class="form-group" id="select-category">
    <label for="category">Category</label>
    <select class="form-control form-select" id="category" required>
      <option value="" disabled selected>${obj.category || 'Select a category'}</option>
      <option value="CSS">CSS</option>
      <option value="HTML">HTML</option>
      <option value="Javascript">Javascript</option>
      <option value="Tech">Tech</option>
    </select>
  </div>
  <button type="submit"
    id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}"
    class="btn btn-primary">Submit
  </button>
</form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
