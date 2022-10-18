import { useEffect, useState } from "react";
import Card from "./components/UI/Card";
import { MdOutlineFileCopy } from "react-icons/md";
import Form from "./components/Form";
import { RandomReveal } from "react-random-reveal";
import toast, { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

function App() {
  const [password, setPassword] = useState("password");
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsPlaying(true);
  }, [password]);

  return (
    <div className="bg-primary-dark flex flex-col min-h-screen justify-between">
      <div className="m-auto max-w-md w-full flex justify-center items-center flex-col p-4">
        <h1 className="text-emerald-400 font-medium my-4 text-3xl">
          Password Generator
        </h1>
        <Card className="flex justify-between items-center ">
          {isPlaying ? (
            <RandomReveal
              isPlaying={isPlaying}
              duration={1}
              characters={password}
              onComplete={() => {
                setIsPlaying(false);
              }}
            />
          ) : (
            password
          )}
          <MdOutlineFileCopy
            onClick={() => {
              navigator.clipboard.writeText(password);
              toast.success(`${password} Copied !`);
            }}
            className="text-emerald-400 h-5 w-5 cursor-pointer"
          />
        </Card>
        <Card>
          <Form setPassword={setPassword} />
        </Card>
        <Toaster position="top-right" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
