import gleam/javascript/promise
import glen
import glen/status

pub fn handle_req(_req) {
  "On a Cloudflare worker!"
  |> glen.html(status.ok)
  |> promise.resolve
}
