import React from 'react'
import axios from 'axios'

type Item = {
  title: string
  thumbnail: string,
  video: string,
  anime: string,
}

const base = axios.create({
  baseURL: 'http://localhost:8080/'
})

const getAnimes = async (): Promise<Item[]> => (
  await base.get<Item[]>('animes').then(resp => resp.data)
);


export default {
  getAnimes
}
