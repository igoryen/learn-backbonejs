import { hello, SongView } from "./views/songView.js";
import { Song } from './models/song.js';

const song = new Song({ title: "Blue in Green" });

const songView = new SongView({ el: "#container", model: song });
songView.render();


console.log(hello());