import { io } from "socket.io-client";

const URL = "https://video-call-server-gm7i.onrender.com";
// const URL = "https://video-call-server-gm7i.onrender.com";

export const socket = io(URL);
export const navbarBrand = "AamiraFi ";
