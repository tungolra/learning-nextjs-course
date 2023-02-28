import Link from "next/link";
import React from "react";
import contacts from "../api/contacts";
import Layout from "@/components/Layout";

export default function Contacts() {
  return (
    <Layout>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.fname}>
            <Link legacyBehavior href={`contacts/${contact.fname}`}>
              <a>
                {contact.fname} {contact.lname}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
