import { npmGetPackage } from '../../api/npm'

export default async function getPackage(ctx) {
  const { query: { q: query } } = ctx
  ctx.body = await npmGetPackage(query)
}
