import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

export default {
  async fetch(request, env, ctx) {
    try {
      const page = await getAssetFromKV(
        {
          request,
          waitUntil(promise) {
            return ctx.waitUntil(promise)
          },
        },
        {
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: ASSET_MANIFEST,
        }
      )

      // Allow headers to be altered
      const response = new Response(page.body, page)

      response.headers.set('X-XSS-Protection', '1; mode=block')
      response.headers.set('X-Frame-Options', 'DENY')
      response.headers.set('X-Content-Type-Options', 'nosniff')
      response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

      return response

    } catch (e) {
      try {
        let error = await getAssetFromKV(
          {
            request,
            waitUntil(promise) {
              return ctx.waitUntil(promise)
            },
          },
          {
            ASSET_NAMESPACE: env.__STATIC_CONTENT,
            ASSET_MANIFEST: ASSET_MANIFEST,
          },
          {
            mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/404.html`, req),
          }
        )
        const response = new Response(error.body, { ...error, status: 404 })
        response.headers.set('X-XSS-Protection', '1; mode=block')
        response.headers.set('X-Frame-Options', 'DENY')
        response.headers.set('X-Content-Type-Options', 'nosniff')
        response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
        return response
      } catch (e) {}

      return new Response('Not found', { status: 404 })
    }
  },
}
