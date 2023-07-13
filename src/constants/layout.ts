import { Field } from "@/types/form"
import { CreateCartProps } from "@/types/validations/cart"
import { SelectItemProps } from "@/ui/select"
import { PaymentMethod } from "@prisma/client"
import {
  Activity,
  CreditCard,
  DollarSign,
  LucideIcon,
  Users,
} from "lucide-react"
import { StatsProps } from "@/components/overview/stats"

export const EGYPT_CITIES: SelectItemProps[] = [
  { value: "Alexandria", children: "Alexandria", disabled: false },
  { value: "Aswan", children: "Aswan", disabled: true },
  { value: "Asyut", children: "Asyut", disabled: false },
  { value: "Beheira", children: "Beheira", disabled: true },
  { value: "Beni Suef", children: "Beni Suef", disabled: true },
  { value: "Cairo", children: "Cairo", disabled: false },
  { value: "Dakahlia", children: "Dakahlia", disabled: false },
  { value: "Damietta", children: "Damietta", disabled: true },
  { value: "Faiyum", children: "Faiyum", disabled: true },
  { value: "Gharbia", children: "Gharbia", disabled: false },
  { value: "Giza", children: "Giza", disabled: false },
  { value: "Ismailia", children: "Ismailia", disabled: false },
  { value: "Kafr El Sheikh", children: "Kafr El Sheikh", disabled: true },
  { value: "Luxor", children: "Luxor", disabled: true },
  { value: "Matruh", children: "Matruh", disabled: true },
  { value: "Minya", children: "Minya", disabled: true },
  { value: "Monufia", children: "Monufia", disabled: false },
  { value: "New Valley", children: "New Valley", disabled: true },
  { value: "North Sinai", children: "North Sinai", disabled: true },
  { value: "Port Said", children: "Port Said", disabled: true },
  { value: "Qalyubia", children: "Qalyubia", disabled: false },
  { value: "Qena", children: "Qena", disabled: false },
  { value: "Red Sea", children: "Red Sea", disabled: true },
  { value: "Sharqia", children: "Sharqia", disabled: true },
  { value: "Sohag", children: "Sohag", disabled: false },
  { value: "South Sinai", children: "South Sinai", disabled: false },
  { value: "Suez", children: "Suez", disabled: false },
]

export const COUNTRIES: SelectItemProps[] = [
  { value: "Egypt", children: "Egypt", disabled: false },
  { value: "Saudi Arabia", children: "Saudi Arabia", disabled: true },
  { value: "Iran", children: "Iran", disabled: true },
  { value: "Iraq", children: "Iraq", disabled: true },
  {
    value: "United Arab Emirates",
    children: "United Arab Emirates",
    disabled: true,
  },
  { value: "Jordan", children: "Jordan", disabled: true },
  { value: "Lebanon", children: "Lebanon", disabled: true },
  { value: "Kuwait", children: "Kuwait", disabled: true },
  { value: "Qatar", children: "Qatar", disabled: true },
  { value: "Bahrain", children: "Bahrain", disabled: true },
  { value: "Oman", children: "Oman", disabled: true },
]

// -------------------- CUSTOMER/HEADER
export const NAV_LINKS: NavLink[] = [
  { to: "/", title: "Home" },
  { to: "/products", title: "Products" },
]

// -------------------- CUSTOMER/HOME
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

// -------------------- CUSTOMER/CART
export const SHIPPING_COST = 10

export const PAYMENT_METHODS: (SelectItemProps & { value: PaymentMethod })[] = [
  {
    value: "CASH",
    children: "Cash",
    disabled: false,
  },
  {
    value: "PAYPAL",
    children: "Paypal",
    disabled: true,
  },
]

export const CART_ORDER_INFO_FIELDS: Field<keyof CreateCartProps>[] = [
  {
    type: "input",
    name: "name",
    label: "Full Name",
    desc: "the order owner's name.",
  },
  {
    type: "input",
    name: "phone",
    label: "Phone Number",
  },
  {
    type: "input",
    name: "address_line",
    label: "Address Line",
    input: { placeholder: "optional." },
  },
  {
    type: "input",
    name: "zip",
    label: "ZIP",
  },
  {
    type: "select",
    name: "city",
    label: "City",
    items: EGYPT_CITIES,
    desc: "only works in Egypt right now.",
  },
  {
    type: "select",
    name: "country",
    label: "Country",
    items: COUNTRIES,
    desc: "only works in Egypt right now.",
  },
  {
    type: "select",
    name: "payment_method",
    label: "Payment Method",
    desc: "some payment methods are invalid right now.",
    items: PAYMENT_METHODS,
  },
]

// -------------------- CUSTOMER/FOOTER
export const SOCIAL_MEDIA: NavLink[] = [
  { to: "https://facebook.com", title: "Facebook" },
  { to: "https://instagram.com", title: "Instagram" },
]

// -------------------- ADMIN/OVERVIEW
export const NAV_LINKS_ADMIN: NavLink[] = [
  { to: "/admin", title: "Overview" },
  { to: "/admin/products", title: "Products" },
  { to: "/admin/users", title: "Users" },
  { to: "/admin/orders", title: "Orders" },
]

export const STATS_CARDS: StatsProps = {
  cards: [
    {
      title: "Total Revenue",
      icon: DollarSign,
      indicator: "$",
      value: 45231.89,
      description: "+20.1% from last month.",
    },
    {
      title: "Subscriptions",
      icon: Users,
      indicator: "$",
      value: 45231.89,
      description: "+20.1% from last month.",
    },
    {
      title: "Sales",
      icon: CreditCard,
      indicator: "+",
      value: 12234,
      description: "+19% from last month.",
    },
    {
      title: "Active Now",
      icon: Activity,
      indicator: "+",
      value: 573,
      description: "+201 since last month.",
    },
  ],
}

export const OVERVIEW_CHART_DATA = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
]
