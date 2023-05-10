const themes = [
  {
    name: 'blue',
    bg: 'bg-sky-400',
    color: 'text-stone-50',
    button: 'bg-blue-700',
    buttonHover: 'hover:bg-blue-600',
  },
  {
    name: 'yellow',
    bg: 'bg-yellow-400',
    color: 'text-black',
    button: 'bg-amber-700',
    buttonHover: 'hover:bg-amber-600',
  },
  {
    name: 'green',
    bg: 'bg-emerald-700',
    color: 'text-stone-50',
    button: 'bg-green-700',
    buttonHover: 'hover:bg-green-600',
  },
]

const mainCodeData = (selectedTheme) => { return `<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    
    <title>Document</title>
  </head>
  <body class="` +
    selectedTheme.bg +
    ` ` +
    selectedTheme.color +
    `">
    <nav class="flex lg:pt-4 md:pt-5 pt-5 lg:px-60 md:px-24 px-5 lg:text-lg md:text-2xl text-lg">
      <h1 class="font-bold">Title</h1>
      <ul class="flex ml-auto">
        <li class="mr-6"><a href="#" class="duration-300 hover:opacity-50">Home</a></li>
        <li class="mr-4"><a href="#" class="duration-300 hover:opacity-50">Features</a></li>
        <li class="lg:mt-1 md:mt-2 mt-1"><a href="#" class="duration-300 hover:opacity-50"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
        </svg></a></li>
      </ul>
    </nav>
    <div class="hero flex lg:px-60 md:px-24 px-5 fixed">
      <div class="dataProfile lg:mt-32 md:mt-24 mt-32 relative z-10 lg:mr-0 md:-mr-10 -mr-44">
          <h2 class="font-bold lg:text-4xl md:text-3xl text-xl lg:mb-5 md:mb-3 mb-2">I am Keanu Ford<br>A Web Designe</h2>
          <p class="font-thin lg:text-base md:text-xl text-sm lg:mb-5 md:mb-4 mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <a href="#" class="lg:text-sm md:text-lg text-sm lg:px-3 lg:py-2 md:py-2 md:px-3 py-2 px-3 transition duration-300 shadow ` +
    selectedTheme.buttonHover +
    ` ` +
    selectedTheme.button +
    ` rounded-sm focus:outline-none focus:ring focus:ring-violet-300" onclick="event.preventDefault()">HIRE ME →</a>
      </div>
      <div class="photoProfile lg:mt-0 md:mt-9 mt-16">
          <img src="../image/person.png" width="1200" class="lg:w-11/12" style="transform: scaleX(-1);" alt="photoProfile">
      </div>
    </div>
    <div class="main bg-stone-50 lg:top-3/4 md:top-1/3 top-2/4 lg:mt-36 md:mt-72 mt-52 w-full lg:px-60 md:px-24 px-5 lg:pt-16 lg:pb-4 md:pt-11 pb-2 absolute z-10">
      <div class="lg:flex md:flex">
        <div class="photo bg-neutral-300 px-10 h-full">
          <img src="https://thistro.b3t.repl.co/person.png" width="1000" class="mt-8 lg:w-full" style=" -webkit-filter: drop-shadow(5px 1px 2px rgba(34, 34, 34, 0.63));
          filter: drop-shadow(5px 1px 2px rgba(34, 34, 34, 0.63));" alt="photoProfile">
      </div>
      <div class="story lg:py-10 md:py-5 py-5 lg:ml-14 md:ml-10">
          <a href="#" class="lg:py-2 lg:px-3 md:py-1 md:px-2 py-3 px-4 mr-1 transition duration-300 bg-white text-blue-700 shadow-sm hover:bg-blue-700 hover:text-white text-xs rounded-sm focus:bg-blue-700 focus:text-white focus:outline-none focus:ring focus:ring-violet-300" onclick="event.preventDefault()">ABOUT ME</a>
          <a href="#" class="lg:py-2 lg:px-3 md:py-1 md:px-2 py-3 px-4 mr-1 transition duration-300 bg-white text-blue-700 shadow-sm hover:bg-blue-700 hover:text-white text-xs rounded-sm focus:bg-blue-700 focus:text-white focus:outline-none focus:ring focus:ring-violet-300" onclick="event.preventDefault()">SKILLS</a>
          <a href="#" class="lg:py-2 lg:px-3 md:py-1 md:px-2 py-3 px-4 transition duration-300 bg-white text-blue-700 shadow-sm hover:bg-blue-700 hover:text-white text-xs rounded-sm focus:bg-blue-700 focus:text-white focus:outline-none focus:ring focus:ring-violet-300" onclick="event.preventDefault()">EXPERIENCE</a>
          <h3 class="text-black lg:text-2xl md:text-lg font-bold lg:mt-5 mt-5">My Story</h3>
          <p  class="text-black lg:text-sm md:text-xs text-gray-400 lg:mt-5  mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam hic quis iste praesentium temporibus error ab consequatur reiciendis! Veritatis suscipit repudiandae labore tempore ipsa inventore aperiam earum atque quae animi laborum eaque excepturi unde, illum iure, blanditiis voluptatem veniam tempora, ipsum quaerat accusamus minus. Placeat voluptas culpa nobis neque vero.</p>
          <h4 class="text-black lg:text-lg md:text-sm font-bold lg:mt-5 mt-2">I Do Web Design & Development since I was 18 Years Old</h4>
      </div>
      </div>
      <div class="lg:mt-14 md:mt-32 mt-5 text-black text-center">
        <p>Title © 2023</p>
      </div>
    </div>
  </body>`
}