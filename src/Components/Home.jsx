import React from 'react'
import RoomImg from "../Images/room.png"
import LoginImg from "../Images/login.png"
import ChatImg from "../Images/chat.png"
export default function Home() {
  return (
    <div>
      <section class=" mx-auto px-6 p-10 bg-white border-gray-200 dark:bg-gray-700">
        <h2 class="text-4xl font-bold text-white text-center mb-8">Features</h2>
        <div class="flex items-center flex-wrap mb-20">
          <div class="w-full md:w-1/2">
            <h4 class="text-3xl  font-bold text-white mb-3">Chat Anytime</h4>
            <p class="text-white mb-8">
              Our Chat App provides you to connect to your friends privately and share text messages
            </p>
          </div>
          <div class="w-full md:w-1/2">
            <img src={LoginImg} alt="Monitoring" />
          </div>
        </div>

        <div class="flex items-center flex-wrap mb-20">
          <div class="w-full md:w-1/2">
            <img src={RoomImg} alt="Reporting" />
          </div>
          <div class="w-full md:w-1/2 pl-10">
            <h4 class="text-3xl  font-bold text-white mb-3">Reporting</h4>
            <p class="text-white mb-8">
              User Friendlly user interface to connect with your friends. You will never regret using this wonderful website
            </p>
          </div>
        </div>

        <div class="flex items-center flex-wrap mb-20">
          <div class="w-full md:w-1/2">
            <h4 class="text-3xl  font-bold text-white mb-3">Syncing</h4>
            <p class="text-white mb-8">
              Our Realtime chat app allows you to sync data
              across all your mobile devices whether iOS, Android or Windows OS
              and also to your laptop whether MacOS, GNU/Linux or Windows OS.
            </p>
          </div>
          <div class="w-full md:w-1/2">
            <img src={ChatImg} alt="Syncing" />
          </div>
        </div>
      </section>

      <footer class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="container mx-auto px-6 pt-10 pb-6">
          <div class="flex flex-wrap">
            <div class="w-full md:w-1/4 text-center md:text-left">
              <h5 class="uppercase mb-6 font-bold text-white">Links</h5>
              <ul class="mb-4">
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-white hover:text-orange-500"
                  >
                    FAQ
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-white hover:text-orange-500"
                  >
                    Help
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-white hover:text-orange-500"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/4 text-center md:text-left">
              <h5 class="uppercase mb-6 font-bold text-white">Legal</h5>
              <ul class="mb-4">
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-white hover:text-orange-500"
                  >
                    Terms
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-white hover:text-orange-500"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/4 text-center md:text-left">
              <h5 class="uppercase mb-6 font-bold text-white">Social</h5>
              <ul class="mb-4">
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-white hover:text-orange-500"
                  >
                    Facebook
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-white hover:text-orange-500"
                  >
                    Linkedin
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-white hover:text-orange-500"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/4 text-center md:text-left">
              <h5 class="uppercase mb-6 font-bold text-white">Company</h5>
              <ul class="mb-4">
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-white hover:text-orange-500"
                  >
                    Official Blog
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-white hover:text-orange-500"
                  >
                    About Us
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-white hover:text-orange-500"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
