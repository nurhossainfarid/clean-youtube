import { Button, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import usePlaylist from "./hooks/usePlaylist";
import { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home";

const App = () => {
  const { playlists, getPlaylistById, error,loading } = usePlaylist();
  useEffect(() => {
		getPlaylistById('PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl');
	}, []);
  console.log('Error:', error);
  console.log('Loading', loading);
  console.log(playlists);
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
