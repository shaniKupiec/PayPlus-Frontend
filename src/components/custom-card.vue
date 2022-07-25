<template>
  <section class="custom-card">
    <slot name="img" class="custom-card__img"></slot>
    <main class="custom-card__main">
      <span class="custom-card__main__title">
        <slot name="title"></slot>
      </span>
      <span>
        <slot name="data"></slot>
      </span>
    </main>
  </section>
</template>
