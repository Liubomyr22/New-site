import React from 'react';
import s from  './Music.module.css';

const Music = () => {
    const [music,setMusic] = React.useState([])
    React.useEffect(() => {
        fetch("https://shazam.p.rapidapi.com/auto-complete?term=kiss%20the&locale=en-US"
            )
.then(response => {
	setMusic(response);
})
.catch(err => {
	console.log(err);
});
    },[])
    console.log(music)
    return <div>
            {music}
            </div>
}

export default Music;