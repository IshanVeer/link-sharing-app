"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="max-md:hidden rounded-[12px] bg-light-100 flex items-center justify-between px-7 py-6 m-6">
      <Link href="/">
        <Image
          src="/assets/images/logo-devlinks-large.svg"
          alt="logo"
          height={100}
          width={100}
          className="w-36"
        />
      </Link>

      <div className="flex items-center justify-between lg:gap-4">
        <Link
          className={`flex items-center hs-bold  gap-2 px-7 py-3.5 rounded-[8px] ${
            pathname === "/"
              ? "bg-primary-200 text-primary-500"
              : "text-dark-200"
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
          <p>Links</p>
        </Link>
        <Link
          className={` px-7 py-3 rounded-[8px] hs-bold flex items-center gap-2  ${
            pathname === "/profile"
              ? "bg-primary-200 text-primary-500"
              : "text-dark-200"
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
          <p>Profile Details</p>
        </Link>
      </div>
      <Link
        className="px-6 py-2.5 border border-primary-500 rounded-[8px]"
        href="/preview"
      >
        <p className="hs-bold text-primary-500">Preview</p>
      </Link>
    </nav>
  );
};

export default Navbar;
