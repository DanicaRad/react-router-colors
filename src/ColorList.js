import { Link } from 'react-router-dom';
import './ColorList.css';

function ColorList({colors}) {
  console.log("colors in colorlist", colors);

  const colorLinks = Object.entries(colors).map(color => (
    <div key={color[1]} className="colorLink" style={{ backgroundColor: color[1] }}>
      <Link to={`${color[0]}`}>{color[0]}</Link>
    </div>
  ))

  return (
    <div className='ColorList'>
      <h1>Color Factory</h1>
      <h3>
        <Link className='addNewColor' to="new">Add a color</Link>
      </h3>
      <div>
        <p>Select a color.</p>
        <div className='colorLinks'>{colorLinks}</div>
      </div>
    </div>
  );
}

export default ColorList;