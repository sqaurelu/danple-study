import React, { useEffect, useState } from 'react';
import Counter from './component/Counter';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <div
            style={{
                margin: '1rem',
                padding: '1rem',
            }}
            data-testid="appContainer"
        >
            {loading ? <h2>로딩 중...</h2> : <Counter />}
        </div>
    );
}

export default App;
