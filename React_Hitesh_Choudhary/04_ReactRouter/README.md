# React Router

## Notes
- Install react-router-dom
- It contains Link, NavLink
- We don't use a tag because it refreshed the page
- To get current active Menu, use callback in NavLink and change css for isActive
```
className={({isActive}) =>
    `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700' : 'text-gray-700'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
}
```
- We don't need App.jsx, we can use ReactProvider in main.jsx
- There are two ways to create router. In both ways, you need createBrowserRouter
1. Way 1:
```
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }
    ]
  }
])
```
2. Way 2:
```
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
)
```

### useParams
- useParams to access dynamic id from url route 

### loader in Route
- Optimize routes which has API call
- We use useLoaderData from react-router-dom to fetch data
```
<Route 
  path="/github" 
  element={<Github />} 
  loader={githubInfoLoader} 
/>
```