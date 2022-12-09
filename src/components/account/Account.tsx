import React from "react";
import Layout from "@components/layout/Layout";
import AccountHeader from "./children/AccountHeader";
import AccountContent from "./children/AccountContent";

interface Props {
  name: string;
  mbti: string;
}

export default function Account({ name, mbti }: Props) {
  return (
    <Layout>
      <div>
        <AccountHeader name={name} />
        <AccountContent mbti={mbti} />
      </div>
    </Layout>
  );
}
