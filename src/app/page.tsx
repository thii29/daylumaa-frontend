import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const cookieStorage = await cookies()
  const token = (await cookies()).get("token")?.value
  if (token) {
    redirect("/dashboard");
  } else {
    redirect("/auth/login");
  }
}
