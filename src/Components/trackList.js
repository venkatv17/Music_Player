import { v4 as uuidv4} from 'uuid';

function trackList(){
    return [
        {
            name: "Maple Leaf Pt.2",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
            artist:"Philanthrope",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10243",
            id: uuidv4(),
            active: true
        },
        {
            name: "Paraglider",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/4fac6bb3a32f9e76b465990ba8d97d7db8a372f5-1024x1024.jpg",
            artist:"Kendall Miles, HERB",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9318",
            id: uuidv4(),
            active: false
        },
        {
            name: "Willow",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
            artist:"Philanthrope",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10262",
            id: uuidv4(),
            active: false
        },
        {
            name: "Still Life Dreamtime",
            cover: "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
            artist:"Aviino",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10459",
            id: uuidv4(),
            active: false
        },
        {
            name: "Remember",
            cover: "https://chillhop.com/wp-content/uploads/2020/05/be399329e137d6d507393565bacd8e9193c44b07-1024x1024.jpg",
            artist:"Miscel",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8824",
            id: uuidv4(),
            active: false
        }

    ]
}

export default trackList