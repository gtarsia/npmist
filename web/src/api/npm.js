import endpoint from '@/lib/endpoint'

export async function npmSearch(s) {
  return endpoint(`/npm/search?q=${s}`)
}

export function npmGetPackage(p) {
  return endpoint(`/npm/package?q=${p}`)
}
