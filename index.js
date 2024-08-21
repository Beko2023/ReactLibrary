import React from 'react';
import ReactDOM from 'react-dom/client';
import Badge from "./Components/Badge"
import Banner from "./Components/Banner"
import Card from "./Components/Card"
import Testimonial from "./Components/Testimonial"

function App() {
  return (
    <main>
      <Badge color="red" className="pill">Badge</Badge>
      <Banner className="warning" title="Congratulations!" text="Testing some text to place under the title"></Banner>
      <Card title="Chiv2 Urge!" text="I miss playing chivalry 2 and I should probably play some when I get home after this study session!"></Card>
      <Testimonial logo="./images/Logo.png" name="Cookie Monster" title="QA Manager at Glob" statement="Cookies were warm and chewy. Simply the best."></Testimonial>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);