import { Home } from "./src/screens/Home";
import { StatusBar } from "react-native";
import { ThemeProvider } from "./src/context/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <StatusBar
        animated={true}
        backgroundColor="#000"
        showHideTransition="slide"
        hidden={false}
      />
      <Home />
    </ThemeProvider>
  );
}
