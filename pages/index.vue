<script setup lang="ts">
const features = [
  {
    id: 0,
    title: "Zikir yang Disesuaikan",
    description:
      "Rasakan fleksibilitas unik Tasbih Digital kami. Sesuaikan penghitungan zikir sesuai preferensi Anda. Pengalaman berzikir yang pribadi dan terjangkau.",
  },
  {
    id: 1,
    title: "Desain Ergonomis",
    description:
      "Dibuat untuk kenyamanan maksimal. Desain ergonomis Tasbih Digital kami memastikan kenyamanan dalam genggaman Anda. Sehingga, setiap detik berzikir menjadi pengalaman yang menyenangkan.",
  },
  {
    id: 2,
    title: "Riwayat Berzikir",
    description:
      "Pantau perjalanan spiritual Anda. Dengan riwayat berzikir, Anda dapat melihat kemajuan dan konsistensi berzikir Anda dari waktu ke waktu. Sebuah kisah pertumbuhan spiritual pribadi.",
  },
  {
    id: 3,
    title: "Baterai Tahan Lama",
    description:
      "Hingga berbulan-bulan tanpa perlu pengisian ulang. Tasbih Digital kami didesain dengan baterai tahan lama, memastikan kesetiaan penggunaan tanpa gangguan.",
  },
];
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section
      class="relative flex flex-col items-center gap-4 mx-auto tes h-[500px] md:h-[700px] w-full"
    >
      <header
        class="font-bold text-5xl md:text-6xl mt-12 md:mt-24 text-zinc-900"
      >
        Tasbih Digital
      </header>
      <p class="text-center w-2/3 md:w-1/2 text-zinc-700 md:text-lg">
        Alat untuk pengingat jumlah hitungan Dzikir Kepada Allah SWT dan
        Sholawat Nabi Muhammad SAW. Tasbih Digital ini merupakan tasbih modern
        yang tidak kalah dengan tasbih konvensional seperti yang kita ketahui
        seperti biji tasbih kayu kokka, tasbih batu giok, tasbih kayu cendana
        dan lain sebagainya.
      </p>
      <div
        class="absolute bottom-0 left-1/2 -translate-x-1/2 scale-105 rotate-[75deg]"
      >
        <img src="~/assets/images/tasbih-removebg-preview.png" />
      </div>
    </section>
    <!-- Features Section -->
    <section
      class="flex flex-col items-center gap-6 md:gap-8 md:mt-8 mx-auto container p-8 md:p-0"
    >
      <header class="font-bold text-4xl md:text-6xl text-zinc-900">
        Fitur Unggulan
      </header>
      <div class="grid md:grid-cols-2 gap-6 md:gap-8">
        <div
          v-for="feature in features"
          :key="feature.id"
          class="p-4 border border-zinc-200 rounded-lg flex flex-col gap-4"
        >
          <h2 class="font-bold text-xl text-zinc-900">{{ feature.title }}</h2>
          <p class="text-zinc-500">{{ feature.description }}</p>
        </div>
      </div>
    </section>
    <!-- Video Section -->
    <section
      class="mt-8 md:mt-12 flex flex-col md:flex-row bg-blue-500 p-8 md:p-24 text-white gap-8"
    >
      <div
        class="flex flex-col items-center md:items-start text-center md:text-left gap-4"
      >
        <h2 class="text-4xl md:text-6xl font-bold">
          Bergabunglah dengan Fanpage Facebook Kami
        </h2>
        <p>
          Dapatkan promo dan info menarik terkait tasbih digital di fanpage
          facebook kami. kami membagikan konten seputar tasbih digital dan tips
          tips dzikir dan amalan amalan yang bisa kita aplikasikan dalam
          kehidupan sehari-hari.
        </p>
        <div>
          <button
            class="text-center md:text-left bg-white text-black rounded-full px-4 py-2 flex items-center gap-1"
          >
            <a href="https://web.facebook.com/tasbihdgtl" target="_blank"
              >Masuk fanpage kami</a
            >
            <Icon name="uil:arrow-right" color="black" />
          </button>
        </div>
      </div>
      <div class="w-full h-full hidden md:block">
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Ftasbihdgtl%2Fvideos%2F283714230895823%2F&show_text=false&width=411&t=0"
          width="411"
          height="476"
          style="border: none; overflow: hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen="true"
        ></iframe>
      </div>
    </section>
    <!-- Testimonials -->
    <section class="mt-8 md:mt-12 container mx-auto p-8 md:p-0">
      <h2 class="font-bold text-4xl md:text-6xl text-center">
        Testimoni Produk Kami
      </h2>
      <figure>
        <img src="~/assets/images/testimonials.jpeg" alt="" />
      </figure>
    </section>
    <!-- Promo -->
    <section class="mt-8 md:mt-12">
      <div class="flex flex-col md:flex-row mt-8">
        <figure class="w-full">
          <img src="~/assets/images/asset-tasbih.jpg" alt="" />
        </figure>
        <div
          class="bg-blue-500 w-full text-white flex flex-col justify-center px-8 py-8 md:py-0 md:px-12"
        >
          <div class="flex justify-between md:justify-normal">
            <div>
              <p>Khusus Hari ini</p>
              <h2 class="tetx-4xl md:text-6xl font-bold">
                Beli 3 <br />
                Gratis 1
              </h2>
              <h1 class="text-4xl md:text-7xl line-through">Rp. 60.000</h1>
              <h1 class="text-4xl md:text-7xl">Rp. 49.900</h1>
              <button
                class="text-left bg-white text-black rounded-full text-sm md:text-xl px-4 py-2 flex items-center gap-1 mt-4"
              >
                <a href="https://api.whatsapp.com/send?phone=6285156195322"
                  >Beli Sekarang</a
                >
                <Icon name="uil:arrow-right" color="black" />
              </button>
            </div>
            <figure class="w-[100px] md:w-[300px]">
              <img src="~/assets/images/discount.png" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
    <!-- Mitra -->
    <section class="mt-8 md:mt-12 container mx-auto p-8 md:p-0">
      <h2 class="text-4xl md:text-6xl font-bold text-center">
        Mitra Pengiriman Kami
      </h2>
      <div
        class="grid grid-cols-2 md:grid-cols-4 justify-items-center items-center mt-8"
      >
        <figure class="w-24 md:w-32">
          <img src="~/assets/images/jne.png" alt="" />
        </figure>
        <figure class="w-24 md:w-32">
          <img src="~/assets/images/jnt.jpg" alt="" />
        </figure>
        <figure class="w-24 md:w-32">
          <img src="~/assets/images/pos-indonesia.jpg" alt="" />
        </figure>
        <figure class="w-24 md:w-32">
          <img src="~/assets/images/sicepat.png" alt="" />
        </figure>
      </div>
    </section>
    <footer
      class="mt-8 md:mt-12 border-t rounded-md px-24 py-4 flex items-center justify-center"
    >
      <div class="text-center">
        <p class="font-bold md:text-xl">&copy;Tasbih Digital Indonesia 2023</p>
      </div>
    </footer>
  </div>
</template>
<style>
.tes {
  background: url("https://demo.web3canvas.com/themeforest/proland/images/header-background.jpg");
  background-position: center -250px;
  background-size: cover;
  background-repeat: no-repeat;
}
.video {
  width: 411px;
}
@media screen and (max-width: 480px) {
  .tes {
    background-position: center;
  }
  .video {
    width: 100%;
    height: 100%;
  }
}
</style>
