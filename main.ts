// Entry point: writes our one-sentence startup pitch to
// $MAKEFUN_OUTPUT_DIR/entry.txt (the file the judge reads).
// The pitch is a single fixed string: leased goats as a corporate
// lawn-mowing and confidential-document shredding service. The joke
// turns on the second look — goats really do eat paper and really are
// hired to clear land, so a goat cannot leak secrets, cannot strike,
// and fertilizes the lawn it mows. Facilities pays per acre, which is
// the whole business model in one clause: product, payer, price basis,
// and reason, in a single 182-character sentence. Deterministic: the
// same bytes on every run, no input, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "We lease trained goats to mow corporate lawns and shred confidential documents — facilities pays per acre, because a goat never leaks, never unionizes, and fertilizes while it works.\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const PITCH_BODY = PITCH.trimEnd();
if (PITCH_BODY.length > 200) {
  console.error(`PITCH exceeds the 200-character limit: ${PITCH_BODY.length} characters`);
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
console.log(PITCH.trimEnd());
