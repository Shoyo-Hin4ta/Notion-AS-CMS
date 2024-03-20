import {Client} from "@notionhq/client"

import React from 'react'

const Body = () => {


    return (
        <div class="bg-gray-50/90">
        <section class="w-full py-12 md:py-24 lg:py-32">
          <div class="container px-4 md:px-6">
            <div class="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Image"
                class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div class="flex flex-col justify-center space-y-4">
                <div class="space-y-2">
                  <div class="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                    The Future of Work
                  </div>
                  <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">Unleash Your Team's Potential</h2>
                  <p class="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Empower your organization with the tools to innovate, connect, and collaborate. Let's build the future
                    together.
                  </p>
                </div>
                <form class="grid gap-4 md:gap-8 max-w-sm">
                  <div class="grid gap-1">
                    <label for="email" class="block text-sm font-medium text-gray-900">
                      Enter your email
                    </label>
                    <input
                      class="flex h-10 rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1 text-sm w-full"
                      id="email"
                      placeholder="Email"
                      type="email"
                    />
                  </div>
                  <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8">
                    Get Started
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section class="border-t border-b py-12 md:py-24">
          <div class="container px-4 md:px-6">
            <div class="grid items-center gap-6 lg:grid-cols-[1fr_800px] lg:gap-12 xl:grid-cols-[1fr_900px]">
              <div class="space-y-2">
                <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  The All-in-One Platform for Team Collaboration
                </h2>
                <p class="max-w-[600px] text-gray-500 dark:text-gray-400">
                  Transform the way your team works with integrated messaging, file sharing, and project management.
                  Everything your team needs to be productive, all in one place.
                </p>
              </div>
              <div class="grid gap-4 md:gap-8">
                <a
                  class="inline-flex items-center space-x-2 text-base font-medium transition-colors hover:underline"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4 peer-group-hover:translate-x-1 transition-transform"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  Tour the Platform
                </a>
                <a
                  class="inline-flex items-center space-x-2 text-base font-medium underline underline-offset-2 peer-underline-offset-2 underline-offset-2 rounded-md hover:underline-optional"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4 peer-group-hover:translate-x-1 transition-transform"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>
        <section class="py-12 md:py-24">
          <div class="container px-4 md:px-6">
            <div class="grid items-center gap-6 lg:grid-cols-[1fr_800px] lg:gap-12 xl:grid-cols-[1fr_900px]">
              <div class="space-y-2">
                <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  The All-in-One Platform for Team Collaboration
                </h2>
                <p class="max-w-[600px] text-gray-500 dark:text-gray-400">
                  Transform the way your team works with integrated messaging, file sharing, and project management.
                  Everything your team needs to be productive, all in one place.
                </p>
              </div>
              <div class="grid gap-4 md:gap-8">
                <a
                  class="inline-flex items-center space-x-2 text-base font-medium underline underline-offset-2 peer-underline-offset-2 underline-offset-2 rounded-md hover:underline-optional"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4 peer-group-hover:translate-x-1 transition-transform"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  Contact Sales
                </a>
                <a
                  class="inline-flex items-center space-x-2 text-base font-medium transition-colors hover:underline"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4 peer-group-hover:translate-x-1 transition-transform"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  Tour the Platform
                </a>
              </div>
            </div>
          </div>
        </section>
        <section class="py-12 md:py-24">
          <div class="container px-4 md:px-6">
            <div class="grid items-center gap-6 lg:grid-cols-[1fr_800px] lg:gap-12 xl:grid-cols-[1fr_900px]">
              <div class="space-y-2">
                <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  The All-in-One Platform for Team Collaboration
                </h2>
                <p class="max-w-[600px] text-gray-500 dark:text-gray-400">
                  Transform the way your team works with integrated messaging, file sharing, and project management.
                  Everything your team needs to be productive, all in one place.
                </p>
              </div>
              <div class="grid gap-4 md:gap-8">
                <a
                  class="inline-flex items-center space-x-2 text-base font-medium underline underline-offset-2 peer-underline-offset-2 underline-offset-2 rounded-md hover:underline-optional"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4 peer-group-hover:translate-x-1 transition-transform"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  Contact Sales
                </a>
                <a
                  class="inline-flex items-center space-x-2 text-base font-medium transition-colors hover:underline"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4 peer-group-hover:translate-x-1 transition-transform"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  Tour the Platform
                </a>
              </div>
            </div>
          </div>
        </section>
        <section class="py-12 md:py-24">
          <div class="container px-4 md:px-6">
            <div class="grid items-center gap-6 lg:grid-cols-[1fr_800px] lg:gap-12 xl:grid-cols-[1fr_900px]">
              <div class="space-y-2">
                <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  The All-in-One Platform for Team Collaboration
                </h2>
                <p class="max-w-[600px] text-gray-500 dark:text-gray-400">
                  Transform the way your team works with integrated messaging, file sharing, and project management.
                  Everything your team needs to be productive, all in one place.
                </p>
              </div>
              <div class="grid gap-4 md:gap-8">
                <a
                  class="inline-flex items-center space-x-2 text-base font-medium underline underline-offset-2 peer-underline-offset-2 underline-offset-2 rounded-md hover:underline-optional"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4 peer-group-hover:translate-x-1 transition-transform"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  Contact Sales
                </a>
                <a
                  class="inline-flex items-center space-x-2 text-base font-medium transition-colors hover:underline"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4 peer-group-hover:translate-x-1 transition-transform"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  Tour the Platform
                </a>
              </div>
            </div>
          </div>
        </section>
        <section class="py-12 md:py-24">
          <div class="container px-4 md:px-6">
            <div class="grid items-center gap-6 lg:grid-cols-[1fr_800px] lg:gap-12 xl:grid-cols-[1fr_900px]">
              <div class="space-y-2">
                <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  The All-in-One Platform for Team Collaboration
                </h2>
                <p class="max-w-[600px] text-gray-500 dark:text-gray-400">
                  Transform the way your team works with integrated messaging, file sharing, and project management.
                  Everything your team needs to be productive, all in one place.
                </p>
              </div>
              <div class="grid gap-4 md:gap-8">
                <a
                  class="inline-flex items-center space-x-2 text-base font-medium underline underline-offset-2 peer-underline-offset-2 underline-offset-2 rounded-md hover:underline-optional"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4 peer-group-hover:translate-x-1 transition-transform"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  Contact Sales
                </a>
                <a
                  class="inline-flex items-center space-x-2 text-base font-medium transition-colors hover:underline"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4 peer-group-hover:translate-x-1 transition-transform"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  Tour the Platform
                </a>
              </div>
            </div>
          </div>
        </section>
        <section class="py-12 md:py-24">
          <div class="container px-4 md:px-6">
            <div class="grid items-center gap-6 lg:grid-cols-[1fr_800px] lg:gap-12 xl:grid-cols-[1fr_900px]">
              <div class="space-y-2">
                <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  The All-in-One Platform for Team Collaboration
                </h2>
                <p class="max-w-[600px] text-gray-500 dark:text-gray-400">
                  Transform the way your team works with integrated messaging, file sharing, and project management.
                  Everything your team needs to be productive, all in one place.
                </p>
              </div>
              <div class="grid gap-4 md:gap-8">
                <a
                  class="inline-flex items-center space-x-2 text-base font-medium underline underline-offset-2 peer-underline-offset-2 underline-offset-2 rounded-md hover:underline-optional"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4 peer-group-hover:translate-x-1 transition-transform"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  Contact Sales
                </a>
                <a
                  class="inline-flex items-center space-x-2 text-base font-medium transition-colors hover:underline"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4 peer-group-hover:translate-x-1 transition-transform"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  Tour the Platform
                </a>
              </div>
            </div>
          </div>
        </section>
        <section class="py-12 md:py-24">
          <div class="container px-4 md:px-6">
            <div class="grid items-center gap-6 lg:grid-cols-[1fr_800px] lg:gap-12 xl:grid-cols-[1fr_900px]">
              <div class="space-y-2">
                <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  The All-in-One Platform for Team Collaboration
                </h2>
                <p class="max-w-[600px] text-gray-500 dark:text-gray-400">
                  Transform the way your team works with integrated messaging, file sharing, and project management.
                  Everything your team needs to be productive, all in one place.
                </p>
              </div>
              <div class="grid gap-4 md:gap-8">
                <a
                  class="inline-flex items-center space-x-2 text-base font-medium underline underline-offset-2 peer-underline-offset-2 underline-offset-2 rounded-md hover:underline-optional"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4 peer-group-hover:translate-x-1 transition-transform"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  Contact Sales
                </a>
                <a
                  class="inline-flex items-center space-x-2 text-base font-medium transition-colors hover:underline"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4 peer-group-hover:translate-x-1 transition-transform"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  Tour the Platform
                </a>
              </div>
            </div>
          </div>
        </section>
        <section class="py-12 md:py-24">
          <div class="container px-4 md:px-6">
            <div class="grid items-center gap-6 lg:grid-cols-[1fr_800px] lg:gap-12 xl:grid-cols-[1fr_900px]">
              <div class="space-y-2">
                <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  The All-in-One Platform for Team Collaboration
                </h2>
                <p class="max-w-[600px] text-gray-500 dark:text-gray-400">
                  Transform the way your team works with integrated messaging, file sharing, and project management.
                  Everything your team needs to be productive, all in one place.
                </p>
              </div>
              <div class="grid gap-4 md:gap-8">
                <a
                  class="inline-flex items-center space-x-2 text-base font-medium underline underline-offset-2 peer-underline-offset-2 underline-offset-2 rounded-md hover:underline-optional"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4 peer-group-hover:translate-x-1 transition-transform"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  Contact Sales
                </a>
                <a
                  class="inline-flex items-center space-x-2 text-base font-medium transition-colors hover:underline"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4 peer-group-hover:translate-x-1 transition-transform"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  Tour the Platform
                </a>
              </div>
            </div>
          </div>
        </section>
        <section class="py-12 md:py-24">
          <div class="container px-4 md:px-6">
            <div class="grid items-center gap-6 lg:grid-cols-[1fr_800px] lg:gap-12 xl:grid-cols-[1fr_900px]">
              <div class="space-y-2">
                <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  The All-in-One Platform for Team Collaboration
                </h2>
                <p class="max-w-[600px] text-gray-500 dark:text-gray-400">
                  Transform the way your team works with integrated messaging, file sharing, and project management.
                  Everything your team needs to be productive, all in one place.
                </p>
              </div>
              <div class="grid gap-4 md:gap-8">
                <a
                  class="inline-flex items-center space-x-2 text-base font-medium underline underline-offset-2 peer-underline-offset-2 underline-offset-2 rounded-md hover:underline-optional"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4 peer-group-hover:translate-x-1 transition-transform"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  Contact Sales
                </a>
                <a
                  class="inline-flex items-center space-x-2 text-base font-medium transition-colors hover:underline"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4 peer-group-hover:translate-x-1 transition-transform"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  Tour the Platform
                </a>
              </div>
            </div>
          </div>
        </section>
        <section class="py-12 md:py-24">
          <div class="container px-4 md:px-6">
            <div class="grid items-center gap-6 lg:grid-cols-[1fr_800px] lg:gap-12 xl:grid-cols-[1fr_900px]">
              <div class="space-y-2">
                <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  The All-in-One Platform for Team Collaboration
                </h2>
                <p class="max-w-[600px] text-gray-500 dark:text-gray-400">
                  Transform the way your team works with integrated messaging, file sharing, and project management.
                  Everything your team needs to be productive, all in one place.
                </p>
              </div>
              <div class="grid gap-4 md:gap-8">
                <a
                  class="inline-flex items-center space-x-2 text-base font-medium underline underline-offset-2 peer-underline-offset-2 underline-offset-2 rounded-md hover:underline-optional"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4 peer-group-hover:translate-x-1 transition-transform"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  Contact Sales
                </a>
                <a
                  class="inline-flex items-center space-x-2 text-base font-medium transition-colors hover:underline"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4 peer-group-hover:translate-x-1 transition-transform"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
}

export default Body