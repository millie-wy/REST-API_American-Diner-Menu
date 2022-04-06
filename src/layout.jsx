const Layout = () => {
  //const [data, setData] = useState([]);

  const loadMenu = () => {
    console.log("click");
    fetch("http://localhost:3000/api/menu")
      .then((response) => response.json())
      .then((jsonData) => console.log(jsonData))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>HELLO FROM REACT</h1>
      <button onClick={loadMenu}>Open Menu</button>
    </div>
  );
};
