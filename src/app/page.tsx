import Navbar from "./component/Navbar";
import ChatWindow from "./component/ChatWindow";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
        <Navbar />
        <ChatWindow />
    </div>
  );
}
