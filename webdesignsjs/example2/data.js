const themes = [
  {
    name: 'lime',
    color: 'lime',
  },
  {
    name: 'sky',
    color: 'sky',
  },
  {
    name: 'violet',
    color: 'violet',
  },
]

const mainCodeData = (selectedTheme) => { return `<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;900&display=swap"
      rel="stylesheet"
    />

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css"
    />
    <script src="https://cdn.tailwindcss.com"></script>

    <style>
      *{box-sizing: border-box;}
      body {
        font-family: 'Montserrat', sans-serif;
        background-color: white;
      }
      .cardHeightmd {
      height: 151%;
      }
      @media (max-width: 767.98px) { 
      .cardHeightmd {
      height: 325%;
      }
      .navMobile li a:focus i:nth-child(1) {
opacity: 1 !important;
text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
      }
      .navMobile li a {
-webkit-tap-highlight-color: transparent !important;
outline: none !important;
      }
       }
    </style>
  </head>
  <body>
    <div
      class="bg-${selectedTheme.color}-800 w-full h-12 grid grid-cols-2 lg:px-32 md:px-5 px-1"
    >
      <div class="md:text-sm text-xs text-white mt-3">
        <small class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            fill="currentColor"
            class="bi bi-box2-fill md:mr-2 mr-1"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5ZM15 4.667V5H1v-.333L1.5 4h6V1h1v3h6l.5.667Z"
            />
          </svg>
          Free shipping on orders over $100
        </small>
      </div>
      <div class="text-right mt-3">
        <a
          href=""
          class="bg-stone-900 md:text-sm text-xs text-white px-3 p-2 rounded-lg duration-300 hover:opacity-75"
        >
          <small>
            Don't miss out.
            <b>Subscribe Now</b>
          </small>
        </a>
      </div>
    </div>
    <div
      class="bg-${selectedTheme.color}-600 w-full h-20 grid md:grid-cols-12 grid-cols-6 lg:px-32 md:px-5 px-2"
    >
      <div class="text-white flex items-center text-2xl md:inline-flex hidden md:col-span-2">
        your
        <b>logo</b>
      </div>
      <div class="text-white flex items-center lg:col-span-7 col-span-5 lg:-ml-8">

        <div class="flex justify-center">
          <div>
            <div class="dropdown relative">
              <a
                class="
                  dropdown-toggle
                  px-3
                  h-12
                  bg-stone-900
                  text-white
                  font-medium
                  font-light
                  text-xs
                  leading-tight
                  rounded-l-lg
                  shadow-md
                  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg active:text-white
                  transition
                  duration-150
                  ease-in-out
                  flex
                  items-center
                  whitespace-nowrap
                  md:inline-flex hidden
                "
                href="#"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              All Products
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  class="w-2 ml-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </a>
              <ul
                class="
                  dropdown-menu
                  min-w-max
                  absolute
                  hidden
                  bg-white
                  text-base
                  z-50
                  float-left
                  py-2
                  list-none
                  text-left
                  rounded-lg
                  shadow-lg
                  mt-1
                  hidden
                  m-0
                  bg-clip-padding
                  border-none
                "
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <a
                    class="
                      dropdown-item
                      text-sm
                      py-2
                      px-4
                      font-normal
                      block
                      w-full
                      whitespace-nowrap
                      bg-transparent
                      text-gray-700
                      hover:bg-gray-100
                    "
                    href="#"
                    >Action</a
                  >
                </li>
                <li>
                  <a
                    class="
                      dropdown-item
                      text-sm
                      py-2
                      px-4
                      font-normal
                      block
                      w-full
                      whitespace-nowrap
                      bg-transparent
                      text-gray-700
                      hover:bg-gray-100
                    "
                    href="#"
                    >Another action</a
                  >
                </li>
                <li>
                  <a
                    class="
                      dropdown-item
                      text-sm
                      py-2
                      px-4
                      font-normal
                      block
                      w-full
                      whitespace-nowrap
                      bg-transparent
                      text-gray-700
                      hover:bg-gray-100
                    "
                    href="#"
                    >Something else here</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        
        <form
          action=""
          class="flex items-center text-black lg:w-3/4 md:w-4/6 w-full"
        >
          <input
            type="text"
            placeholder="Enter keywords"
            name="search"
            class="h-12 w-full pl-4 focus:outline-none md:rounded-none rounded-l"
            style="font-size: 11px;"
          />
          <button class="p-3 bg-white text-${selectedTheme.color}-800 rounded-r h-12 pr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
          </button>
        </form>
      </div>
      <div class="text-white flex items-center md:col-span-3 md:ml-0 ml-4">
        <div class="flex justify-center">
          <div>
            <div class="dropdown relative">
              <a
                class="
                  dropdown-toggle
                  px-4
                  py-2.5
                  text-white
                  font-medium
                  text-xs
                  border-r
                  leading-tight
                  uppercase
                  transition
                  duration-150
                  ease-in-out
                  flex
                  items-center
                  whitespace-nowrap
                  md:inline-flex hidden
                "
                href="#"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Account
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  class="w-2 ml-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </a>
              <ul
                class="
                  dropdown-menu
                  min-w-max
                  absolute
                  hidden
                  bg-white
                  text-base
                  z-50
                  float-left
                  py-2
                  list-none
                  text-left
                  rounded-lg
                  shadow-lg
                  mt-1
                  hidden
                  m-0
                  bg-clip-padding
                  border-none
                "
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <a
                    class="
                      dropdown-item
                      text-sm
                      py-2
                      px-4
                      font-normal
                      block
                      w-full
                      whitespace-nowrap
                      bg-transparent
                      text-gray-700
                      hover:bg-gray-100
                    "
                    href="#"
                    >Action</a
                  >
                </li>
                <li>
                  <a
                    class="
                      dropdown-item
                      text-sm
                      py-2
                      px-4
                      font-normal
                      block
                      w-full
                      whitespace-nowrap
                      bg-transparent
                      text-gray-700
                      hover:bg-gray-100
                    "
                    href="#"
                    >Another action</a
                  >
                </li>
                <li>
                  <a
                    class="
                      dropdown-item
                      text-sm
                      py-2
                      px-4
                      font-normal
                      block
                      w-full
                      whitespace-nowrap
                      bg-transparent
                      text-gray-700
                      hover:bg-gray-100
                    "
                    href="#"
                    >Something else here</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="flex justify-center">
          <div>
            <div class="dropdown relative">
              <a
                class="
                  dropdown-toggle
                  px-6
                  py-2.5
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  transition
                  duration-150
                  ease-in-out
                  flex
                  items-center
                  whitespace-nowrap
                  md:inline-flex hidden
                "
                href="#"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/US_flag_51_stars.svg/2560px-US_flag_51_stars.svg.png" alt="" class="rounded-full border-2 lg:w-2/3 md:w-full lg:h-6 md:h-5" >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  class="w-2 ml-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </a>
              <ul
                class="
                  dropdown-menu
                  min-w-max
                  absolute
                  hidden
                  bg-white
                  text-base
                  z-50
                  float-left
                  py-2
                  list-none
                  text-left
                  rounded-lg
                  shadow-lg
                  mt-1
                  hidden
                  m-0
                  bg-clip-padding
                  border-none
                "
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <a
                    class="
                      dropdown-item
                      text-sm
                      py-2
                      px-4
                      font-normal
                      block
                      w-full
                      whitespace-nowrap
                      bg-transparent
                      text-gray-700
                      hover:bg-gray-100
                    "
                    href="#"
                    >Action</a
                  >
                </li>
                <li>
                  <a
                    class="
                      dropdown-item
                      text-sm
                      py-2
                      px-4
                      font-normal
                      block
                      w-full
                      whitespace-nowrap
                      bg-transparent
                      text-gray-700
                      hover:bg-gray-100
                    "
                    href="#"
                    >Another action</a
                  >
                </li>
                <li>
                  <a
                    class="
                      dropdown-item
                      text-sm
                      py-2
                      px-4
                      font-normal
                      block
                      w-full
                      whitespace-nowrap
                      bg-transparent
                      text-gray-700
                      hover:bg-gray-100
                    "
                    href="#"
                    >Something else here</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="flex justify-center">
          <div>
            <div class="dropdown relative">
              <a
                class="
                  dropdown-toggle
                  py-2.5
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  transition
                  duration-150
                  ease-in-out
                  flex
                  items-center
                  whitespace-nowrap
                "
                href="#"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              <i class="bi bi-cart -scale-x-100 md:text-xs text-base"></i>&nbsp;<p class="md:inline-flex hidden">Cart</p>
                <p class="md:ml-2 ml-1 bg-stone-900 rounded-full px-2 py-1" style="font-size:xx-small;">0</p>
              </a>
              <ul
                class="
                  dropdown-menu
                  min-w-max
                  absolute
                  hidden
                  bg-white
                  text-base
                  z-50
                  float-left
                  py-2
                  list-none
                  text-left
                  rounded-lg
                  shadow-lg
                  mt-1
                  hidden
                  m-0
                  bg-clip-padding
                  border-none
                "
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <a
                    class="
                      dropdown-item
                      text-sm
                      py-2
                      px-4
                      font-normal
                      block
                      w-full
                      whitespace-nowrap
                      bg-transparent
                      text-gray-700
                      hover:bg-gray-100
                    "
                    href="#"
                    >Action</a
                  >
                </li>
                <li>
                  <a
                    class="
                      dropdown-item
                      text-sm
                      py-2
                      px-4
                      font-normal
                      block
                      w-full
                      whitespace-nowrap
                      bg-transparent
                      text-gray-700
                      hover:bg-gray-100
                    "
                    href="#"
                    >Another action</a
                  >
                </li>
                <li>
                  <a
                    class="
                      dropdown-item
                      text-sm
                      py-2
                      px-4
                      font-normal
                      block
                      w-full
                      whitespace-nowrap
                      bg-transparent
                      text-gray-700
                      hover:bg-gray-100
                    "
                    href="#"
                    >Something else here</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="w-full flex lg:px-32 md:px-5 px-2 py-5 md:justify-center">
      <div class="-mr-20 z-10 py-8 lg:block hidden">
<p class="text-${selectedTheme.color}-700"><small class="text-xs">25% OFF PROMITIONAL SALE</small></p>
<h1 class="text-6xl font-bold text-stone-900 pb-3">Become a Trendsetter with<br>the Best Outfits.</h1>
<p class="w-1/2 mb-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi velit debitis, quaerat itaque necessitatibus quod aut ullam quas sequi ad.</p>
<a href="" class="p-5 text-white bg-gradient-to-r from-${selectedTheme.color}-900 to-${selectedTheme.color}-500 duration-700 hover:from-${selectedTheme.color}-900 hover:to-${selectedTheme.color}-600 opacity-90 hover:opacity-100 rounded-lg">Browse Products</a>
<div class="border-l border-stone-300 mt-24 h-14 flex items-center">
  <div class="opacity-40 hover:opacity-100 flex items-center duration-700"><p class="ml-2 cursor-pointer">talk to an admin <i class="bi bi-chevron-right text-xs"></i></p>
</div>
</div>
      </div>
      <div class="lg:block hidden">
        <img src="https://img.freepik.com/free-vector/man-brewing-beer-putting-bottles-home-guy-cooking-beer-machine-house-kitchen-preserving-bottles-box_575670-1611.jpg?w=740&t=st=1676167930~exp=1676168530~hmac=3d19c098f2232cc6e4c3282fb5d244ea0856deb7f7c92035c4474170f4cdd51a" alt="" width="1000">
      </div>
      <div class="grid grid-cols-1 lg:hidden block">
        <p class="text-${selectedTheme.color}-700 text-center"><small class="text-xs">25% OFF PROMITIONAL SALE</small></p>
        <img src="https://img.freepik.com/free-vector/man-brewing-beer-putting-bottles-home-guy-cooking-beer-machine-house-kitchen-preserving-bottles-box_575670-1611.jpg?w=740&t=st=1676167930~exp=1676168530~hmac=3d19c098f2232cc6e4c3282fb5d244ea0856deb7f7c92035c4474170f4cdd51a" alt="" class="lg:w-full md:w-96 place-self-center">
        <h1 class="text-2xl font-bold text-stone-900 py-6 text-center">Become a Trendsetter with the Best Outfits.</h1>
        <a href="" class="p-5 text-white bg-gradient-to-r from-${selectedTheme.color}-900 to-${selectedTheme.color}-500 duration-700 hover:from-${selectedTheme.color}-900 hover:to-${selectedTheme.color}-600 opacity-90 hover:opacity-100 rounded-lg w-1/2 text-center place-self-center">Browse Products</a>
      </div>
      <div class="bg-white text-stone-900 border-t-2 fixed pb-14 pt-3 -bottom-1 left-0 right-0 h-10 md:hidden block text-white z-10">
        <ul class="flex justify-center navMobile">
          <li class="mr-10"><a href="#" onclick="event.preventDefault()"><i class="bi bi-house-fill flex justify-center text-2xl duration-300 navMob1" style="opacity:0;"></i><i class="bi bi-house flex justify-center text-2xl -mt-6"></i><p><small>Home</small></p></a></li>

          <li class="mr-10"><a href="#" onclick="event.preventDefault()"><i class="bi bi-heart-fill flex justify-center text-2xl duration-300 navMob1" style="opacity:0;"></i><i class="bi bi-heart flex justify-center text-2xl -mt-6"></i><p><small>Wishlist</small></p></a></li>

          <li><a href="#" onclick="event.preventDefault()"><i class="bi bi-person-fill flex justify-center text-2xl duration-300 navMob1" style="opacity:0;"></i><i class="bi bi-person flex justify-center text-2xl -mt-6"></i><p><small>Account</small></p></a></li>
        </ul>
      </div>
    </div>
    <div class="w-full bg-slate-100 lg:px-32 md:px-5 px-2 grid md:grid-cols-3 grid-cols-1 text-white pb-5">
      <div class="col-span-3 flex justify-center mt-16">
        <div class="h-52 md:flex hidden items-center md:-mr-4 z-10">
          <i class="bi bi-arrow-left-circle-fill rounded-full text-4xl drop-shadow duration-300 hover:text-stone-100"></i>
          </div> 
                <a href="" class="w-11/12 h-52 rounded-lg place-self-center shadow bg-cover bg-bottom md:mb-0 mb-5 lg:mr-8 md:mr-6" style="background-image: url(https://img.freepik.com/free-photo/room-interior-design_23-2148899451.jpg?w=740&t=st=1676252631~exp=1676253231~hmac=daac4ef58f747f1970400a08ba3749ad87b2e1f9878718204906140e95155c89);">
                  <div class="duration-500 bg-black/20 hover:bg-black/0 hover:text-gray-800 w-full h-full rounded-lg lg:p-5 md:p-4 p-5">
                    <h2 class="font-semibold text-${selectedTheme.color}-400">Kitchen</h2>
                    <p class="text-xs mt-2 md:mb-16 mb-8">dolor sit amet consectetur adipisicing elit. Ab, obcaecati.</p>
                    <button class="duration-500 px-7 py-2 bg-white text-stone-900 rounded-lg hover:bg-stone-300" ><small>Shop Now</small></button>
                  </div>   
              </a>
          
              <a href="" class="w-11/12 h-52 rounded-lg place-self-center shadow bg-cover bg-bottom md:mb-0 mb-5 md:block hidden" style="background-image: url(https://img.freepik.com/free-photo/washing-machine-minimal-laundry-room-interior-design_53876-145501.jpg?w=740&t=st=1676260070~exp=1676260670~hmac=c9693e825738983530e3d94a3be89cb241977f7e011f896911fbd90d3135f0a7);">
                <div class="duration-500 bg-black/20 hover:bg-black/0 hover:text-gray-800 w-full h-full rounded-lg lg:p-5 md:p-4 p-5">
                  <h2 class="font-semibold text-${selectedTheme.color}-400">Electronics</h2>
                  <p class="text-xs mt-2 md:mb-16 mb-8">dolor sit amet consectetur adipisicing elit. Ab, obcaecati.</p>
                  <button class="duration-500 px-7 py-2 bg-white text-stone-900 rounded-lg hover:bg-stone-300" ><small>Shop Now</small></button>
                </div>   
            </a>
            <a href="" class="w-11/12 h-52 rounded-lg place-self-center shadow bg-cover bg-bottom md:mb-0 mb-5 lg:ml-8 md:ml-6 md:block hidden" style="background-image: url(https://img.freepik.com/free-psd/minimal-living-room-with-classic-sofa-carpet-interior-design-ideas_176382-1528.jpg?w=900&t=st=1676260469~exp=1676261069~hmac=487c27b7e9dd990992d18673018d5fcd310bf0fc6debc90bdfd82e13b87bc01a);">
              <div class="duration-500 bg-black/20 hover:bg-black/0 hover:text-gray-800 w-full h-full rounded-lg lg:p-5 md:p-4 p-5">
                <h2 class="font-semibold text-${selectedTheme.color}-400">Furniture</h2>
                <p class="text-xs mt-2 md:mb-16 mb-8">dolor sit amet consectetur adipisicing elit. Ab, obcaecati.</p>
                <button class="duration-500 px-7 py-2 bg-white text-stone-900 rounded-lg hover:bg-stone-300" ><small>Shop Now</small></button>
              </div>   
          </a>
          <div class="h-52 md:flex hidden items-center md:-ml-4">
          <i class="bi bi-arrow-right-circle-fill rounded-full text-4xl -mr-1 drop-shadow duration-300 hover:text-stone-100"></i>
          </div> 
        </div>   

<div class="flex justify-center col-span-3 md:h-20">
  <div class="flex items-center text-white">
  <button class="w-2 h-2 rounded-full bg-black mr-2"></button>
  <button class="w-2 h-2 rounded-full bg-slate-400 mr-2"></button>
  <button class="w-2 h-2 rounded-full bg-slate-400"></button>
</div>
</div>

<!-- recent discounts -->
<div class="mt-10 flex items-center text-${selectedTheme.color}-600 w-full col-span-3 md:px-5 px-1 mb-5">
  <h2 class="md:text-2xl text-lg font-bold">Recent Discounts</h2>
  <p class="ml-auto md:text-base text-xs">View All Products</p>
</div>

<div class="col-span-3 flex justify-center">
<div class="h-80 md:flex hidden items-center lg:-mr-3 md:-mr-4 z-10">
  <i class="bi bi-arrow-left-circle-fill rounded-full text-4xl drop-shadow duration-300 hover:text-stone-100"></i>
  </div> 
        <a href="" class="md:w-2/4 w-1/2 h-80 rounded-lg place-self-center shadow bg-cover md:mb-0 mb-5 lg:mr-8 md:mr-6 mr-3 overflow-hidden">
          <div class="bg-cover bg-white w-full h-40 rounded-t-lg" style="background-image: url(https://www.pngall.com/wp-content/uploads/5/Lego-PNG-Free-Download.png);"></div>
          <div class="p-3 pt-1 text-stone-900 bg-white w-full h-full rounded-b-lg">
            <p class="text-stone-500 text-xs mb-1">LEGO</p>
            <h3>LEGO Minecraft The Creeper Ambush</h3>
            <div class="flex text-xs text-amber-500 mb-3 mt-1">
              <i class="bi bi-star-fill mr-1"></i>
              <i class="bi bi-star-fill mr-1"></i>
              <i class="bi bi-star-fill mr-1"></i>
              <i class="bi bi-star-fill mr-1"></i>
              <i class="bi bi-star-fill text-slate-200 mr-1"></i>
              <p><b class="mr-1">4.9</b>(120)</p>
            </div>
            <h3 class="font-bold text-xl flex items-center">$11 <small class="line-through ml-3 text-sm text-stone-500">$ 16</small></h3>
            <div class="flex items-center -mt-1">
              <div class="w-10 h-1 -mb-1 rounded bg-slate-200 mr-2"><div class="w-7 h-1 -mb-1 rounded bg-green-600"></div></div>
              
              <p><small class="text-xs text-green-600"><b>40</b> Available in stock</small></p>
            </div>
          </div> 
      </a>
  
      <a href="" class="md:w-2/4 w-1/2 h-80 rounded-lg place-self-center shadow bg-cover md:mb-0 mb-5 lg:mr-8 md:mr-6 overflow-hidden">
        <div class="bg-cover bg-white w-full h-40 rounded-t-lg" style="background-image: url(https://www.pngarts.com/files/9/Smartphone-Power-Bank-PNG-Free-Download.png);"></div>
        <div class="p-3 pt-1 text-stone-900 bg-white w-full h-full rounded-b-lg">
          <p class="text-stone-500 text-xs mb-1">LEGO</p>
          <h3>LEGO Minecraft The Creeper Ambush</h3>
          <div class="flex text-xs text-amber-500 mb-3 mt-1">
            <i class="bi bi-star-fill mr-1"></i>
            <i class="bi bi-star-fill mr-1"></i>
            <i class="bi bi-star-fill mr-1"></i>
            <i class="bi bi-star-fill mr-1"></i>
            <i class="bi bi-star-fill text-slate-200 mr-1"></i>
            <p><b class="mr-1">4.9</b>(120)</p>
          </div>
          <h3 class="font-bold text-xl flex items-center">$8 <small class="line-through ml-3 text-sm text-stone-500">$ 12</small></h3>
          <div class="flex items-center -mt-1">
            <div class="w-10 h-1 -mb-1 rounded bg-slate-200 mr-2"><div class="w-7 h-1 -mb-1 rounded bg-green-600"></div></div>
            
            <p><small class="text-xs text-green-600"><b>40</b> Available in stock</small></p>
          </div>
        </div> 
    </a>

    <a href="" class="w-2/4 h-80 rounded-lg place-self-center shadow bg-cover md:mb-0 mb-5 md:block hidden lg:mr-8 md:mr-6 overflow-hidden">
      <div class="bg-cover bg-white w-full h-40 rounded-t-lg" style="background-image: url(https://www.freepnglogos.com/uploads/shoes-png/find-your-perfect-running-shoes-26.png);"></div>
      <div class="p-3 pt-1 text-stone-900 bg-white w-full h-full rounded-b-lg">
        <p class="text-stone-500 text-xs mb-1">LEGO</p>
        <h3>LEGO Minecraft The Creeper Ambush</h3>
        <div class="flex text-xs text-amber-500 mb-3 mt-1">
          <i class="bi bi-star-fill mr-1"></i>
          <i class="bi bi-star-fill mr-1"></i>
          <i class="bi bi-star-fill mr-1"></i>
          <i class="bi bi-star-fill mr-1"></i>
          <i class="bi bi-star-fill text-slate-200 mr-1"></i>
          <p><b class="mr-1">4.9</b>(120)</p>
        </div>
        <h3 class="font-bold text-xl flex items-center">$41 <small class="line-through ml-3 text-sm text-stone-500">$ 52</small></h3>
        <div class="flex items-center -mt-1">
          <div class="w-10 h-1 -mb-1 rounded bg-slate-200 mr-2"><div class="w-7 h-1 -mb-1 rounded bg-green-600"></div></div>
          
          <p><small class="text-xs text-green-600"><b>37</b> Available in stock</small></p>
        </div>
      </div> 
  </a>

  <a href="" class="w-2/4 h-80 rounded-lg place-self-center shadow bg-cover md:mb-0 mb-5 lg:block hidden lg:mr-8 md:mr-6 overflow-hidden">
    <div class="bg-cover bg-white w-full h-40 rounded-t-lg" style="background-image: url(https://www.pngall.com/wp-content/uploads/4/Brown-Leather-Bag-PNG.png);"></div>
    <div class="p-3 pt-1 text-stone-900 bg-white w-full h-full rounded-b-lg">
      <p class="text-stone-500 text-xs mb-1">LEGO</p>
      <h3>LEGO Minecraft The Creeper Ambush</h3>
      <div class="flex text-xs text-amber-500 mb-3 mt-1">
        <i class="bi bi-star-fill mr-1"></i>
        <i class="bi bi-star-fill mr-1"></i>
        <i class="bi bi-star-fill mr-1"></i>
        <i class="bi bi-star-fill mr-1"></i>
        <i class="bi bi-star-fill text-slate-200 mr-1"></i>
        <p><b class="mr-1">4.9</b>(13)</p>
      </div>
      <h3 class="font-bold text-xl flex items-center">$79 <small class="line-through ml-3 text-sm text-stone-500">$ 99</small></h3>
      <div class="flex items-center -mt-1">
        <div class="w-10 h-1 -mb-1 rounded bg-slate-200 mr-2"><div class="w-4 h-1 -mb-1 rounded bg-amber-500"></div></div>
        
        <p><small class="text-xs text-amber-500"><b>27</b> Available in stock</small></p>
      </div>
    </div> 
</a>

  <div class="h-80 md:flex hidden items-center md:-ml-11">
  <i class="bi bi-arrow-right-circle-fill rounded-full text-4xl -mr-1 drop-shadow duration-300 hover:text-stone-100"></i>
  </div> 
</div> 
  
  <div class="flex justify-center col-span-3 md:h-20">
    <div class="flex items-center text-white">
    <button class="w-2 h-2 rounded-full bg-black mr-2"></button>
    <button class="w-2 h-2 rounded-full bg-slate-400 mr-2"></button>
    <button class="w-2 h-2 rounded-full bg-slate-400"></button>
  </div>
  </div> 

      </div>

      
<!-- active promotions -->
<div class="mt-10 text-${selectedTheme.color}-600 w-full col-span-3 lg:px-32 md:px-5 px-2">
  <div class="w-full flex items-center md:px-5 px-1">
    <h2 class="md:text-2xl text-lg font-bold">Active Promotions</h2>
    <p class="ml-auto md:text-base text-xs">View All Promotions</p>
  </div>
  
</div>
<div class="w-full lg:px-32 md:px-5 px-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:pb-52 pb-56 text-white h-full">

          <div class="p-5 w-full h-96 text-stone-900">
            <a href="" class="bg-black rounded-lg w-96 h-full drop-shadow">
              <div class="h-full bg-cover rounded-t" style="background-image: url(https://newsmast.com/wp-content/uploads/2016/12/Model-Sweater-Keren.jpg);"></div>
              <div class="bg-slate-100 px-12 p-8 rounded-b-lg" style="margin-top: -19%;">
                <div class="flex justify-center mb-4">
                  <img src="https://www.svgrepo.com/show/261399/sweater.svg" width="40" alt="">
                </div>
<div class="font-bold text-center">
                  <h3 class="text-lg mb-4">Up to 25% off on all casual sweaters</h3>
                <button class="bg-white duration-300 px-5 p-3 rounded-lg text-sm duration-300 shadow-lg hover:bg-stone-300"><small>Browse Products</small></button>
              </div>
              </div>
            </a>
          </div>
 
          <div class="p-5 w-full h-full text-stone-900 md:mt-0 mt-40 md:pb-5 pb-96">
            <a href="" class="bg-black rounded-lg w-96 drop-shadow">
              <div class="px-12 p-8 w-full h-full absolute flex items-center justify-center">
                
<div class="font-bold text-center">
  <div class="flex justify-center mb-4">
    <img src="https://www.svgrepo.com/show/179761/perfume-fashion.svg" width="40" alt="">
  </div>
                  <h3 class="text-lg mb-4">Up to 20% off on</br>beauty products</h3>
                <button class="bg-white px-5 p-3 rounded-lg text-sm duration-300 shadow-lg hover:bg-stone-300"><small>Browse Products</small></button>
              </div>
              </div>
              <div class="bg-cover rounded-lg w-full cardHeightmd" style="background-image: url(https://img.freepik.com/free-photo/beauty-skincare-products-bathroom_53876-133303.jpg?w=740&t=st=1676369471~exp=1676370071~hmac=c1e98aaf99fc0e1d9debce272ac25d521fffdc6ff0ebff529b0687f7b4bf7c8f);"></div>
            </a>
          </div>
 
          <div class="p-5 w-full h-96 text-stone-900 lg:block md:hidden block md:mt-0 mt-36">
            <a href="" class="bg-black rounded-lg w-96 h-full drop-shadow">
              <div class="h-full bg-cover rounded-t-lg" style="background-image: url(https://img.freepik.com/free-photo/hipster-with-thumb-up-holding-bike_1368-3441.jpg?w=740&t=st=1676373201~exp=1676373801~hmac=fba2eae4b74c4f6c2b165cbedbbc801ce863e66a9626d97fd24d8448cd50d3a3);"></div>
              <div class="bg-slate-100 px-12 p-8 rounded-b-lg" style="margin-top: -19%;">
                <div class="flex justify-center mb-4">
                  <img src="https://www.svgrepo.com/show/70289/bike.svg" width="40" alt="">
                </div>
<div class="font-bold text-center">
                  <h3 class="text-lg mb-4">Exciting bike rides with amazing equipment</h3>
                <button class="bg-white px-5 p-3 rounded-lg text-sm duration-300 shadow-lg hover:bg-stone-300"><small>Browse Products</small></button>
              </div>
              </div>
            </a>
          </div>
 
      </div>
    <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>
  </body>`
}