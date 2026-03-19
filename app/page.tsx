import { readfile } from "@/lib/helper";

export default function Home() {
  readfile();
  return <h1>hello server action</h1>;
}
