<script setup>
import { ref, watch, computed} from 'vue'
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
  return todoList.value.every((todo)=> todo.iscompleted);
})

const fetchTodoList = async() => {
  //get all posts
    
    const res = await fetch("http://localhost:8000/api/posts");
    if(!res.ok){
        throw new Error("Failed to fetch post");
    }
    console.log(res);
    const posts = await res.json();
    console.log(posts);
    todoList.value = posts;
    console.log(todoList.value);
}


const setTodoListLocalStorage = async() => {
    let text = "aa";
    let isCompleted = true;
    let isediting = true;

    const res = await fetch("http://localhost:8000/api/posts", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({text,isCompleted,isediting})
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
  });

  
  const insertId = await res.json();
 
  todoList.value.push({
    id: insertId,
    text: todo,
    isCompleted: null,
    isEditing: null,
  });
}

const toggleTodoComplete = async(todoId,todoPosition) =>{
  let edit = todoList.value.filter((todo)=>todo.id == todoId)

  if(edit[0].iscompleted == true){
    todoList.value[todoPosition].iscompleted = false;
  } else {
    todoList.value[todoPosition].iscompleted = true;
  }
  
  const res = await fetch("http://localhost:8000/api/posts/"+todoId+"/iscompleted", {
      method: "PUT",
      headers: {
          "Content-type": "application/json"
      },
      body: JSON.stringify({"value":todoList.value[todoPosition].iscompleted})
  })
}

const toggleEditTodo = async(todoId,todoPosition) => {
  let edit = todoList.value.filter((todo)=>todo.id == todoId)
  
  if(edit[0].isediting == true){
    todoList.value[todoPosition].isediting = false;
  } else {
    todoList.value[todoPosition].isediting = true;
  }
  console.log(todoList.value[todoPosition]);
  const res = await fetch("http://localhost:8000/api/posts/"+todoId+"/isediting", {
      method: "PUT",
      headers: {
          "Content-type": "application/json"
      },
      body: JSON.stringify({"value":todoList.value[todoPosition].isediting})
  })

}

const updateText = async(todoText,todoId,todoPosition) => {
  todoList.value[todoPosition].text = todoText;

  const res = await fetch("http://localhost:8000/api/posts/"+todoId+"/text", {
      method: "PUT",
      headers: {
          "Content-type": "application/json"
      },
      body: JSON.stringify({"value":todoText})
  })
}


const updateTodo = (todoVal, todoPosition) => {
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
  <main class="py-10 w-full flex justify-center ">
    <div class="container bg-primary p-5 rounded-2xl  w-6/12 shadow-2xl shadow-black">
    <p class="font-bold text-2xl text-center pb-4">Create Todo</p>
    <TodoCreator @create-todo="createTodo"/>
    <div class="flex flex-col">
      <TodoItem 
        :key="todo.id"
        v-for="(todo, index) in todoList" 
        :todo="todo" 
        :index="index"
        @toggle-complete="toggleTodoComplete"
        @edit-todo="toggleEditTodo"
        @update-todo="updateTodo"
        @delete-todo="deleteTodo"
        @update-todo-text="updateText"
        />
    </div>
    <p v-if="todoList.length == 0" class="text-center pt-3">
      <span>you have no todos!</span>
    </p>
    <p v-if="todoCompleted && todoList.length > 0" class="text-center pt-3">
      <span>Congratulations! you completed all todos!</span>
    </p>
  </div>
  </main>

</template>

<style scoped lang="scss">

</style>
