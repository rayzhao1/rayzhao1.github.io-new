export default function Intro() { 
    return (
        <body>
            <div className='slides_wrapper'>
                <iframe 
                    title="Slide" 
                    src="https://docs.google.com/presentation/d/e/2PACX-1vTn1WzQq914kzTRPx4sZvbPeEbEw4R-9MzhXJiv_fuQIWDhy084QJVp7fyflt-4LevM6jQJvYS9ITy0/embed?start=false&loop=false&delayms=60000"
                    width="1200" height="675"
                    loading='lazy'>    
                </iframe>
            </div>
            <div>
                <label>Notes</label>
                <input type='textarea'
                    name='textValue'
                    id='notes'
                />
            </div>
        </body>
    )
}