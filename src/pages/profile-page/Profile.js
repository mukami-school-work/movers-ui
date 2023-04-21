import React, { useState } from "react";

const Profile = () => {
  const [image, setImage] = useState(
    "https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png"
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      <section className="py-5">
        <h3 className="text-center text-2xl font-semibold mb-2 text-green-400">
                  PROFILE MANAGER
        </h3>
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="col-span-1">
              <div className="bg-white rounded-lg shadow-lg py-5 px-6">
                <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden">
                  <img
                    src={image}
                    alt="avatar"
                    id="img"
                    className="absolute h-full w-full object-cover"
                  />
                 
                </div>
                <p className="text-center mb-2">
                  <label
                    htmlFor="input"
                    className=" text-black py-2 px-12 cursor-pointer hover:bg-gray-700"
                  >
                    <i className="material-icons justify-center mr-1">✏️</i>
                    Edit Your Photo
                  </label>
                  <input
                    type="file"
                    name="image-upload"
                    id="input"
                    accept="image/*"
                    onChange={imageHandler}
                    className="hidden"
                  />
                </p>
                <h3 className="text-center text-2xl font-semibold mb-2">
                  {name ? name : "Name"}
                </h3>
                <p className="text-center text-gray-600 mb-4">
                  {email ? email : "Email Address"}
                </p>
              
              </div>
            </div>
            <div className="col-span-2">
              <div className="bg-white rounded-lg shadow-lg py-5 px-6">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control w-full border-gray-300 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                    placeholder="Enter your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <hr className="my-4" />
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Primary Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-control w-full border-gray-300 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                    placeholder="Primary Phone Number"
                  />
                </div>
                <div className="mb-4">
                                <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="form-control w-full border-green-300 rounded-lg focus:border-green-400 focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
                placeholder="Enter your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <hr className="my-4" />
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-semibold mb-2"
              >
                Secondary Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="form-control w-full border-green-300 rounded-lg focus:border-green-400 focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
                placeholder="Secondary Phone Number"
              />
            </div>
            <hr className="my-4" />
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Enter New Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control w-full border-green-300 rounded-lg focus:border-green-400 focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
                placeholder="Enter New Password"
              />
            </div>
            <hr className="my-4" />
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control w-full border-green-300 rounded-lg focus:border-green-400 focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
                placeholder="Confirm New Password"
              />
            </div>
            <hr className="my-4" />
            <div className="flex justify-end">
              <button className="h-12 px-6 text-sm rounded-lg text-white bg-primary-green hover:bg-green-400 focus:outline-none">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

);
};

export default Profile;
