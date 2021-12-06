<template>
    <div class="Home flex flex-col bg-gradient-to-b from-gray-700 to-gray-900 text-white text-xl">
        <header class="py-10 text-4xl font-bold">
            <h1>Online To-Do App par <a href="https://www.linkedin.com/in/natthanguilhot/" target="_blank" rel="noopener" class="opacity-70 hover:opacity-100 underline hover:no-underline">Natthan Guilhot</a></h1>
        </header>
        <main class="flex flex-col justify-start items-center h-full">
            <div class="flex justify-center items-center m-10">
                <label for="task">Votre tâche :</label>
                <input type="text" name="task" v-model="inputTask" @keypress.enter="addTask()" id="task" placeholder="Faire la lessive" class="border-2 rounded ml-2 outline-none p-1 focus:ring-2 focus:ring-yellow-400 text-gray-800" minlength="1"/>
                <button @click="addTask()" class="h-8 w-8 border ml-2 rounded focus:ring-2 focus:ring-yellow-400 outline-none" aria-label="Ajouter une tâche"><i class="fas fa-pen"></i></button>
            </div>
            <div class="flex flex-col justify-center items-start">
                <div v-for="(task, index) in tasks" :key="task" class="flex justify-center items-center">
                    <input type="checkbox" v-model="task.done" :value="task.done" :id="task.task + ' ' + task.id" class="mr-2 w-5 h-5 focus:ring-2 focus:ring-yellow-400 outline-none" @change="updateLS()"/>
                    <label :for="task.task + ' ' + task.id" :class="{'line-through opacity-70' : task.done}" class="transition-all duration-300">{{task.task}}</label>
                    <button class="ml-2 text-red-400 cursor-pointer border rounded h-6 w-6 justify-center items-center flex focus:ring-2 focus:ring-yellow-400 outline-none" @click="deleteTask(index)" >X</button>
                </div>
            </div>
        </main>
        <footer class="aboslute bottom-0">
            <p class="mb-4">Toutes vos données sont stockées sur votre navigateur.<br><span class="text-red-600">Attention</span> : si vous videz votre cache, vos données seront affectées !</p>
        </footer>
    </div>
</template>

<script>
export default {
    name : "Home",
    data(){
        return {
            tasks: [],
            inputTask: null,
            id: 0,
        }
    },
    methods:{
        addTask(){
            if(this.inputTask.length > 0) {
                this.tasks.push({
                    id: this.id,
                    task: this.inputTask,
                    done: false,
                    
                });
                this.id++;
                this.inputTask = null;
                this.updateLS();
            }
        },
        deleteTask(index){
            this.tasks.splice(index, 1)
            this.updateLS();
        },
        updateLS(){
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
            localStorage.setItem('tasksid', JSON.stringify(this.id));
        }
    },
    beforeMount(){
        if(!localStorage.getItem('tasks')){
            localStorage.setItem('tasks', JSON.stringify([]))
            localStorage.setItem('tasksid', 0)
        } else {
            this.tasks = JSON.parse(localStorage.getItem('tasks'));
            this.id = JSON.parse(localStorage.getItem('tasksid'));
        }
    },
}
</script>

<style lang="scss">
.Home {
    height:100vh;
}
html {
    background-color:#1F2937;
}
</style>