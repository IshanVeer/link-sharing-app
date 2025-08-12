"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <nav className="md:hidden bg-light-100 flex items-center justify-between px-7 py-6">
      <Link href="/">
        <Image
          src="/assets/images/logo-devlinks-small.svg"
          alt="logo"
          height={100}
          width={100}
          className="w-8"
        />
      </Link>

      <div className="flex items-center justify-between ">
        <Link
          className={`inline-block px-7 py-3.5 rounded-[8px] ${
            pathname === "/" ? "bg-primary-200" : ""
          }`}
          href="/"
        >
          <Image
            src="/assets/images/icon-link.svg"
            alt="link"
            height={100}
            width={100}
            className={`w-5 ${pathname === "/" ? "text-primary-500" : ""}`}
          />
        </Link>
        <Link
          className={`inline-block px-7 py-3 rounded-[8px] ${
            pathname === "/profile" ? "bg-primary-200" : ""
          }`}
          href="/profile"
        >
          <Image
            src="/assets/images/icon-profile-details-header.svg"
            alt="profile"
            width={100}
            height={100}
            className={`w-5 ${
              pathname === "/profile" ? "text-primary-500" : ""
            }`}
          />
        </Link>
      </div>
      <Link
        className="px-4 py-2.5 border border-primary-500 rounded-[8px]"
        href="/preview"
      >
        <Image
          src="/assets/images/icon-preview-header.svg"
          alt="preview"
          height={100}
          width={100}
          className="w-5"
        />
      </Link>
    </nav>
  );
};

export default MobileNav;
