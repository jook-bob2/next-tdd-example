import React from "react";

interface Props {
  name: string;
}

export default function AccountHeader({ name }: Props) {
  return <h2 data-testid="name-test">{name}</h2>;
}
