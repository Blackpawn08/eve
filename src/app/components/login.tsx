"use client";
import { Button } from "@/components/ui/button";
import { useFormState, useFormStatus } from "react-dom";
import { FaNfcSymbol } from "react-icons/fa6";
import { MdOutlinePassword } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { FaCircleExclamation } from "react-icons/fa6";
import Link from "next/link";
import { handleSignIn } from "@/lib/cognitoActions";
import { MdOutlineMail } from "react-icons/md";

export default function Login() {
  const [errorMessage, dispatch] = useFormState(handleSignIn, undefined);
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="w-full hidden md:block">
        <h1>PIcture of Eve</h1>
      </div>
      <div className=" bg-violet-400 w-full h-screen flex flex-col justify-center items-center ">
        {/* <form action="submit" className="flex flex-col w-2/3">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />

          <button></button>
        </form> */}
        <form action={dispatch} className="space-y-3">
          <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
            <h1 className="className mb-3 text-2xl">Login to Eve.</h1>
            <div className="w-full">
              <div>
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                  />

                  <MdOutlineMail className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
              </div>
              <div className="mt-4">
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    required
                    minLength={6}
                  />
                  <MdOutlinePassword className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
              </div>
            </div>
            <LoginButton />
            <div className="flex justify-center">
              <Link
                href="/signup"
                className="mt-2 cursor-pointer text-blue-500"
              >
                {"Don't have an account? "} Sign up.
              </Link>
            </div>
            <div className="flex h-8 items-end space-x-1">
              <div
                className="flex h-8 items-end space-x-1"
                aria-live="polite"
                aria-atomic="true"
              >
                {errorMessage && (
                  <>
                    <FaCircleExclamation className="h-5 w-5 text-red-500" />
                    <p className="text-sm text-red-500">{errorMessage}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
      Log in <FaArrowRight className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
