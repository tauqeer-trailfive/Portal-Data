import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { showToast } from "../Toaster/Toaster";

type Props = {};

export default function Client({ }: Props) {
  const navigate = useNavigate();
  let { state } = useLocation();

  const [checkEmpty, setCheckEmpty] = useState<boolean>(false);
  const [form, setForm] = useState<any>({
    name: "",
    email: "",
    number: null,
    gender: "",
    motivation: "",
    description: "",
  });

  const validateForm = () => {
    if (
      !form?.name.trim() ||
      !form?.email?.trim() ||
      form?.number === null ||
      (form?.number !== undefined && form?.number.toString().length <= 5) ||
      !form.gender ||
      !form?.motivation.trim() ||
      !form.description.trim()
    ) {
      showToast("Please fill all the feilds", "error");
      return false;
    }
    return true;
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      number: null,
      gender: "",
      motivation: "",
      description: "",
    });
  };

  // useEffect(() => {
  //   const dataObject = {
  //     event: "formSubmission",
  //     form: {
  //       name: form.name,
  //       email: form.email,
  //       number: form.number,
  //       gender: form.gender,
  //       motivation: form.motivation,
  //       description: form.description,
  //     },
  //   };

  //   (window as any).dataLayer = (window as any).dataLayer || [];
  //   (window as any).dataLayer.push(dataObject);

  //   return () => {
  //     const index = (window as any).dataLayer.indexOf(dataObject);
  //     if (index !== -1) {
  //       (window as any).dataLayer.splice(index, 1);
  //     }
  //   };
  // }, [form]);

  const handleSubmit = () => {
    setCheckEmpty(true);
    if (validateForm()) {
      const timestamp = new Date().getTime().toString();
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: "formSubmission",
        formID: timestamp,
        vacancyName: state.vacancyName,
        form: {
          name: form.name,
          email: form.email,
          number: form.number,
          gender: form.gender,
          motivation: form.motivation,
          description: form.description,
        },
      });
      (window as any).dataLayer = [];

      (window as any)._mtm = (window as any)._mtm || [];
      (window as any)._mtm.push({
        event: "formSubmission",
        formID: timestamp,
        form: {
          name: form.name,
          email: form.email,
          number: form.number,
          gender: form.gender,
          motivation: form.motivation,
          description: form.description,
        },
      });
      resetForm();
      navigate("/success");
      // window.location.reload();
      const mtmScript = document.createElement("script");
      mtmScript.type = "text/javascript";
      mtmScript.async = true;
      mtmScript.defer = true;
      mtmScript.src = "https://cdn.matomo.cloud/trailfivetesting.matomo.cloud/container_cNCgDX42.js";
      document.head.appendChild(mtmScript);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen">
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NXGNXGL6"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* <!-- Google Tag Manager (noscript) --> Moiz*/}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-52CF7Q6R"
          height="0"
          width="0"
          style={{ visibility: "hidden", display: "none" }}
        ></iframe>
      </noscript>
      {/* <!-- End Google Tag Manager (noscript) --> Moiz*/}
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <button
          onClick={() => navigate(-1)}
          type="button"
          className="text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center inline-flex items-center me-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 dark:hover:text-blue-700 dark:focus:ring-blue-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
          <span className=" ml-3"> go Back</span>
        </button>
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Fill the form
        </h2>
        <form action="#" id="jobApply" method="get">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First Name
              </label>
              <input
                id="name"
                type="text"
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
                ${checkEmpty && !form?.name.trim()
                    ? "dark:border-red-600"
                    : "dark:border-gray-600"
                  } dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                placeholder="Full Name"
                value={form?.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              {checkEmpty && !form?.name.trim() && (
                <p className="text-red-600 dark:text-red-500">
                  Name is required
                </p>
              )}
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   ${checkEmpty && !form?.email.trim()
                  ? "dark:border-red-600"
                  : "dark:border-gray-600"
                  } dark:bg-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                placeholder="Email Address"
                value={form?.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              {checkEmpty && !form?.email.trim() && (
                <p className="text-red-600 dark:text-red-500">
                  Email is required
                </p>
              )}
            </div>
            <div className="w-full">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone Number
              </label>
              <input
                id="number"
                maxLength={5}
                // type="tel"
                type="number"
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700  
                  ${checkEmpty && form?.number === null
                    ? "dark:border-red-600"
                    : "dark:border-gray-600"
                  } dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                placeholder="Phone Number"
                value={form?.number}
                onChange={(e) =>
                  setForm({ ...form, number: parseInt(e.target.value) })
                }
              />
              {checkEmpty && form?.number === null && (
                <p className="text-red-600 dark:text-red-500">
                  Phone Number is required
                </p>
              )}
              {form?.number !== null && form?.number.toString().length <= 5 && (
                <p className="text-red-600 dark:text-red-500">
                  Phone Number should be 5 characters
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="gender"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Gender
              </label>
              <select
                id="gender"
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700  
                 ${checkEmpty && !form.gender
                    ? "dark:border-red-600"
                    : "dark:border-gray-600"
                  } dark:border-gray-600  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                onChange={(e) => setForm({ ...form, gender: e.target.value })}
              >
                <option selected={true}>Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {checkEmpty && !form.gender && (
                <p className="text-red-600 dark:text-red-500">
                  Select atleast one gender
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="Motivation"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Motivation
              </label>
              <input
                id="motivation"
                type="text"
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700   ${checkEmpty && !form.motivation.trim()
                  ? "dark:border-red-600"
                  : "dark:border-gray-600"
                  } dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                placeholder="Motivation"
                value={form?.motivation}
                onChange={(e) =>
                  setForm({ ...form, motivation: e.target.value })
                }
              />
              {checkEmpty && !form.motivation.trim() && (
                <p className="text-red-600 dark:text-red-500">
                  Motivation is required
                </p>
              )}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                id="description"
                rows={8}
                className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700   ${checkEmpty && !form?.description.trim()
                  ? "dark:border-red-600"
                  : "dark:border-gray-600"
                  } dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                placeholder="Your description here"
                value={form?.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              ></textarea>
              {checkEmpty && !form.description.trim() && (
                <p className="text-red-600 dark:text-red-500">
                  Please fill the description
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center w-full my-4">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-32 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>

          <div className="mt-4">
            {/* <Link
              id="Submit-Form"
              to={"/success"}
              type="button"
              className="inline-flex justify-center rounded-md border w-full border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Submit Now
            </Link> */}
            <button
              type="button"
              id="Submit-Now"
              className="inline-flex justify-center rounded-md border w-full border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={handleSubmit}
            >
              Submit Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
