import React from "react"
import { RiArrowGoBackLine } from "@react-icons/all-files/ri/RiArrowGoBackLine"
import { ReactComponent as IllustSuccess } from "../../../images/achievement.svg"
import { LinkOutlined } from "../../Commons/Button"

const MailSuccessTemplate = () => {
  return (
    <section>
      <div>
        <IllustSuccess
          title="Email successfully be sent"
          className="w-full mx-auto max-w-[200px] h-full sm:max-w-[280px]"
        />
      </div>
      <p className="max-w-[600px] mx-auto mt-5 text-xl text-center leading-6 text-gray-700 sm:mt-10 sm:text-2xl">
        Hey, thank you so much for sending me a message!&nbsp;
        <strong className="font-semibold text-primaryGreen">
          You are awesome.
        </strong>
      </p>
      <p className="max-w-[600px] mx-auto mt-5 text-center text-gray-600 text-sm leading-5 sm:text-base">
        Your message has been successfully sent to me. Please give me a time to
        read and reply your message.
      </p>
      <div className="mt-5 text-center sm:mt-10">
        <LinkOutlined to="/contact">
          <RiArrowGoBackLine /> &nbsp;Back to Contact
        </LinkOutlined>
      </div>
    </section>
  )
}

export default MailSuccessTemplate
