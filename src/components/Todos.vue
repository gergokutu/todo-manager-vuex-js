<template>
  <div>
    <h3>Todos</h3>
    <div class="legend">
      <span>Double click to mark as completed</span>
      <span>
        <span class="incompleted-box"></span> = Incompleted
      </span>
      <span>
        <span class="completed-box"></span> = Completed
      </span>
    </div>
    <div class="todos">
      <div v-for="todo in allTodos" :key="todo.id" class="todo">
        {{ todo.title }}
        <i class="fas fa-trash-alt" @click="deleteTodo(todo.id)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Todos',
  methods: {
    ...mapActions(['fetchTodos', 'deleteTodo'])
  },
  computed: mapGetters(['allTodos']),
  created() {
    this.fetchTodos();
  }
}
</script>

<style scoped>
  .todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }

  .todo {
    border: 1px solid #cccccc;
    background: #41b883;
    padding: 1 rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
  }

  i {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #ffffff;
    cursor: pointer;
  }

  .legend {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
  }

  .completed-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #35495e;
  }

  .incompleted-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #41b883;
  }
</style>