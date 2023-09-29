const input = document.querySelector('input');
const btn = document.querySelector('.btn-add');
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty');

btn.addEventListener("click", (e) => {
    e.preventDefault();
  
    const text = input.value;
  
    if (text !== "") {
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.textContent = text;
  
      li.appendChild(p);
      li.appendChild(addDeleteBtn());
      ul.appendChild(li);
  
      swal.fire({
        title:'Tarea agregada',
        icon:'success',
        showConfirmButton: false,
        timer: 1000,    
      });
      input.value = "";
      empty.style.display = "none";
    }
  });
  
  function addDeleteBtn() {
    const deleteBtn = document.createElement("button");
  
    deleteBtn.textContent = "-";
    deleteBtn.className = "btn-delete btn btn-danger delebtn";
  
    deleteBtn.addEventListener("click", (e) => {
      swal.fire({
        title:'¿Esta seguro que quiere eliminar la tarea?',
        icon: 'warning',
        showCancelButton: true,
        showLoaderOnConfirm: true,
    })
    .then(resultado => {
        if (resultado.isConfirmed) {

      const item = e.target.parentElement;
      ul.removeChild(item);
  
      const items = document.querySelectorAll("li");
  
      if (items.length === 0) {
        empty.style.display = "block";
      }
    }})});
  
    return deleteBtn;
  }
