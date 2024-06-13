<script setup>
import { ref, watch, computed} from 'vue'
import {uid} from "uid";
import { Icon } from "@iconify/vue";
import TodoCreator from '../components/TodoCreator.vue'
import TodoItem from '../components/TodoItem.vue'

const todoList = ref([]);

watch(todoList,(newValue,oldValue)=>{
  //execute this js on every todoList change
  //setTodoListLocalStorage();
}, {
  deep: true
});

const todoCompleted = computed(() =>{
  return todoList.value.every((todo)=> todo.isComplete);
})

const fetchTodoList = async() => {
  //get all posts
    const res = await fetch("http://localhost:8000/api/posts");
    if(!res.ok){
        throw new Error("Failed to fetch post");
    }

    const posts = await res.json();
    console.log(posts);
    todoList.value = posts;
    console.log(todoList.value);
}


const setTodoListLocalStorage = async() => {
    let text = "aa";
    let isCompleted = true;
    let isEditing = true;

    const res = await fetch("http://localhost:8000/api/posts", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({text,isCompleted,isEditing})
    })
}

//setup script runs on every page reload
fetchTodoList();

//CREATETODO
const createTodo = async(todo) =>{
  console.log(todo);
  const res = await fetch("http://localhost:8000/api/posts/", {
      method: "POST",
      headers: {
          "Content-type": "application/json"
      },
      body: JSON.stringify({"value":todo})
  })
}

const toggleTodoComplete = async(todoPosition) =>{
  todoList.value[todoPosition].isCompleted = !todoList.value[todoPosition].isCompleted;
  let newVal = todoList.value[todoPosition].isCompleted;
  const res = await fetch("http://localhost:8000/api/posts/"+todoPosition+"/isCompleted", {
      method: "PUT",
      headers: {
          "Content-type": "application/json"
      },
      body: JSON.stringify({"value":newVal})
  })
}

const toggleEditTodo = async(todoPosition) => {
  todoList.value[todoPosition].isEditing = !todoList.value[todoPosition].isEditing;
  let newVal = todoList.value[todoPosition].isEditing;
  const res = await fetch("http://localhost:8000/api/posts/"+todoPosition+"/isEditing", {
      method: "PUT",
      headers: {
          "Content-type": "application/json"
      },
      body: JSON.stringify({"value":newVal})
  })

}

const updateText = async(todoText,todoPosition) => {
  todoList.value[todoPosition].todo = todoText;
  console.log(todoText);
  console.log(todoPosition);
  const res = await fetch("http://localhost:8000/api/posts/"+todoPosition+"/text", {
      method: "PUT",
      headers: {
          "Content-type": "application/json"
      },
      body: JSON.stringify({"value":todoText})
  })
}


const updateTodo = (todoVal, todoPosition) => {
  console.log(todoPosition);
  todoList.value[todoPosition].todo = todoVal;
}

const deleteTodo = async(todoId) => {
  todoList.value = todoList.value.filter((todo) => todo.id !== todoId);
  const res = await fetch("http://localhost:8000/api/posts/"+todoId, {
      method: "DELETE",
      headers: {
          "Content-type": "application/json"
      },
      body: JSON.stringify({})
  })
}

</script>

<template>
  <main>
    <h1>Create Todo</h1>
    <TodoCreator @create-todo="createTodo"/>
    <ul class="todo-list">
      <TodoItem 
        v-for="(todo, index) in todoList" 
        :todo="todo" 
        :index="index"
        @toggle-complete="toggleTodoComplete"
        @edit-todo="toggleEditTodo"
        @update-todo="updateTodo"
        @delete-todo="deleteTodo"
        @update-todo-text="updateText"
        />
    </ul>
    <p v-if="todoList.length == 0" class="todos-msg">
      <span>you have no todos</span>
    </p>
    <p v-if="todoCompleted && todoList.length > 0" class="todos-msg">
      <span>Congratulations! you completed all todos!</span>
    </p>
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;

  h1 {
    margin-bottom: 16px;
    text-align: center;
  }

  .todo-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-top: 24px;
    gap: 20px;
  }

  .todos-msg {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 24px;
  }
}
</style>
