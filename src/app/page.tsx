import Content from "./(home)/Content";
import Sidebar from "./(home)/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row">
      <Sidebar />
      <Content />
    </div>
  );
}
