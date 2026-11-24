import { fileURLToPath } from "node:url";

/** Hermes plugin name, as listed in `plugins.enabled`. */
export const pluginName = "dropbox-task-memory";

/** Directory to copy (without `__tests__/`) to `$HERMES_HOME/plugins/dropbox-task-memory/`. */
export const pluginDirectory = fileURLToPath(new URL(".", import.meta.url));

/** Files that make up the deployed plugin. */
export const pluginFiles = ["plugin.yaml", "__init__.py"] as const;

/** Tools the plugin registers, and the toolset they belong to. */
export const toolNames = [
  "dropbox_task_memory_read",
  "dropbox_task_memory_list",
  "dropbox_task_memory_write",
  "dropbox_task_memory_move",
] as const;
export const toolsetName = "dropbox_task_memory";

/** The only folder the write tools touch. Moves may also take a file from elsewhere under `/Agents/`. */
export const memoryRoot = "/Agents/Memory";

/** Required `.env` settings: a Dropbox refresh token for this plugin's own grant, and the app key it was issued to. */
export const refreshTokenEnv = "DROPBOX_TASK_MEMORY_REFRESH_TOKEN";
export const appKeyEnv = "DROPBOX_TASK_MEMORY_APP_KEY";
