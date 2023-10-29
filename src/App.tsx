import { useCallback, useRef } from "react";
import axios from "axios";

function App() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSendFile = useCallback(() => {
    if (fileInputRef.current?.files) {
      const file = fileInputRef.current.files[0];
      const formData = new FormData();

      formData.append("image", file);
      axios.post("http://localhost:5000/upload", formData);
    }
  }, []);

  return (
    <div>
      <input type="file" accept="image/*" ref={fileInputRef} />
      <button onClick={handleSendFile}>Send</button>
    </div>
  );
}

export default App;
