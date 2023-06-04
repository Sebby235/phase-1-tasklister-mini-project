document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form")
  const taskDescr = document.getElementById("new-task-description")
  const taskList = document.getElementById("tasks")

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const p = document.createElement('p')
    const btn = document.createElement('button')

    p.textContent = taskDescr.value

    p.appendChild(btn)
    taskList.appendChild(p)

    btn.textContent = 'delete'

    btn.addEventListener('click', (e) => {
      p.remove()
    })
  })

});

