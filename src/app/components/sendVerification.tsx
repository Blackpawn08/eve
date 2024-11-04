import { Button } from "@/components/ui/button";
import { handleSendEmailVerificationCode } from "@/lib/cognitoActions";
import { useFormState, useFormStatus } from "react-dom";
import { FaArrowRight, FaCircleExclamation } from "react-icons/fa6";

export default function SendVerificationCode() {
  const [response, dispatch] = useFormState(handleSendEmailVerificationCode, {
    message: "",
    errorMessage: "",
  });
  const { pending } = useFormStatus();
  return (
    <>
      <Button
        className="mt-4 w-full"
        aria-disabled={pending}
        formAction={dispatch}
      >
        Resend Verification Code{" "}
        <FaArrowRight className="ml-auto h-5 w-5 text-gray-50" />
      </Button>
      <div className="flex h-8 items-end space-x-1">
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {response?.errorMessage && (
            <>
              <FaCircleExclamation className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{response.errorMessage}</p>
            </>
          )}
          {response?.message && (
            <p className="text-sm text-green-500">{response.message}</p>
          )}
        </div>
      </div>
    </>
  );
}
