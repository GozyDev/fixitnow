"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "ogaboss22288",
  });
  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("api/auth/signup/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    if (res.ok) {
      console.log(data)
      if(data.role === "PROVIDER"){
        router.push(`/P-dashboard?name=${data.name}`)
      }
      else{
        router.push("/C-dashboard")
      }
    } else {
      alert(data.error || "somthing went wrong");
    }
  }

  return (
    <>
      <div className="shadow-lg p-5 mx-auto border-3 max-w-md mt-10 rounded-lg mb-10">
        <form onSubmit={handleSubmit}>
          <div className="mb-[20px]">
            <label htmlFor="email" className="block">
              Enter Your Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="border p-2 w-full mt-[10px] text-sm"
              onChange={handleInput}
              required
            />
          </div>

          <div>
            <label htmlFor="pass">Enter Your PassWord</label>
            <input
              id="pass"
              type="password"
              name="password"
              value={loginData.password}
              className="border p-2 w-full mt-[10px] text-sm"
              onChange={handleInput}
              required
            />
          </div>

          <div className="my-[20px]">
            <p className="text-sm text-grey-500">
              Not beign registered
              <Link href={"/signup"} className="ml-[10px]">
                <span>signup</span>
              </Link>
            </p>
          </div>

          <button className="bg-blue-500 text-white px-[20px] py-[10px] w-full mt-[0px] rounded">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
