import React from 'react';
import ReactStars from './ReactStars';

function ThankYouForm() {
    return (
      <div>
        <div class="font-sans py-4 w-full flex flex-row justify-center items-center">
          <div class="card w-96 mx-auto bg-white  shadow-xl hover:shadow">
            <img
              class="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
              src="https://res.cloudinary.com/dsnhbp0tg/image/upload/v1681784391/divcardimage_2x_tmjs7r.png"
              alt=""
            />
            <div class="text-center mt-2 text-3xl font-medium">
              International Van Lines
            </div>
            <div class="text-center mt-2 font-light text-sm">@username</div>
            <div class="text-center font-normal text-lg">Thankyou</div>
            <div class="px-6 text-center mt-2 font-light text-sm">
              <p>
                Thank your for booking with us. You will receive an SMS
                confirmation shortly!
              </p>
            </div>
            <hr class="mt-8" />
            <div class="flex p-4">
              <div class="w-1/2 text-center">
                <span class="font-bold">Service </span> Excellent
              </div>
              <div class="w-0 border border-gray-300"></div>
              <div class="w-1/2 text-center">
                <span class="font-bold">Deposit </span> No
              </div>
            </div>
          </div>
        </div>
        <p class="flex justify-center py-4 text-3xl font-bold leading-7 text-center">
          Leave a Review
        </p>
        <h1 className="flex justify-center py-4 text-xl font-bold">
          <ReactStars />
        </h1>
      </div>
    );
}

export default ThankYouForm;