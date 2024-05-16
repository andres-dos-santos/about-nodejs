import { randomUUID } from "node:crypto";

export interface Param {
  id: string;
}

export interface Query {
  search: string;
}

export interface Video {
  title: string;
  description: string;
  duration: number;
}

export class DatabaseMemory {
  #videos = new Map();

  list(search?: string) {
    return Array.from(this.#videos.entries())
      .map((videoArray) => {
        const id = videoArray[0];
        const data = videoArray[1];

        return { id, ...data };
      })
      .filter((video) => {
        if (search) {
          return video.title.includes(search);
        }

        return true;
      });
  }

  create(video: Video) {
    const videoId = randomUUID();

    this.#videos.set(videoId, video);
  }

  update(id: string, video: Video) {
    this.#videos.set(id, video);
  }

  delete(id: string) {
    this.#videos.delete(id);
  }
}
