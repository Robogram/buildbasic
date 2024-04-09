import './App.scss';
import { useState } from "react";

import Calculator from "./calculator"

export default function App() {
  const [codeStep, setCodestep] = useState(0)

  return (
    <div id="app">
      <div className="header">Let's build something simple and fun:)</div>

      <div className="header">Let's build a simple mobile app calculator that only adds two numbers</div>

      <div className="header">This is what you'll build. Test it:)</div>

      <div style={{ height: 570, margin: '10px auto', width: 300 }}>
        <Calculator/>
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

      <div className="header-shot-container">
        <div className="header-shot">
          <img style={{ height: '100%', width: '100%' }} src="/expo-newuser.jpeg"/>
        </div>
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
            <li>You should see a project folder on your desktop call "the-calculator"</li>
            <li>Don't get overwhelm and confused with the folder. You will learn it step by step:)</li>
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

        <div className="header">YOUR ARE DONE WITH THIS EASY SETUP.<br/>NOW LET'S EASILY BUILD THE CALCULATOR</div>

        <div className="header-item">
          <div className="header-item-header">2. Getting to know the basic only</div>
          <ul>
            <li>Go inside the project folder (the-calculator) on your desktop</li>
            <li>For this calculator app, the only file that you'll need to focus on is App.js.</li>
            <li>All the code will be written inside the App.js file</li>
            <li>You won't need to touch other files for this app</li>
            <li>
              Ok, navigate into the project folder on your terminal
              <br/><br/>
              <strong>cd ~/desktop/the-calculator</strong>
              <br/><br/>
            </li>
            <li>
              Start the app
              <br/><br/>
              <strong>npx expo start</strong>
            </li>
            <li>
              Go on the Expo app on your phone, you should see this screen,
              <div className="header-shot-container">
                <div className="header-shot">
                  <img style={{ height: '100%', width: '100%' }} src="/app-shot.jpeg"/>
                </div>
              </div>
            </li>
            <li>Tap on the (the-calculator)</li>
            <li>After loading, you should see the message on your phone "Open up App.js to start working on your app!"</li>
            <li>Yes! Your app is running on your phone.</li>
            <li>
              From now, as long as your app is running on terminal, every code
              you add/remove in App.js will automatically show up on your phone. Simple as that!
            </li>
          </ul>
        </div>

        <div className="header-item">
          <div className="header-item-header">3. Getting to know the code</div>
          <ul>
            <li className="code-guide">
              <div className="code-guide-header">
                {(codeStep >= 0 && codeStep < 2) && <img style={{ height: 250, width: 320 }} src="/app-json-code.jpeg"/>}
                <div id="infos">
                  <ul>
                    {codeStep == 0 && (
                      <>
                        <li>Everything in the above code creates the screen on the right</li>
                        <li>react-native is a programming tool for developers to easily build mobile apps</li>
                      </>
                    )}

                    {codeStep == 1 && (
                      <>
                        <li>There are many components we can use inside react-native but for this calculator, we will only need 4 components</li>
                        <li>As you can see on line 1, we are importing the StyleSheet, Text and View components</li>
                        <ul>
                          <li><strong>StyleSheet</strong>: to put some style and color to the app</li>
                          <li><strong>Text</strong>: to display some words for the app</li>
                          <ul>
                            <li>Like how you see "Open up App.js to start working on your app!" is wrapped in the Text component on line 6</li>
                          </ul>
                          <li><strong>View</strong>: A container for the app</li>
                          <li><strong>TouchableOpacity</strong>: To enable touch button on the screen (not imported in the code above yet)</li>
                        </ul>
                      </>
                    )}

                    {codeStep == 2 && (
                      <>
                        <li>Ok, now back to the calculator</li>
                        <li>Every square block on the calculator represents a View component</li>
                        <li>Each symbol(+/-), number(0 - 9) and word(CLEAR) inside the View represents a Text component</li>
                        <li>Ok, let begin. Press "NEXT" to add your first code</li>
                      </>
                    )}

                    {codeStep == 3 && (
                      <>
                        <li>
                          Let's clear the starting code first
                          <br/><br/>
                          <ul>
                            <li>Remove the Text component in the App.js file</li>
                          </ul>
                        </li>

                        <li>Let's add the first View component at the top that will contain the answer</li>
                      </>
                    )}
                  </ul>
                </div>
                {/* <div id="actions">
                  {codeStep > 0 && (
                    <div className="action" onClick={() => setCodestep(codeStep - 1)}>BACK</div>
                  )}
                  <div className="action" onClick={() => {
                    if (codeStep < 3) {
                      setCodestep(codeStep + 1)
                    }
                  }}>NEXT</div>
                </div> */}
              </div>
              <div className="header-shot-container">
                {(codeStep >= 0 && codeStep < 2) && (
                  <div className="header-shot">
                    <img style={{ height: '100%', width: '100%' }} src="/app-js-intro.jpeg"/>
                  </div>
                )}

                {(codeStep >= 2 && codeStep < 4) && <Calculator/>}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
