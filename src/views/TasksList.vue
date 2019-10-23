<template>
  <div class="container m12">
    <h2 class="center">Список задач</h2>
    <hr />
    <div class="row">
      <table class="centered">
        <thead>
          <tr>
            <th>#</th>
            <th>Название</th>
            <th>Описание</th>
            <th>Дата</th>
            <th>Тэги</th>
            <th>Статус</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>title</td>
            <td>descriprion</td>
            <td>12.32.43</td>
            <td>vue</td>
            <td>
              <span class="white-text badge green">active</span>
            </td>
            <td>
              <button class="btn btn-sm waves-effect">
                <i class="tiny material-icons">input</i>
              </button>
            </td>
            <td>
              <button class="btn btn-sm red waves-effect">
                <i class="tiny material-icons">remove_circle</i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>