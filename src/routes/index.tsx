import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Home from '../pages/Home';
import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';

const Private = ({ Item }:any) => {
    const  { logged }  = useAuth();

    return logged  ? <Item /> : <SingIn />;
};

function RoutesApp() {
    return(
        <BrowserRouter>
         <Fragment>
            <Routes>
                <Route index path="/home" element={<Private Item={Home} />} />
                <Route path="/" element={<SingIn />} />
                <Route path="/signup" element={<SingUp />} />
                <Route path="*" element={<SingIn />} />
            </Routes>
         </Fragment>
        </BrowserRouter>
    );
}

export default RoutesApp;