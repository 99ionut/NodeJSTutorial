<script setup>
import { reactive, defineEmits } from "vue";
import TodoButton from "./TodoButton.vue";


const emit = defineEmits(["create-todo"]);

const todoState = reactive({
    todo: "",
    invalid: null,
    errMsg: "",
});

const createTodo = () =>{
    todoState.invalid = null;
    if(todoState.todo !== ""){
        emit("create-todo", todoState.todo);
        todoState.todo="";
        return;
    }
    todoState.invalid = true;
    todoState.errMsg = "Todo value cannot be empty";
}

</script>
<template lang="">
    <div  class="flex justify-between border-2 rounded-md border-info" :class="{'input-err': todoState.invalid}">
        <input class="w-10/12" type="text" v-model="todoState.todo">
        <TodoButton class="w-2/12" @click="createTodo()">Create todo +</TodoButton>
    </div>
    <p v-show="todoState.invalid" class="text-error text-center m-3">{{ todoState.errMsg}}</p>
</template>

<style lang="scss" scoped>

</style>

