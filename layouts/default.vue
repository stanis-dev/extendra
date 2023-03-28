<template>
  <Head>
    <title>Extendra</title>
    <meta name="description" content="Waka" />
  </Head>
  <main class="bg-cream py-6 px-4 laptop:px-12 min-h-screen overflow-x-hidden">
    <div class="max-w-[1824px] mx-auto flex flex-col min-h-[calc(100vh-48px)]">
      <slot />
      <TheFooter />
    </div>
  </main>
</template>
