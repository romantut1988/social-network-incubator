import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6LDHZ4mvg3wbeNtVZ1DtNBjTOh6klXQ5bVw&usqp=CAU' />
            </header>
            <nav className='nav'>
                <div>
                    Profile
                </div>
                <div>
                    Mesa
                </div>
            </nav>
            <div>
                    Main content
            </div>
        </div>
    );
}

export default App;
