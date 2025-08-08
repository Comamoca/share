
--- 2025-08-06T23:22:38.762Z debug
🪵  Writing logs to "/home/coma/.wrangler/logs/wrangler-2025-08-06_23-22-38_628.log"
---

--- 2025-08-06T23:22:38.762Z log
[90m[39m
[90mCloudflare collects anonymous telemetry about your usage of Wrangler. Learn more at https://github.com/cloudflare/workers-sdk/tree/main/packages/wrangler/telemetry.md[39m
---

--- 2025-08-06T23:22:38.765Z debug
Metrics dispatcher: Source Key not provided. Be sure to initialize before sending events {"deviceId":"2aab41ed-4f90-4cc2-a776-c1f5436a5974","event":"wrangler command started","timestamp":1754522558765,"properties":{"amplitude_session_id":1754522558761,"amplitude_event_id":0,"wranglerVersion":"4.26.1","osPlatform":"Linux","osVersion":"#1-NixOS SMP PREEMPT_DYNAMIC Thu Jul 17 16:37:24 UTC 2025","nodeVersion":22,"isFirstUsage":false,"configFileType":"toml","isCI":false,"isPagesCI":false,"isWorkersCI":false,"isInteractive":true,"hasAssets":false,"argsUsed":[],"argsCombination":"","command":"wrangler dev","args":{"xJsonConfig":true,"j":true,"latest":true,"noBundle":false,"remote":false,"r":false,"testScheduled":false,"xVectorizeBindToProd":false,"xImagesLocalMode":false}}}
---

--- 2025-08-06T23:22:38.767Z debug
.env file not found at ".env". Continuing... For more details, refer to https://developers.cloudflare.com/workers/wrangler/system-environment-variables/
---

--- 2025-08-06T23:22:38.776Z log

 ⛅️ wrangler 4.26.1 (update available [32m4.28.0[39m)
[38;5;214m─────────────────────────────────────────────[39m
---

--- 2025-08-06T23:22:38.787Z log
[34m[custom build][39m Running: gleam build
---

--- 2025-08-06T23:22:38.834Z log
[31m[custom build][39m    Compiled in 0.02s
---

--- 2025-08-06T23:22:38.834Z log
[31m[custom build][39m 
---

--- 2025-08-06T23:22:38.874Z debug
.env file not found at ".dev.vars". Continuing... For more details, refer to https://developers.cloudflare.com/workers/wrangler/system-environment-variables/
---

--- 2025-08-06T23:22:38.918Z log
The file src changed, restarting build...
---

--- 2025-08-06T23:22:38.918Z log
[34m[custom build][39m Running: gleam build
---

--- 2025-08-06T23:22:38.954Z log
[31m[custom build][39m    Compiled in 0.01s
---

--- 2025-08-06T23:22:38.954Z log
[31m[custom build][39m 
---

--- 2025-08-06T23:22:39.250Z warn
[33m▲ [43;33m[[43;30mWARNING[43;33m][0m [1mThe package "node:stream" wasn't found on the file system but is built into node.[0m

  Your Worker may throw errors at runtime unless you enable the "nodejs_compat" compatibility flag.
  Refer to [4mhttps://developers.cloudflare.com/workers/runtime-apis/nodejs/[0m for more details. Imported
  from:
   - [34mbuild/dev/javascript/glen/glen.ffi.mjs[39m


---

--- 2025-08-06T23:22:39.251Z warn
[33m▲ [43;33m[[43;30mWARNING[43;33m][0m [1mThe package "node:fs" wasn't found on the file system but is built into node.[0m

  Your Worker may throw errors at runtime unless you enable the "nodejs_compat" compatibility flag.
  Refer to [4mhttps://developers.cloudflare.com/workers/runtime-apis/nodejs/[0m for more details. Imported
  from:
   - [34mbuild/dev/javascript/glen/glen.ffi.mjs[39m


---

--- 2025-08-06T23:22:39.252Z debug
RemoteRuntimeController teardown beginning...
---

--- 2025-08-06T23:22:39.253Z debug
RemoteRuntimeController teardown complete
---

--- 2025-08-06T23:22:39.255Z log
[2m⎔ Starting local server...[22m
---

--- 2025-08-06T23:22:39.262Z debug
[InspectorProxyWorker] handleProxyControllerIncomingMessage {"type":"reloadStart"}
---
