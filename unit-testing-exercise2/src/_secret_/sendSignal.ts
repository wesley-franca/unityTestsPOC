import { Ovni } from "@prisma/client";

function send(ovnis: Ovni[]) {
  console.info("Heellooooooo!");
}

export const sendSignal = {
  send,
}
