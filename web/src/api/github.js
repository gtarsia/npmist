import endpoint from '@/lib/endpoint'

export function githubGetRepo({ owner, repo }) {
  return endpoint(`/github/repos/${owner}/${repo}`)
}
