import React from "react";
import Link from "next/link";
import { routes } from "@/constants";
import Image from "next/image";
import * as styles from "./Header.css";

export const Header = () => {
  return (
    <Link href={routes.base} className={styles.logo}>
      <Image
        src="/next/images/logo.png"
        width="219"
        height="45"
        unoptimized
        alt="Qantas"
        fetchPriority="high"
      />
    </Link>
  );
};
