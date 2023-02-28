import React from "react";
import { useRouter } from "next/router";
import contacts from "../api/contacts";
import Layout from "@/components/Layout";

export default function Person() {
  const router = useRouter();
  const { person } = router.query;
  const contact = contacts.find((contact) => contact.fname === person);

  return (
    <div>
      {contact.fname} {contact.lname}
      <a href="#" onClick={() => router.back()}>
        {" "}
        Back
      </a>
    </div>
  );
}
