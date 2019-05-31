import { npmSuggestions } from '../../api/npm'

export default async function search(ctx) {
  const { query: { q: query } } = ctx
  ctx.body = await npmSuggestions(query)
}
