import useAuth from "auth/useAuth";
import React, { useState } from "react";

const Profile = () => {
  const { user, navigate } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!user) {
    navigate("/");
    return null;
  }

  return (
    <>
      <section className="py-5 mt-24">
        <h3 className="mb-2 text-2xl font-semibold text-center text-green-400">
          Edit Profile
        </h3>
        <div className="container px-4 mx-auto">
          <div className="grid justify-center gap-6 md:grid-cols-1">
            <div className="col-span-1">
              <div className="px-6 py-5 bg-white rounded-lg shadow-lg">
                <div className="relative w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full">
                  <img
                    src={user.image}
                    alt="avatar"
                    id="img"
                    className="absolute object-cover w-full h-full"
                  />
                </div>
                {/* Profile Picture Field */}
                <div className="flex flex-col items-center mb-4">
                  <label
                    htmlFor="profile-picture"
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Edit Profile Picture{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="profile-picture"
                      name="profile-picture"
                      type="file"
                      accept="image/*"
                      // onChange={""}
                      required
                      className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>
                <h3 className="mb-2 text-2xl font-semibold text-center">
                  {user.name}
                </h3>
                <p className="mb-4 text-center text-gray-600">{user.email}</p>
                <p className="mb-4 text-center text-gray-600">{user.phone}</p>
              </div>
            </div>
            <div className="col-span-2">
              <div className="px-6 py-5 bg-white rounded-lg shadow-lg">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block mb-2 font-semibold text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder={user.name}
                    className="w-full border-gray-300 rounded-lg form-control focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <hr className="my-4" />
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 font-semibold text-gray-700"
                  >
                    Add Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border-green-300 rounded-lg form-control focus:border-green-400 focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
                    placeholder={
                      user.add_email ? user.add_email : "e.g. user@example.com"
                    }
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <hr className="my-4" />
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block mb-2 font-semibold text-gray-700"
                  >
                    Add Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full border-green-300 rounded-lg form-control focus:border-green-400 focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
                    placeholder={
                      user.add_phone ? user.add_phone : "e.g. +254700000000"
                    }
                  />
                </div>
                <hr className="my-4" />
                <div className="flex justify-end">
                  <button className="h-12 px-6 text-sm text-white rounded-lg bg-primary-green hover:bg-green-400 focus:outline-none">
                    Save Changes
                  </button>
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
