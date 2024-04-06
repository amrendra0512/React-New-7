
export const addTodos = (text)=> ({
    type: "ADD",
    text: text
})

export const deleteTodos = (id)=> ({
    type: "DELETE",
    id: id
})