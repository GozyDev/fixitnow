import { NextResponse  } from "next/server";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
export async function POST (req:Request){
const {email,password} = await req.json()
const user =  await prisma.user.findUnique({
    where:{email}
})

if(!user){
    return NextResponse.json({error:"User has not beign registerd "},{status:401})
}

const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
  }

  const token = jwt.sign(
    { userId: user.id, email: user.email, role: user.role },
    "secret_key", // Change this in production!
    { expiresIn: "7d" }
  );


return NextResponse.json({token , role:user.role , message:"login succefully",name:user.name},{status:200})
}