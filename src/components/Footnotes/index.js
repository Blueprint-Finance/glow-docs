import styles from './styles.module.css';

const FOOTNOTES = [
  'Digital assets and DeFi activity involve risk, including possible loss of principal. Smart contract, oracle, validator, counterparty, and third-party protocol risks may result in losses or delays.',
  'Any APY, yield, rewards, points, or incentives are variable, not guaranteed, and may change, cease, or have no value.',
  'Leverage magnifies gains and losses and may result in liquidation, forced deleveraging, or loss of assets.',
  'Audits and security reviews do not eliminate risk and are not a guarantee that the protocol is free from bugs, exploits, or losses.',
  'Features, supported assets, third-party integrations, routing, and thresholds are subject to availability, protocol parameters, and change.',
  'Displayed logos identify investors, partners, or ecosystem relationships, as applicable, and do not constitute an endorsement, recommendation, or guarantee of future performance.',
];

export default function Footnotes() {
  return (
    <section className={styles.footnotes} aria-labelledby="footnotes-label">
      <p id="footnotes-label" className={styles.label}>
        Footnotes
      </p>
      <ol className={styles.list}>
        {FOOTNOTES.map((text, i) => (
          <li key={i} id={`fn-${i + 1}`} className={styles.item}>
            {text}
          </li>
        ))}
      </ol>
    </section>
  );
}
