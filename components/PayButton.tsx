'use client';

import { useState } from 'react';
import { PLATFORM_FEE_RATE, formatIDR } from '@/lib/format';
import { Modal } from './Modal';
import { ShieldIcon } from './icons';

/** "Pay Rp…" button with the escrow payment modal. `amount` is the total including platform fee. */
export function PayButton({ amount }: { amount: number }) {
  const [open, setOpen] = useState(false);
  const [paid, setPaid] = useState(false);

  const rental = Math.round(amount / (1 + PLATFORM_FEE_RATE));
  const fee = amount - rental;

  if (paid) {
    return (
      <span className="chip chip-paid">
        <span className="dot" />
        Paid · held in escrow
      </span>
    );
  }

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={() => setOpen(true)}>
        Pay {formatIDR(amount)}
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Pay for booking"
        footer={
          <>
            <button type="button" className="btn btn-ghost" onClick={() => setOpen(false)}>
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setPaid(true);
                setOpen(false);
              }}
            >
              Confirm payment
            </button>
          </>
        }
      >
        <div className="kv">
          <span className="k">3 days rental</span>
          <span className="mono">{formatIDR(rental)}</span>
        </div>
        <div className="kv">
          <span className="k">Platform fee</span>
          <span className="mono">{formatIDR(fee)}</span>
        </div>
        <div className="kv total" style={{ marginBottom: 18 }}>
          <span>Total</span>
          <span className="mono">{formatIDR(amount)}</span>
        </div>
        <div className="field">
          <label htmlFor="pay-method">Payment method</label>
          <select id="pay-method">
            <option>Bank transfer — BCA Virtual Account</option>
            <option>GoPay</option>
            <option>OVO</option>
            <option>Credit card</option>
          </select>
        </div>
        <p className="muted" style={{ fontSize: 12, display: 'flex', gap: 6, alignItems: 'flex-start' }}>
          <ShieldIcon />
          Funds are held in escrow by Waypoint Admin and released to the Seller only after the rental is confirmed complete.
        </p>
      </Modal>
    </>
  );
}
