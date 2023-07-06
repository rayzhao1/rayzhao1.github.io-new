import { FC } from 'react';

export const Practice: FC = () => {
    return (
        <main>
            <header>
                <h1>Some problems to try!</h1> 
                <p>Please make a copy of the Notebooks:</p>
            </header>
            <body>
                <h3 className = "body"><a href="https://colab.research.google.com/drive/1yFvve-QPoX90cvUjVPhalJOYdGoVyhcV?usp=sharing" target="_blank" rel="noopener noreferrer">Problems</a></h3>
                <h3 className = "body"><a href="https://colab.research.google.com/drive/13bbng27LJOleSyH-VbxP4yPC-Ho7h3RN?usp=sharing" target="_blank" rel="noopener noreferrer">Solutions</a></h3>
                <p>
                    <ul>
                        <li>Probably a bit more involved than lab/discussion problems, but easier than exam problems.</li>
                        <li>Let me know if you find mistakes or more optimal solutions!</li>
                    </ul>
                </p>
            </body>
        </main>
    )
};