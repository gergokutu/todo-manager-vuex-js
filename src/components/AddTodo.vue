<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <form>
        <input type="text" v-model="title" placeholder="Add Todo..."/>
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddTodo'
}
</script>

<style scoped>
  form {
    display: flex;
  }

  input[type="text"] {
    flex: 10;
    padding: 10px;
    color: #ffffff;
    border: 1px #41b883 solid;
    outline: 0;
  }

  input[type="submit"] {
    flex: 2;
    background: #41b883;
    color: #ffffff;
    border: 1px #41b883 solid;
    cursor: pointer;
  }
</style>