import"./assets/styles-D7t41GzV.js";function s(e,t){const a=JSON.stringify(t);localStorage.setItem(e,a)}const n={form:document.querySelector(".feedback-form")};n.form.addEventListener("input",e=>{const t=e.currentTarget.elements.email.value,a=e.currentTarget.elements.message.value;s("feedback-form-state",{email:t,message:a})});
//# sourceMappingURL=2-form.js.map
