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

function initPage() {
  const formData = loadFromLS(STORAGE_KEY);
  refs.form.elements.email.value = formData?.email || '';
  refs.form.elements.message.value = formData?.message || '';
}

initPage();

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const email = refs.form.elements.email.value.trim();
  const message = refs.form.elements.message.value.trim();

  if (!email || !message) {
    alert('Будь ласка, заповніть усі поля перед відправленням форми.');
    return;
  }

  const formData = { email, message };
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  e.target.reset();
});
