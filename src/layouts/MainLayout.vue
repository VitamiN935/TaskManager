<template>
  <div>
    <nav class="teal lighten-1">
      <div class="nav-extended">
        <router-link class="brand-logo left" to="/">Менедежер задач</router-link>
        <ul class="right">
          <router-link tag="li" to="/createTask" active-class="active">
            <a class="waves-light waves-effect" href="#">Создать</a>
          </router-link>
          <router-link tag="li" to="/" exact active-class="active">
            <a class="waves-light waves-effect" href="#">Список</a>
          </router-link>
        </ul>
      </div>
    </nav>

    <section class="wrapper row">
      <transition name="component">
        <router-view />
      </transition>
    </section>

    <footer class="page-footer teal lighten-1">
      <div class="footer-copyright">
        <div class="container center">
          <span>© 2019 MS Copyright</span>
        </div>
      </div>
    </footer>
  </div>
</template>