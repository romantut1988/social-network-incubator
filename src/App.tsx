import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6LDHZ4mvg3wbeNtVZ1DtNBjTOh6klXQ5bVw&usqp=CAU'/>
            </header>
            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>

            </nav>
            <div className='content'>
                <div>
                    <img
                        src='https://share.america.gov/wp-content/uploads/2018/06/international-waters-freedom-of-navigation-DY8ERP.jpg'/>
                </div>
                <div>
                    avatar + description
                </div>
                <div>
                    My posts
                    <div>
                        New posts
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
