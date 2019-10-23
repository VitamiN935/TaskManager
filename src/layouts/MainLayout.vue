<template>
  <div>
    <nav class="teal lighten-1">
      <div class="nav-extended">
        <a class="brand-logo left" href="#">Менедежер задач</a>
        <ul class="right">
          <li>
            <a class="waves-light waves-effect" href="#">Создать</a>
          </li>
          <li>
            <a class="waves-light waves-effect" href="#">Список</a>
          </li>
        </ul>
      </div>
    </nav>

    <section class="wrapper row">
      <router-view />
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