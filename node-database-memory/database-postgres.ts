import { sql } from "./db";

export interface Video {
  title: string;
  description: string;
  duration: number;
}

export class DatabasePostgres {
  async list(search?: string) {
    let videos: Video[];

    if (search) {
      videos = await sql`select * from videos where title ilike "%${search}%"`;
    } else {
      videos = await sql`select * from videos`;
    }

    return videos;
  }

  create(video: Video) {}

  update(id: string, video: Video) {}

  delete(id: string) {}
}
