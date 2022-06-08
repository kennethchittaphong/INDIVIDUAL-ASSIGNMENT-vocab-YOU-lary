const clearDom = () => {
  document.querySelector('#introduction').innerHTML = '';
  document.querySelector('#filter-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#vocab-container').innerHTML = '';
};

export default clearDom;
