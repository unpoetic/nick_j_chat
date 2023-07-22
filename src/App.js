import './App.css';
import ChatDisplay from './components/ChatDisplay';
import ChatSideBar from './components/ChatSideBar';
import { useState } from 'react';
const Store = require('electron-store');
const store = new Store();

store.set('unicorn_other', '🦄');
console.log(store.get('unicorn_other'));
console.log(store.get('lastMessage'));

function App() {
	let authenticated = store.get('loggedIn');
	const [loggedIn, setLoggedIn] = useState(authenticated);
	//const [loggedIn, setLoggedIn] = useState(false);
	const [signUpStep, setSignUpStep] = useState(1);

  	const incrementStepPhone = () => {
		let phoneNumber = document.getElementById("phoneNumber").value;
		console.log(phoneNumber);
		
		if(phoneNumber)	{
			store.set('phoneNumber', phoneNumber);
			setSignUpStep(signUpStep + 1);
		}
  	}

	const incrementStepCode = () => {
		let verificationCode = document.getElementById("code").value;
		console.log(verificationCode);

		if(verificationCode)	{
			setSignUpStep(signUpStep + 1);
		}
  	}

	const handleSignIn = () => {
		const firstName = document.getElementById("fName").value;
		const lastName = document.getElementById("lName").value;
		console.log(firstName, lastName);

		setLoggedIn(!loggedIn);
    	store.set('loggedIn', 'loggedIn');
		store.set('firstName', firstName);
		store.set('lastName', lastName);
    	console.log(authenticated);
  	}

	if(loggedIn == authenticated) {
  	//if(loggedIn == true) {
  		return (
    		<div className="App">
      			<div className="wrapper">
      				<div className="panel">
						<ChatSideBar
							firstName={store.get('firstName')} 
							lastName={store.get('lastName')}
						/>
					</div>
      				<div className="content">
						<ChatDisplay 
							firstName={store.get('firstName')} 
							lastName={store.get('lastName')} 
						/>
					</div>
      			</div>
    		</div>
	);
  	} else {
    	if(signUpStep == 1) {
      		return (
        		<div className="App">
            		<div id="sign-in">
						<div className='vertical-center'>
							<div className='onBoardingContent'>
								<img src="chat_logo.png" />
								<p>What is your phone number?</p>
								<span>+1</span><input id="phoneNumber" placeholder='Phone Number' /><br />
								<div id="next-btn" onClick={incrementStepPhone}>Next</div>
							</div>
						</div>  
            		</div>
        		</div>
      		);
    	} else if(signUpStep == 2) {
      		return (
        		<div className="App">
            		<div id="sign-in">
						<div className='vertical-center'>
							<div className='onBoardingContent'>
								<img src="chat_logo.png" />
								<p>+1 {store.get('phoneNumber')}</p>
								<span>We have sent you an SMS with the code.</span><br /><br />
								<input id="code" placeholder={"Code"} /><br />
								<div id="next-btn" onClick={incrementStepCode}>Next</div>   
            				</div>
						</div>	
					</div>
        		</div>
      		);
    	} else if(signUpStep == 3) {
      		return (
				<div className="App">
					<div id="sign-in">
						<div className='vertical-center'>
							<div className='onBoardingContent'>
								<img src="chat_logo.png" />
								<p>What is your full name?</p>
								<input id="fName" placeholder='First Name' /><br />
								<input id="lName" placeholder='Last Name' /><br />
								<div id="next-btn" onClick={handleSignIn}>Next</div>
							</div>
						</div>   
					</div>
				</div>
			);
    	}
  	} 
}

export default App;

/*
TODO:
    Add timestamps DONE
    Have messages take turns DONE
    Make default greeting for initial DONE
    Make sidebar for conversations DONE
    Make conditional rendering for seeing chat display (authentication) DONE
    Phone Number, Name, Code simulation steps DONE
    Persist auth on refresh (LocalStorage?) DONE
	-Capture Name and Phone Number and persist DONE
	-Input Styling DONE
    -Authentication Steps Styling DONE

    Make it everything look pretty (layout, Color, Animation, Images) In Progress
    -Headers
    -Bubbles styling
    -Animated scrolling
    -Add Write New and Send Message graphics
    -Last code cleanup
    -Edit README.md and document
    -BUG: give chat bubbles a max-width
*/