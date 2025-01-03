import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/past')({
  component: Past,
})

function Past() {
  return (
    <div className='past'>
      <h1>Past Orders</h1>
      <p>Here are your past orders</p>
    </div>
  )
}
