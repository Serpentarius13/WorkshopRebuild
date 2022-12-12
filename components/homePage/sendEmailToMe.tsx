import Link from "next/link";
import { QueryNames } from "../../types/enum";
import SendEmailForm from "../reusable-form/formTypes/sendEmailForm";

const SendEmailToMeForm = () => {
  return (
    <div className=" w-[95%] md:w-[50%] bg-gray-800  flex flex-col items-center justify-center py-8 px-4  space-y-4 rounded-xl pt-14 ">
      <h1 className="text-3xl font-bold text-white ">
        {" "}
        Found anything to fix?{" "}
      </h1>
      <p className="text-white pb-8 italic ">
        {" "}
        As a creator of this website, Im always{" "}
        <Link href="/author" className="underline font-bold text-orange-500 ">
          {" "}
          there{" "}
        </Link>
        help you. Contact me right away!{" "}
      </p>
      <SendEmailForm name={QueryNames.EMAIL_TO_ME} />
    </div>
  );
};
export default SendEmailToMeForm;
