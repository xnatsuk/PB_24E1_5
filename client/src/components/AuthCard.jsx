import { Outlet } from 'react-router-dom'
import { BaseAuthCard } from './base/BaseAuthCard'

export function AuthCard() {
  return (
    <div className="container">
      <BaseAuthCard>
        <Outlet />
      </BaseAuthCard>
    </div>
  )
}
