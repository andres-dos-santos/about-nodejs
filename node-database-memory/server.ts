import fastify from "fastify";

import {
  DatabaseMemory,
  type Param,
  type Query,
  type Video,
} from "./database-memory";

const server = fastify();

const database = new DatabaseMemory();

server.get("/videos", (req, rep) => {
  const { search } = req.query as Query;

  const videos = database.list(search);

  return videos;
});

server.post("/videos", (req, rep) => {
  const body = req.body as Video;

  database.create(body);

  return rep.status(201).send();
});

server.put("/videos/:id", (req, rep) => {
  const { id: videoId } = req.params as Param;

  const body = req.body as Video;

  database.update(videoId, body);

  return rep.status(204).send();
});

server.delete("/videos/:id", (req, rep) => {
  const { id: videoId } = req.params as Param;

  database.delete(videoId);

  return rep.status(204).send();
});

server.listen({ port: 3333 });
