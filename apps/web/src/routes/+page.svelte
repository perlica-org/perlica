<script lang="ts">
import { PUBLIC_SERVER_URL } from "$env/static/public";
import { onMount } from "svelte";

let healthCheck = { isLoading: true, data: false };

onMount(async () => {
	try {
		const response = await fetch(`${PUBLIC_SERVER_URL}/health`);
		healthCheck = { isLoading: false, data: response.ok };
	} catch {
		healthCheck = { isLoading: false, data: false };
	}
});

const TITLE_TEXT = `
   ██████╗ ███████╗████████╗████████╗███████╗██████╗
   ██╔══██╗██╔════╝╚══██╔══╝╚══██╔══╝██╔════╝██╔══██╗
   ██████╔╝█████╗     ██║      ██║   █████╗  ██████╔╝
   ██╔══██╗██╔══╝     ██║      ██║   ██╔══╝  ██╔══██╗
   ██████╔╝███████╗   ██║      ██║   ███████╗██║  ██║
   ╚═════╝ ╚══════╝   ╚═╝      ╚═╝   ╚══════╝╚═╝  ╚═╝

   ███████╗██╗   ██╗██╗     ██╗     ███████╗████████╗ █████╗  ██████╗██╗  ██╗
   ██╔════╝██║   ██║██║     ██║     ██╔════╝╚══██╔══╝██╔══██╗██╔════╝██║ ██╔╝
   █████╗  ██║   ██║██║     ██║     ███████╗   ██║   ███████║██║     █████╔╝
   ██╔══╝  ██║   ██║██║     ██║     ╚════██║   ██║   ██╔══██║██║     ██╔═██╗
   ██║     ╚██████╔╝███████╗███████╗███████║   ██║   ██║  ██║╚██████╗██║  ██╗
   ╚═╝      ╚═════╝ ╚══════╝╚══════╝╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝
   `;
</script>

<div class="container mx-auto max-w-3xl px-4 py-2">
	<pre class="overflow-x-auto font-mono text-sm">{TITLE_TEXT}</pre>
	<div class="grid gap-6">
		<section class="rounded-lg border p-4">
			<h2 class="mb-2 font-medium">API Status</h2>
			<div class="flex items-center gap-2">
				<div
					class={`h-2 w-2 rounded-full ${healthCheck.data ? "bg-green-500" : "bg-red-500"}`}
				></div>
				<span class="text-muted-foreground text-sm">
					{healthCheck.isLoading
						? "Checking..."
						: healthCheck.data
							? "Connected"
							: "Disconnected"}
				</span>
			</div>
		</section>
	</div>
</div>
