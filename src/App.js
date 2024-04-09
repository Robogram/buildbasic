import './App.scss';
import { useState } from "react";

function App() {
  const [result, setResult] = useState([])

  const addToResult = num => {
    const newResult = [...result]

    switch (newResult.length) {
      case 0:
        if (num >= 0 && num <= 9) {
          newResult.push(num)
        }

        break;
      case 1:
        if (num == "+") {
          newResult.push("+")
        }

        break;
      case 2:
        if (num >= 0 && num <= 9) {
          newResult.push(num)
        }
      default:
        if (num == "=") {
          const total = result[0] + result[2]

          newResult.push(num)
          newResult.push(total)
          newResult.push("       (Yes!, it works!!)")
        }
    }

    setResult(newResult)
  }

  return (
    <div id="app">
      <div className="header">Let's build something simple and fun:)</div>

      <div className="header">Let's build a simple mobile app calculator that only adds two numbers</div>

      <div className="header">This is what you'll build. Test it:)</div>

      <div id="phone">
        <div id="phone-header">{result.join(" ")}</div>
        <div id="buttons">
          <div className="button-row">
            <div className="button-header" onClick={() => setResult([])}>CLEAR</div>
          </div>
          <div className="button-row">
            <div className="button-header" onClick={() => addToResult(7)}>7</div>
            <div className="button-header" onClick={() => addToResult(8)}>8</div>
            <div className="button-header" onClick={() => addToResult(9)}>9</div>
          </div>
          <div className="button-row">
            <div className="button-header" onClick={() => addToResult(4)}>4</div>
            <div className="button-header" onClick={() => addToResult(5)}>5</div>
            <div className="button-header" onClick={() => addToResult(6)}>6</div>
          </div>
          <div className="button-row">
            <div className="button-header" onClick={() => addToResult(1)}>1</div>
            <div className="button-header" onClick={() => addToResult(2)}>2</div>
            <div className="button-header" onClick={() => addToResult(3)}>3</div>
          </div>
          <div className="button-row">
            <div className="button-header" onClick={() => addToResult("+")}>+</div>
            <div className="button-header" onClick={() => addToResult("=")}>=</div>
          </div>
        </div>
      </div>

      <div className="header" style={{ marginTop: 300 }}>Now, Let's quickly build your own</div>
      <div className="header">Get the only app you need for this</div>

      <div id="needs">
        <div id="needs-list">
          <div className="need-item">
            Expo.io, a platform for building mobile apps (iOS and Android)
            <br/><br/>
            Get Expo app on your phone and create an account
            <div style={{ height: 100, margin: '20px auto', width: 100 }}><img style={{ height: '100%', width: '100%' }} src="/expo-icon.svg"/></div>
          </div>
        </div>
      </div>

      <div className="header">Once you created an account, you should see this screen</div>

      <div className="header-shot">
        <img style={{ height: '100%', width: '100%' }} src="/expo-newuser.jpeg"/>
      </div>

      <div className="header">DONE</div>

      <div className="header" style={{ marginTop: 200 }}>Go on your Macbook</div>

      <div className="headers">
        <div className="header-item">
          <div className="header-item-header">1. Get homebrew on your macbook</div>
          <ul>
            <li>Homebrew is a software package that lets you install the softwares you need on your macbook to build apps</li>
            <li>On your macbook, Open terminal inside "/Applications/Utilities/Terminal"</li>
            <li>
              You should see something like this
              <img style={{ height: 500, width: 500 }} src="/terminal-shot.jpeg"/>
            </li>
            <li>Copy and paste the red text and hit "ENTER" to install Homebrew,
              <br/><br/>
              <strong>/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</strong>
              <br/><br/>
            </li>
            <li>It will take about a minute or 2 so just wait</li>
            <li>If it asks something like "[Y/n]", just hit "ENTER"</li>
            <li>DONE! Now you need to install the software package "yarn" and use that to create mobile app projects</li>
            <li>
              Type this into your terminal and hit "ENTER" to install "Yarn"
              <br/><br/>
              <strong>brew install yarn</strong>
              <br/><br/>
            </li>
            <li>DONE:)</li>
            <li>
              Inside your terminal, navigate to your desktop by typing
              <br/><br/>
              <strong>~/desktop</strong>
              <br/><br/>
            </li>
            <li>
              Create a mobile app project
              <br/><br/>
              <strong>npx create-expo-app the-calculator</strong>
              <br/><br/>
            </li>
            <li>Once done, you should see "✅ Your project is ready!" on your terminal</li>
            <li>
              Now, login into your expo account on your terminal
              <br/><br/>
              <strong>npx expo login</strong>
              <br/><br/>
            </li>
            <li>Username/Email Address: [Enter your username or email]</li>
            <li>Password: [Enter your password]</li>
            <li>Once done, you should see "Success. You are now logged in as [your username]"</li>
          </ul>
        </div>
      </div>

      <div className="header">YOUR ARE DONE WITH THE SETUP. LET'S BEGIN BUILDING</div>
    </div>
  );
}

export default App;
