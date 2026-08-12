// import { Preact } from "preact";
import "../style.css";

export function Header() {
  return (
    // <Navbar />
    <div class="navbar shadow-md z-10 bg-red-300">
      <div class="navbar-start">
        <a href="/" class="text-xl hover:text-gray-200 pl-3 pr-2">Preact Testing</a>
        <div class="hidden md:flex">
          <a href="https://www.instagram.com/lantz.darling" class="fa fa-instagram px-2 link link-hover"></a>
        </div>
      </div>
      <div class="navbar-end">
        <div class="dropdown dropdown-end lg:hidden">
           {/* <div tabindex={0} role="button" class="btn btn-ghost text-white lg:hidden hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>  */}
          <div tabindex={0} role="button" class=" text-white lg:hidden hover:text-gray-200 hover:cursor-pointer px-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabindex="-1"
            class="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 pt-3 shadow">
            <li><a class="link link-hover" href="/music">Music</a></li>
            <li><a class="link link-hover" href="/merch">Merch</a></li>
            <li class="flex">
              <a href="https://www.instagram.com/lantz.darling" class="fa fa-instagram link link-hover"></a>
            </li>
          </ul>
        </div>
        <ul class="menu menu-horizontal px-1 hidden lg:flex">
          <li><a class="link link-hover" href="/music">Music</a></li>
          <li><a class="link link-hover" href="/merch">Merch</a></li> 
        </ul>
      </div>
    </div>
  )


}
