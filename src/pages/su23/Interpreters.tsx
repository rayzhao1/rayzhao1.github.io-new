import React from 'react';
import { FC } from 'react';

export const Interpreters: FC = () => {
    return (
        <div>
            <div> 
                <iframe 
                title="Slide" 
                src="https://docs.google.com/presentation/d/e/2PACX-1vR3BOK5huW6MK8JjJ7L8Sb6wdip9bkf20TX_k00dh-4oRiaNPz-_C6BMvnnBnDHzJ6DkrTLfAEevLiG/embed?start=false&loop=false&delayms=3000" allowFullScreen 
                width="1200" height="675">

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
