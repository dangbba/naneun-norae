import Song from "../models/Song";
import User from "../models/User";
import { service } from "../songlist";

export const home = async (req, res) => {
  try {
    const songs = await Song.find({});
    console.log(songs);
    return res.render("home", { pageTitle: "Home", songs });
  } catch (error) {
    console.log(error);
    return res.render("home", { pageTitle: "Home", songs: [] });
  }
};

export const search = (req, res) => {
  const { query: { term: searchResult } } = req;
  res.render("search", { pageTitle: "Search", searchResult });
};

export const music = (req, res) => {
  const play = service;
  res.render(`Play Music: ${req.params.id}`);
};

export const upload = async (req, res) => {
  const { title, description } = req.body;
  try {
    const dbSong = await Song.create({
      snippet: {
        title: title,
        description: description,
      }
    });
    console.log(dbSong);
    return res.redirect('/');
  } catch (error) {
    return res.render('upload', { pageTitle: 'Upload Song', Error: sorry })
  }
};

`https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=kpop&limit=50&api_key=${process.env.API_KEY}&format=json&period=7day`