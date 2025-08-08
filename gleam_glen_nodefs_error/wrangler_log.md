```
❯ wrangler dev

Cloudflare collects anonymous telemetry about your usage of Wrangler. Learn more at https://github.com/cloudflare/workers-sdk/tree/main/packages/wrangler/telemetry.md

 ⛅️ wrangler 4.26.1 (update available 4.28.0)
─────────────────────────────────────────────
[custom build] Running: gleam build
[custom build]    Compiled in 0.02s
[custom build] 
╭──────────────────────────────────────────────────────────────────────╮
│  [b] open a browser [d] open devtools [c] clear console [x] to exit  │
╰──────────────────────────────────────────────────────────────────────╯
The file src changed, restarting build...
[custom build] Running: gleam build
[custom build]    Compiled in 0.01s
[custom build] 
▲ [WARNING] The package "node:stream" wasn't found on the file system but is built into node.

  Your Worker may throw errors at runtime unless you enable the "nodejs_compat" compatibility flag.
  Refer to https://developers.cloudflare.com/workers/runtime-apis/nodejs/ for more details. Imported
  from:
   - build/dev/javascript/glen/glen.ffi.mjs


▲ [WARNING] The package "node:fs" wasn't found on the file system but is built into node.

  Your Worker may throw errors at runtime unless you enable the "nodejs_compat" compatibility flag.
  Refer to https://developers.cloudflare.com/workers/runtime-apis/nodejs/ for more details. Imported
  from:
   - build/dev/javascript/glen/glen.ffi.mjs


⎔ Starting local server...
✘ [ERROR] service core:user:glen_nodefs_error: Uncaught Error: No such module "node:stream".

    imported from "index.js"



✘ [ERROR] The Workers runtime failed to start. There is likely additional logging output above.


If you think this is a bug then please create an issue at https://github.com/cloudflare/workers-sdk/issues/new/choose
Note that there is a newer version of Wrangler available (4.28.0). Consider checking whether upgrading resolves this error.
🪵  Logs were written to "/home/coma/.wrangler/logs/wrangler-2025-08-06_23-22-38_628.log"
```
