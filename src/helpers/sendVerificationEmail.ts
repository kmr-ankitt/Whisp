import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email:string,
    username : string,
    verfiyCode : string,
) : Promise<ApiResponse> {
    try {
        await resend.emails.send({
            from: 'Whisp  <onboarding@resend.dev>',
            to: email,
            subject: 'Whisp | Verification code ',
            react: VerificationEmail({username, otp : verfiyCode}) ,
          });
        return {success: true , message: "Verification email send successfully."}
    } catch (emailError) {
        console.error("Error sending verification email.", emailError)
        return {success : false, message : "Failed to send verification email. "}
    }
}
