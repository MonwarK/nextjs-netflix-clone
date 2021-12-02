import { atom } from "recoil";

export const isModalOpenState = atom({
  key: "isModalOpenState",
  default: false
})

export const movieState = atom({
  key: "movieAtomState",
  default: {id: 580489}
})