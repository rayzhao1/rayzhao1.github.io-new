import { FC } from 'react';

export const Rec: FC = () => {
    return (
        <div>
            <div> 
                <iframe 
                title="Slide" 
                src="https://docs.google.com/presentation/d/e/2PACX-1vQMeO_H9l9j8VdG2Oo2t6aadKgl2YDC0VKAtKQVvW1C3v2aYosirkuNHgymXKOt5IlCerBQT9DauADu/embed?start=false&loop=false&delayms=3000" allowFullScreen 
                width="800" height="450">

                 </iframe>
            </div>
            <form>
                <label>Notes</label>
                <textarea>
                </textarea>
            </form>
        </div>
    )
};