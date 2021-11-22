import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Counter from './Counter';

let container = null;
beforeEach(() => {
    // DOM 엘리먼트를 렌더링 대상으로 설정
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // 종료시 정리
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

test('Counter라는 글자가 렌더링 되는가?', () => {
    render(<Counter />);

    const counterEl = screen.getByText(/Counter/i);
    expect(counterEl).toBeInTheDocument();
});

test('+ 버튼을 눌렀을 때 값이 증가하는가?', () => {
    act(() => {
        render(<Counter />, container);
    });

    // 버튼 엘리먼트를 가져와 클릭 이벤트를 트리거
    const increaseBtn = document.querySelector('[data-testid="increase"]');
    expect(increaseBtn.innerHTML).toBe('+');

    act(() => {
        increaseBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const count = document.querySelector('[data-testid="count"]');
    expect(count.innerHTML).toBe('1');

    act(() => {
        increaseBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(count.innerHTML).toBe('2');
});

test('- 버튼을 눌렀을 때 값이 감소하는가?', () => {
    act(() => {
        render(<Counter />, container);
    });

    // 버튼 엘리먼트를 가져와 클릭 이벤트를 트리거
    const increaseBtn = document.querySelector('[data-testid="decrease"]');
    expect(increaseBtn.innerHTML).toBe('-');

    act(() => {
        increaseBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const count = document.querySelector('[data-testid="count"]');
    expect(count.innerHTML).toBe('-1');

    act(() => {
        increaseBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(count.innerHTML).toBe('-2');
});
