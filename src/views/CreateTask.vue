<template>
  <div class="container">
    <h2 class="center">Создание задачи</h2>
    <hr />
    <form class="col s12 m12 form">
      <div class="row">
        <div class="input-field col s10 m8">
          <i class="material-icons prefix">title</i>
          <input class="validate" type="text" id="first_name" placeholder="Placeholder" />
          <label for="first_name">Название задачи</label>
        </div>
        <div class="input-field col s10 m8 textarea">
          <i class="material-icons prefix">description</i>
          <textarea
            class="materialize-textarea"
            type="text"
            id="textarea1"
            placeholder="Placeholder"
          ></textarea>
          <label for="textarea1">Описание</label>
        </div>
        <div class="input-field col s8 m6">
          <div class="chips"></div>
        </div>
        <div class="input-field col s6 m4">
          <input class="datepicker" type="text" />
        </div>
        <div class="input-field col s10 m8">
          <button class="btn right waves-effect">Создать задачу</button>
        </div>
      </div>
    </form>
  </div>
</template>