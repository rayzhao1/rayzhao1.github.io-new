import { FC } from 'react';

export const Control: FC = () => {
    return (
        <div>
            <div> 
                <iframe title="Slide" src="https://docs.google.com/presentation/d/e/2PACX-1vRkKCj46dRpHiPM6WMEc6UNQIXNX8Br3KAm980IUrHehl0pZK5_r9KuBziDcTd2maQxYY0QfoRQDRkn/embed?start=false&loop=false&delayms=60000"
                 width="800" height="450"></iframe>
            </div>
            <form>
                <label>Notes</label>
                <textarea>
                </textarea>
            </form>
        </div>
    )
};