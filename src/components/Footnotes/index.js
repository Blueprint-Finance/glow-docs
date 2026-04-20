import styles from './styles.module.css';

const FOOTNOTES = [
  'Digital assets and DeFi activity involve risk, including possible loss of principal. Smart contract, oracle, validator, counterparty, liquidity, and third-party protocol risks may result in losses or delay.',
  'Any APY, yield, rewards, points, incentives, or similar metrics are variable, not guaranteed, and may change, cease, or have no value.',
  'Leverage magnifies gains and losses and may result in liquidation, forced deleveraging, or loss of assets.',
  'Audits and security reviews do not eliminate risk and are not a guarantee that the protocol is free from bugs, exploits, or losses.',
  'Features, supported assets, third-party integrations, routing, and thresholds are subject to availability, protocol parameters, and change.',
  'Health levels, ratios, TVL, and other interface metrics are informational only and may change based on protocol parameters, oracle inputs, borrow rates, liquidity conditions, and other external dependencies.',
  'Coming-soon screens, preview cards, and prelaunch figures are illustrative only, may change before launch, and should not be presented as currently available terms or performance.',
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
