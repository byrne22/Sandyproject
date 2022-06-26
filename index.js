document.addEventListener('DOMContentLoaded', function(){

    const list = document.querySelector('#activity-list ul');
    const forms = document.forms;
  
    // delete activities
    list.addEventListener('click', (e) => {
      if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
      }
    });
  
    // add activities
    const addForm = forms['add-activity'];
    addForm.addEventListener('submit', function(e){
      e.preventDefault();
  
      // create elements
      const value = addForm.querySelector('input[type="text"]').value;
      const li = document.createElement('li');
      const activityName = document.createElement('span');
      const deleteBtn = document.createElement('span');
  
      // add text content
      activityName.textContent = value;
      deleteBtn.textContent = 'delete';
  
      // add classes
      activityName.classList.add('name');
      deleteBtn.classList.add('delete');
  
      // append to DOM
      li.appendChild(activityName);
      li.appendChild(deleteBtn);
      list.appendChild(li);
    });
  
    // hide activities
    const hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change', function(e){
      if(hideBox.checked){
        list.style.display = "none";
      } else {
        list.style.display = "initial";
      }
    });
  
    // filter activities
    const searchBar = forms['search-activity'].querySelector('input');
    searchBar.addEventListener('keyup', (e) => {
      const term = e.target.value.toLowerCase();
      const activity = list.getElementsByTagName('li');
      Array.from(activity).forEach((activity) => {
        const title = activity.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(e.target.value) != -1){
          activity.style.display = 'block';
        } else {
          activity.style.display = 'none';
        }
      });
    });
  
    // tabbed content
    const tabs = document.querySelector('.tabs');
    const panels = document.querySelectorAll('.panel');
    tabs.addEventListener('click', (e) => {
      if(e.target.tagName == 'LI'){
        const targetPanel = document.querySelector(e.target.dataset.target);
        Array.from(panels).forEach((panel) => {
          if(panel == targetPanel){
            panel.classList.add('active');
          }else{
            panel.classList.remove('active');
          }
        });
      }
    });
  
  })
  