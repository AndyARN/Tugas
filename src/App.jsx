import CardBody from "./components/CarBody";
import Layout from "./components/Layout";

// import pages

import { BrowserRouter, Routes, Route } from "react-router-dom";

function About() {
  return (
    <Layout>
      <CardBody>
        <h1 className="font-bold">Title</h1>
      </CardBody>
    </Layout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
