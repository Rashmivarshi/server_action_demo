"use server";

import { revalidatePath } from "next/cache";
import { readfile, writefile } from "./helper";

export async function createTicket(formData: FormData) {
  const name = formData.get("name") as string;
  const type = formData.get("type") as string;

  const tickets = readfile();
  const id = Object.keys(tickets).length
    ? Math.max(...Object.keys(tickets).map(Number)) + 1
    : 1;

  tickets[id] = { id, name, status: "open", type };
  writefile(tickets);
}

export async function deleteTicket(id: number) {
  const tickets = readfile();
  delete tickets[id];
  writefile(tickets);
  revalidatePath("/");
}
