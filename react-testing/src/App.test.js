import { render } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';

let container = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    jest.useFakeTimers();
});

afterAll(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
    jest.useRealTimers();
});
test('로딩 전', () => {
    const MockCounterComponent = jest.fn();
    jest.mock('./component/Counter', () => (props) => {
        MockCounterComponent(props);
    });

    act(() => {
        render(<App />);
    });

    act(() => {
        jest.advanceTimersByTime(100);
    });

    const appContainer = document.querySelector('[data-testid="appContainer"]');
    expect(appContainer.innerHTML).toContain('로딩 중...');

    act(() => {
        jest.advanceTimersByTime(5000);
    });

    expect(appContainer.innerHTML).toContain('Counter');
});

test('로딩 후', () => {
    const MockCounterComponent = jest.fn();
    jest.mock('./component/Counter', () => (props) => {
        MockCounterComponent(props);
    });

    act(() => {
        render(<App />);
    });

    act(() => {
        jest.advanceTimersByTime(5000);
    });

    const appContainer = document.querySelector('[data-testid="appContainer"]');

    expect(appContainer.innerHTML).toContain('Counter');
});
