import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import Menu from './Menu';

export default (props: { children?: React.ReactNode }) => (
    <React.Fragment>
        <Menu />
        <Container>
            {props.children}
        </Container>
    </React.Fragment>
);
