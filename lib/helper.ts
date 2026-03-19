import "server-only";
import fs from "fs";

export interface ticket {
  id: number;
  name: string;
  status: string;
  type: string;
}
const filePath = "lib/database.json";
export function readfile() {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export function writefile(data: Record<string, ticket>) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}
