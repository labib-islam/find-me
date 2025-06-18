import Phone from "./components/Phone";
import Header from "./components/Header";
import Email from "./components/Email";
import Location from "./components/Location";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="w-screen flex flex-col gap-4 items-center px-5 py-10">
        <Phone />
        <Email />
        <Location />
      </section>
    </main>
  );
}
