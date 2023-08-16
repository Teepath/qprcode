import logo from './logo.svg';
import './App.css';
import QRCodeGenerator from './generator';

function App() {
  const qrCodeData = 'https://www.abisoyelaw.ca/';
  return (
    <div className="App">
      <header className="App-header">
      <h1>QR Code Generator Example</h1>
      <QRCodeGenerator data={qrCodeData} />
      </header>
    </div>
  );
}

export default App;
