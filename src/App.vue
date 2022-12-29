<script setup lang="ts">
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from 'flowbite-vue'
</script>

<template>
  <div class="container mx-auto">
    <Navbar solid>
      <template #logo>
        <NavbarLogo link="/" alt="">
          <h1 class="dark:text-white text-2xl"> @aniltalla</h1>
        </NavbarLogo>
      </template>
      <template #default="{ isShowMenu }">
        <NavbarCollapse :isShowMenu="isShowMenu">
          <NavbarLink is-active class="text-xl" link="/">Blog</NavbarLink>
          <!--  <NavbarLink class="text-xl" link="/about-me">About me</NavbarLink>-->
        </NavbarCollapse>
      </template>
    </Navbar>


    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>


