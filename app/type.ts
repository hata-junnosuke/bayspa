import { z } from 'zod';

export const zPlayer = z.object({
  id: z.number().int(),
  name: z.string(),
  number: z.number().int(),
  fight_song: z.string(),
  explanation: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
export const zPlayers = z.array(zPlayer);
export const zUpsertPlayer = z.object({
  name: z.string(),
  number: z.number().int(),
  fight_song: z.string(),
  explanation: z.string(),
});

export type Player = z.infer<typeof zPlayer>;
export type Players = z.infer<typeof zPlayers>;
