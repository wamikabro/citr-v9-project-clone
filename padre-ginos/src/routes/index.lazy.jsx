import { createLazyFileRoute, Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function RouteComponent() {
  return <div>Hello "/"!</div>
}

function Index(){
  return (
    <div className='index'>
      <div className='index-brand'>
        <h1>Padre Gino's</h1>
        <p>Home of the best pizza in town</p>
      </div>
<ul>
  <li>
    <Link to="/order">Order</Link>
  </li>
  <li>
    <Link to="/past">Past Orders</Link>
  </li>
  <li>
    <Link to="/contact">Contact Us</Link>
  </li>
</ul>
    </div>
  )
}