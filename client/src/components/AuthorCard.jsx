import { BaseAuthorCard } from './base/BaseAuthorCard'

export function AuthorCard({ username, reputation, score, avatar_url }) {
  return (
    <BaseAuthorCard
      username={username}
      reputation={reputation}
      score={score}
      avatar_url={avatar_url}
    />
  )
}
