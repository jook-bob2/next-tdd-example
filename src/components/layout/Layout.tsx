import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <header>
        <h1>헤더</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>푸터</p>
      </footer>
    </div>
  );
}
