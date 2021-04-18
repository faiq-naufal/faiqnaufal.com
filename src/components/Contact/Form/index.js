import React from "react"
import { navigate } from "gatsby"
import { useForm } from "react-hook-form"
import Section from "@components/Commons/Section"
import TextField from "@components/Commons/TextField"
import encodeFormData from "@helpers/encodeFormData"

const onSubmit = async data => {
  try {
    const response = await fetch(
      `https://formspree.io/f/${process.env.FORMSPREE_ENDPOINT}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },

        body: encodeFormData({
          ...data,
          message: `Subject: ${data.subject}\n\nHello Faiq Naufal,\nMy name is ${data.senderName} and my contact email is ${data.email}.\nI have a message for you :\n${data.message}`,
        }),
      }
    )

    if (response.ok === true && response.status === 200) {
      navigate(`./mail-success`, {
        state: {
          showPage: true,
        },
      })
    } else {
      alert("Something went wrong. Please try again!")
    }
  } catch (error) {
    console.log(error)
    alert("Something went wrong. Please try again!")
  }
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  const watchSenderName = watch("senderName")

  return (
    <Section>
      <div className="max-w-[600px] mx-auto">
        <h2 className="text-center text-gray-700 font-bold text-3xl sm:text-4xl mb-[4.5rem]">
          Let's Talk
        </h2>
        <form
          className="bg-white text-gray-600 py-8 px-5 rounded relative shadow-md sm:p-10 text-sm sm:text-base"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="absolute -top-12 -left-12 bg-primaryGreen w-full h-full z-[-1] rounded"></div>
          <h3 className="text-gray-700 font-bold text-lg mb-1 sm:text-xl">
            Tell me anything!
          </h3>
          <p className="leading-6 tracking-[0.2px] mb-4 sm:mb-5">
            Rest assured, I will not give your information to others. You will
            not get any spam email from here.
          </p>
          <p hidden>
            <label className="font-semibold text-primaryGreen cursor-pointer">
              If you're human don’t fill this out:
              <input
                type="text"
                name="_gotcha"
                {...register("_gotcha")}
                style={{ display: "none" }}
              />
            </label>
          </p>
          <div className="mb-10">
            <p>
              <label
                htmlFor="subject"
                className="font-semibold text-primaryGreen cursor-pointer"
              >
                Subject:{" "}
              </label>
            </p>
            <TextField
              id="subject"
              type="text"
              fullWidth
              placeholder="Message subject here"
              {...register("subject", { required: "This field is required" })}
              error={!!errors.subject?.message}
              helperText={errors.subject?.message}
            />
          </div>
          <p className="mb-4 sm:mb-5">Hello Faiq Naufal,</p>
          <div className="mb-4 sm:mb-5">
            <p className="mb-1">
              <label
                htmlFor="senderName"
                className="font-semibold text-primaryGreen cursor-pointer"
              >
                My name{" "}
              </label>
              is
            </p>
            <TextField
              id="senderName"
              type="text"
              fullWidth
              placeholder="Your name here"
              {...register("senderName", {
                required: "This field is required",
                maxLength: {
                  value: 25,
                  message: "Please enter shorter name less than 25 characters",
                },
              })}
              error={!!errors.senderName?.message}
              helperText={errors.senderName?.message}
            />
          </div>
          <div className="mb-4 sm:mb-5">
            <p className="mb-1">
              <label
                htmlFor="email"
                className="font-semibold text-primaryGreen cursor-pointer"
              >
                My contact email{" "}
              </label>
              is
            </p>
            {/*eslint no-useless-escape: "error"*/}
            <TextField
              id="email"
              type="email"
              fullWidth
              placeholder="Your email here"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, // eslint-disable-line no-useless-escape
                  message: "Invalid format email address",
                },
              })}
              error={!!errors.email?.message}
              helperText={errors.email?.message}
            />
          </div>
          <div className="mb-4 sm:mb-5">
            <p className="mb-1">
              I have a
              <label
                htmlFor="message"
                className="font-semibold text-primaryGreen cursor-pointer"
              >
                {" "}
                message{" "}
              </label>
              for you,
            </p>
            <TextField
              id="message"
              type="text"
              fullWidth
              multiline
              placeholder="Your message here"
              {...register("message", { required: "This field is required" })}
              error={!!errors.message?.message}
              helperText={errors.message?.message}
            />
          </div>
          <div className="mt-12 grid grid-cols-[minmax(0,1fr),1fr] gap-x-1">
            <div>
              <span className="block max-w-full overflow-ellipsis whitespace-nowrap overflow-hidden mb-20">
                Regards,
              </span>
              <span className="block max-w-full overflow-ellipsis whitespace-nowrap overflow-hidden">
                {!!watchSenderName ? watchSenderName : `(Your Name)`}
              </span>
            </div>
            <div className="text-right flex items-end justify-end">
              <button
                className="bg-primaryGreen rounded text-white py-2 px-3 text-center flex items-center justify-center content-center disabled:bg-gray-200 "
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Section>
  )
}

export default ContactForm
