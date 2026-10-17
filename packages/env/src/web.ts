import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

type ImportMetaEnvRecord = Record<string, string | boolean | undefined>;

export const env = createEnv({
  clientPrefix: "PUBLIC_",
  client: {
    PUBLIC_SERVER_URL: z.url().default("http://localhost:3000"),
  },
  runtimeEnv: (import.meta as ImportMeta & { env: ImportMetaEnvRecord }).env,
  emptyStringAsUndefined: true,
});
