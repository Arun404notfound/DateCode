import { createAvatar } from "@dicebear/core";
import { botttsNeutral } from "@dicebear/collection";

/** Generated offline from a seed string. No real faces. */
export function avatarUri(seed: string): string {
  return createAvatar(botttsNeutral, { seed }).toDataUri();
}
