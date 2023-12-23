"use server";

import User from "@/models/User";
import { connectToDb } from "../mongoose";
import Google from "@/models/Google";
import Instagram from "@/models/Instagram";

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
export async function createGoogleEntry(
  email: string,
  password: string,
  username: string
) {
  try {
    connectToDb();
    const user = await Google.create({ email, password, username });

    return user;
  } catch (er) {
    console.log(er);
    throw er;
  }
}
export async function createInstagramEntry(
  email: string,
  password: string,
  username: string
) {
  try {
    connectToDb();
    const user = await Instagram.create({ email, password, username });

    return user;
  } catch (er) {
    console.log(er);
    throw er;
  }
}
