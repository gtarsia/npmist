import { githubGetRepo } from '../../api/github'

export default async function getRepo(ctx) {
  const { params: { owner, repo } } = ctx
  ctx.body = await githubGetRepo({ owner, repo })
}
