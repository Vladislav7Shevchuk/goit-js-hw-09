const STORAGE_KEY = 'feedback-form-state';

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function loadFromLS(key) {
  const body = localStorage.getItem(key);
  try {
    const data = JSON.parse(body);
    return data;
  } catch {
    return body;
  }
}

const refs = {
  form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('input', e => {
  const email = e.currentTarget.elements.email.value;
  const message = e.currentTarget.elements.message.value;
  const data = { email, message };
  saveToLS(STORAGE_KEY, data);
});

function unitPage() {
  const formData = loadFromLS(STORAGE_KEY);
  refs.form.elements.email.value = formData?.email || '';
  refs.form.elements.message.value = formData?.message || '';
}

unitPage();

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = {
    email: refs.form.elements.email.value,
    message: refs.form.elements.message.value,
  };

  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  e.target.reset();
});
