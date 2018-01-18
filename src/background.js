import {wrapStore} from 'react-chrome-redux';

const store = {}

wrapStore(store, {portName: 'REACT_EXTENSION'}); // make sure portName matches