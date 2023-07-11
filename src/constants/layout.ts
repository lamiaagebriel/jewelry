// -------------------- CUSTOMER/HOME
export const NAV_LINKS: NavLink[] = [
  { to: "/", title: "Home" },
  { to: "/products", title: "Products" },
]

export const HERO: {
  title: string
  from: number
  image: string
}[] = [
  {
    title: "Lifestyle Collection",
    from: 199,
    image: "/hero/1.jpg",
  },
  {
    title: "Rings",
    from: 60,
    image: "/hero/2.jpg",
  },
  {
    title: "Earings",
    from: 45,
    image: "/hero/3.jpg",
  },
  {
    title: "Modern",
    from: 79,
    image: "/hero/4.jpg",
  },
  {
    title: "New",
    from: 89,
    image: "/hero/5.jpg",
  },
]
export const STATS = [
  { id: 1, name: "Transactions every 24 hours", value: "44 million" },
  { id: 2, name: "Assets under holding", value: "$119 trillion" },
  { id: 3, name: "New users annually", value: "46,000" },
]

// -------------------- ADMIN/OVERVIEW
export const NAV_LINKS_ADMIN: NavLink[] = [
  { to: "/admin", title: "Overview" },
  { to: "/admin/products", title: "Products" },
  { to: "/admin/users", title: "Users" },
  { to: "/admin/orders", title: "Orders" },
]
