import React from 'react'
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
            <img src="assets/health.svg" alt="Monitoring" />
          </div>
        </div>

        <div class="flex items-center flex-wrap mb-20">
          <div class="w-full md:w-1/2">
            <img src="assets/report.svg" alt="Reporting" />
          </div>
          <div class="w-full md:w-1/2 pl-10">
            <h4 class="text-3xl  font-bold text-white mb-3">Reporting</h4>
            <p class="text-white mb-8">
              Our Smart Health Monitoring Wristwatch can generate a
              comprehensive report on your vitals depending on your settings
              either daily, weekly, monthly, quarterly or yearly.
            </p>
          </div>
        </div>

        <div class="flex items-center flex-wrap mb-20">
          <div class="w-full md:w-1/2">
            <h4 class="text-3xl  font-bold text-white mb-3">Syncing</h4>
            <p class="text-white mb-8">
              Our Smart Health Monitoring Wristwatch allows you to sync data
              across all your mobile devices whether iOS, Android or Windows OS
              and also to your laptop whether MacOS, GNU/Linux or Windows OS.
            </p>
          </div>
          <div class="w-full md:w-1/2">
            <img src="assets/sync.svg" alt="Syncing" />
          </div>
        </div>
      </section>
      <section class=" bg-white border-gray-200 dark:bg-gray-700 mx-auto">
        <div class="container mx-auto px-6 py-4">
          <h2 class="text-4xl font-bold text-white text-center  mb-8">
            Testimonials
          </h2>
          <div class="flex flex-wrap">
            <div class="w-full md:w-1/3 px-2 mb-4">
              <div class="bg-white rounded shadow py-2">
                <p class=" text-base px-6 mb-5">
                  Monitoring and tracking my health vitals anywhere I go and on
                  any platform I use has never been easier.
                </p>
                <p class="text-gray-500 text-xs md:text-sm px-6">John Doe</p>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-2 mb-4">
              <div class="bg-white rounded shadow py-2">
                <p class=" text-base px-6 mb-5">
                  As an Athlete, this is the perfect product for me. I wear my
                  Smart Health Monitoring Wristwatch everywhere I go, even in
                  the bathroom since it's waterproof.
                </p>
                <p class="text-gray-500 text-xs md:text-sm px-6">Jane Doe</p>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-2 mb-4">
              <div class="bg-white rounded shadow py-2">
                <p class=" text-base px-6 mb-5">
                  I don't regret buying this wearble gadget. One of the best
                  gadgets I own!.
                </p>
                <p class="text-gray-500 text-xs md:text-sm px-6">James Doe</p>
              </div>
            </div>
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
