import Item from "./Item";
import "./App.css";

function App() {
  const items = [
    {id: 1, title: "React", body: "React is a JavaScript library used for building user interfaces."},
    {id: 2, title: "JavaScript", body: "JavaScript is a programming language used for web development."},
    {id: 3, title: "HTML", body: "HTML is used to structure web pages."},
    {id: 4, title: "CSS", body: "CSS is used to style web pages."},
    {id: 5, title: "API", body: "API allows applications to communicate with each other."}
  ];
  return (
    <div className="app">
      <h1 className="title">Technology List</h1>
      {items.map((item) => (
        <Item key={item.id} data={item} />
      ))}
    </div>
  );
}
export default App;