import Link from "next/link";
import { 
  HomeIcon,
  MagnifyingGlassIcon,
  CalendarIcon,
  UserCircleIcon
} from "@heroicons/react/24/outline";

const navigations = [
  { 
    name: "Home", 
    href: "/consumer-dashboard",
    icon: <HomeIcon className="w-5 h-5" />
  },
  { 
    name: "Browse Services", 
    href: "/browse-services",
    icon: <MagnifyingGlassIcon className="w-5 h-5" />
  },
  { 
    name: "My Booking", 
    href: "/booking",
    icon: <CalendarIcon className="w-5 h-5" />
  },
  { 
    name: "Profile", 
    href: "/profile",
    icon: <UserCircleIcon className="w-5 h-5" />
  },
];

export default function SideNav() {
  return (
    <>
      {navigations.map((nav) => (
        <li key={nav.name} className="">
          <Link
            href={nav.href}
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-purple-100 hover:bg-white/10 transition-all duration-200 hover:text-white group"
          >
            <span className="[&>svg]:text-purple-300 [&>svg]:group-hover:text-white">
              {nav.icon}
            </span>
            <span className="font-medium text-base">{nav.name}</span>
          </Link>
        </li> 
      ))}
    </>
  );
} 