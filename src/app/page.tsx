import Content from "./(home)/content";
import Sidebar from "./(home)/sidebar";

export default function Home() {
  return (
    <main className="flex flex-row">
    <Sidebar />
    <Content />
    </main>
  );
}
