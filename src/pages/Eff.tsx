import React from 'react';
import { FC } from 'react';

export const Eff: FC = () => {
    return (
        <div>
            <div> 
                <iframe 
                title="Slide" 
                src="https://docs.google.com/presentation/d/e/2PACX-1vRYTEiIUB64-TQapyd8qepNM9jB-vaf0pzJW6rab7wgJD1plb19suBIEKme4CPHoi5N3qHaTUBHJuzH/pub?start=false&loop=false&delayms=3000" allowFullScreen 
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
