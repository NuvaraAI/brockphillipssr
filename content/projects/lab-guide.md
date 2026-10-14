# Nuvara Lab Guide

**Signed local distribution kit · Supervised macOS pilot**

[← Project index](README.md)

A supervised lab workflow needs a way to distribute the intended package, verify its contents, and activate it without accidentally shipping publisher secrets or student information.

## My contribution

I defined the pilot scope and directed AI-assisted implementation and validation of the release, activation, and installation workflow.

## What was built

- Signed release manifests and a hash allowlist.
- Encrypted activation material and device-key possession checks.
- Repeatable request, issuance, activation, installation, and status operations.
- Checks for edited signatures, changed ciphertext, expiry, device mismatch, traversal, and symlinks.
- A reviewed customer package that excludes publisher keys and original private source.

The implementation uses Node.js and Python with Ed25519 signatures and no runtime npm dependencies.

## Evidence and status

The October 2, 2026 validation record reports eight checks, including a full disposable CLI journey. The macOS identifier adapter was exercised; a second device was simulated.

This is a supervised local pilot package. It does not establish customer adoption, sales, native Windows/Linux acceptance, a revocation service, or hardware attestation. Software device binding is not an anti-copy guarantee.

**Skills demonstrated:** release integrity, signed artifacts, bounded activation, repeatable CLI workflows, secret exclusion, validation design.

[Evidence guide](../evidence/README.md)
