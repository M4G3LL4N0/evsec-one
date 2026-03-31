"use client";

import { Logo } from "../shared/logo";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { name: "Scans", href: "/scans", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
  { name: "Settings", href: "/settings", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
  { name: "Reports", href: "/reports", icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  
  return (
    <div className="hidden md:flex md:w-64 md:flex-col border-r border-white/10 backdrop-blur bg-black/50">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <Logo />
          <span className="text-xs bg-gradient-to-r from-purple-500 to-indigo-500 px-2 py-1 rounded-full">
            PREMIUM
          </span>
        </div>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors",
              pathname === item.href
                ? "bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-white border border-white/10 shadow-md shadow-purple-500/10"
                : "text-white/60 hover:bg-white/5 hover:text-white"
            )}
          >
            <div className={cn(
              "p-1.5 rounded-lg mr-3 flex items-center justify-center",
              pathname === item.href 
                ? "bg-gradient-to-r from-purple-500 to-indigo-500"
                : "bg-white/5"
            )}>
              <svg
                className={cn(
                  "h-4 w-4",
                  pathname === item.href ? "text-white" : "text-white/60 group-hover:text-white"
                )}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
            </div>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center justify-between mb-2">
          <div className="text-xs text-white/40">Security status</div>
          <button className="text-xs px-2 py-1 rounded bg-white/5 hover:bg-white/10 transition-colors">
            Details
          </button>
        </div>
        <div className="flex items-center text-xs">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="font-medium">Active Protection</span>
          <span className="ml-auto text-green-400">100%</span>
        </div>
        <div className="mt-2 h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
          <div 
            className="h-full rounded-full bg-gradient-to-r from-green-400 to-green-500"
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
}
