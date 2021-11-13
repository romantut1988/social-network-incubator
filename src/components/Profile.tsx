import React from "react";
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src='https://share.america.gov/wp-content/uploads/2018/06/international-waters-freedom-of-navigation-DY8ERP.jpg'/>
        </div>
        <div>
            avatar + description
        </div>
        <div>
            My posts
            <div>
                New posts
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post 1
                </div>
                <div className='item'>
                    post 2
                </div>
            </div>
        </div>
    </div>
};

export default Profile;