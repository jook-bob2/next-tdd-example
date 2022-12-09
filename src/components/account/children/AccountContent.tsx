import React from "react";

interface Props {
  mbti: string;
}

export default function AccountContent({ mbti }: Props) {
  return <p data-testid="mbti-test">{mbti}</p>;
}
