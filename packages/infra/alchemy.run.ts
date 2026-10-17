import alchemy from "alchemy";
import { SvelteKit } from "alchemy/cloudflare";
import { config } from "dotenv";

config({ path: "./.env" });
config({ path: "../../apps/web/.env" });

const app = await alchemy("perlica");

export const web = await SvelteKit("web", {
  cwd: "../../apps/web",
  bindings: {
    PUBLIC_SERVER_URL: alchemy.env.PUBLIC_SERVER_URL!,
  },
});

console.log(`Web    -> ${web.url}`);

await app.finalize();
