"use server";

import User from "@/models/User";
import { connectToDb } from "../mongoose";

export async function createLoginEntry(email: string, password: string) {
  try {
    connectToDb();
    const user = await User.create({ email, password });

    return user;
  } catch (er) {
    console.log(er);
    throw er;
  }
}
