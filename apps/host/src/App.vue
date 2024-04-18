<template>
  <nav>
    <div className="nav">
      <div className="mr10">
        <RouterLink to="/">뷰</RouterLink>
      </div>
      <div className="mr10">
        <RouterLink to="/about">리액트</RouterLink>
      </div>
      <div>
        <RouterLink to="/attendance">근무관리</RouterLink>
      </div>
    </div>
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.nav {
  display: flex;
}
.mr10 {
  margin-right: 10px;
}
</style>
