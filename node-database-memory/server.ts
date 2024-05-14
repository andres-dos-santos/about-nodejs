import fastify from "fastify";

import {
  // DatabaseMemory,
  type Param,
  type Query,
  type Video,
} from "./database-memory";
import { DatabasePostgres } from "./database-postgres";

const server = fastify();

// const database = new DatabaseMemory();
const database = new DatabasePostgres();

server.get("/videos", async (req, rep) => {
  const { search } = req.query as Query;

  const videos = await database.list(search);

  return videos;
});

server.post("/videos", async (req, rep) => {
  const body = req.body as Video;

  await database.create(body);

  return rep.status(201).send();
});

server.put("/videos/:id", async (req, rep) => {
  const { id: videoId } = req.params as Param;

  const body = req.body as Video;

  await database.update(videoId, body);

  return rep.status(204).send();
});

server.delete("/videos/:id", async (req, rep) => {
  const { id: videoId } = req.params as Param;

  await database.delete(videoId);

  return rep.status(204).send();
});

server.listen({ host: "0.0.0.0", port: Number(process.env.PORT) ?? 3333 });
