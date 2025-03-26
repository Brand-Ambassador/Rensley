"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll reach out shortly.");
    console.log(formData);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Verizon Business by Rensley</h1>
        <p>
          <strong>Promo:</strong> Get a <strong>free iPhone 16 Pro</strong> with
          the Pro plan or <strong>iPhone 16</strong> with the Plus plan when
          activating 4 new Verizon lines — port-in not required.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{ display: "grid", gap: "1rem", width: "100%", maxWidth: 600 }}
        >
          <label>
            How many Verizon lines?
            <input
              type="number"
              name="lines"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            How many Fios locations?
            <input type="number" name="fios" onChange={handleChange} required />
          </label>
          <label>
            How many 5G portable internet units?
            <input
              type="number"
              name="portable"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            How many cellphones to port in?
            <input
              type="number"
              name="portin"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Current provider
            <input type="text" name="provider" onChange={handleChange} />
          </label>
          <label>
            Monthly payment amount
            <input type="text" name="payment" onChange={handleChange} />
          </label>
          <label>
            Business name
            <input
              type="text"
              name="businessName"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Contact name
            <input
              type="text"
              name="contactName"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Phone number
            <input type="tel" name="phone" onChange={handleChange} required />
          </label>
          <label>
            Email address
            <input type="email" name="email" onChange={handleChange} required />
          </label>

          <button type="submit">Submit</button>
        </form>

        <div style={{ marginTop: "2rem", width: "100%", maxWidth: 600 }}>
          <h2>Schedule a Consultation</h2>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/rensley-nfteria/verizonbusiness"
            style={{ minWidth: "320px", height: "630px" }}
          />
          <script
            type="text/javascript"
            src="https://assets.calendly.com/assets/external/widget.js"
            async
          ></script>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://verizon.com/business"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Verizon Business
        </a>
        <a
          href="https://calendly.com/YOUR-CALENDLY-LINK"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Book a Call
        </a>
      </footer>
    </div>
  );
}
