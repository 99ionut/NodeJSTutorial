<script setup>
import { Icon } from "@iconify/vue";
import { onMounted } from 'vue'

const props = defineProps({
    todo: {
        type: Object
    },
    index: {
        type: Number
    }
});


defineEmits(["toggle-complete", "edit-todo", "update-todo","delete-todo","update-todo-text"]);
</script>

<template>
    <div class="flex justify-between my-2 bg-secondary border rounded-md p-2 items-center shadow-md">
        <input type="checkbox" class="m-2 checkbox rounded-xl bg-white checkbox-accent [--chkfg:white]"
            :checked="todo.iscompleted" 
            @input="$emit('toggle-complete',todo.id,index)"
        />
        <div class="todo w-10/12 border m-2">
            <input class="w-full"
                v-if="todo.isediting" 
                @input="$emit('update-todo-text', $event.target.value, todo.id, index)" 
                type="text" 
                :value="todo.text"
            />
            <span class="cursor-default" v-else :class="{'line-through': todo.iscompleted}">
                {{todo.text}}
            </span>   
        </div>
        <div class="todo-actions flex justify-around flex-auto">
            <Icon 
                v-if="todo.isediting"
                @click="$emit('edit-todo',todo.id,index)" 
                icon="ph:check-circle" class="icon check-icon text-success cursor-pointer" width="22"/>
            <Icon v-else 
                @click="$emit('edit-todo',todo.id,index)" 
                icon="ph:pencil-fill" class="icon edit-icon text-success cursor-pointer"  width="22" />
            <Icon 
                @click="$emit('delete-todo',todo.id,index)" 
                icon="ph:trash" class="icon trash-icon text-error cursor-pointer"  width="22" />
        </div>
      </div>
</template>

<style lang="scss" scoped>

</style>