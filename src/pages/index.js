import './index.css'

function* foo(x) {
    yield x + 1;
    yield x + 2;
    return x + 3;
};