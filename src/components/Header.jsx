import React from "react";
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';


const Header = ({content}) => {
    const history = useHistory();
    return (
        <header>
            <h1>{content}</h1>
            <Button color="primary" onClick={() => history.push('/')}>
        Login
      </Button>
        </header>
    );
};

export default Header;