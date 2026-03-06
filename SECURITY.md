# Security Policy

## Supported Versions

We provide security updates for the latest stable release on `main`.

| Version | Supported |
| --- | --- |
| Latest release | ✅ |
| Older releases | ❌ |

## Reporting a Vulnerability

Please **do not** open public GitHub issues for security reports.

Report privately by emailing: **security@claw-x.com**

Include:
- A clear description of the issue
- Reproduction steps or proof-of-concept
- Affected version/commit
- Impact assessment (what can an attacker do?)

### Response Targets

- Initial acknowledgment: **within 72 hours**
- Triage decision: **within 7 days**
- Fix timeline: based on severity and exploitability

If your report is confirmed, we will:
1. Patch the issue
2. Publish a security release
3. Credit you (if you want) in release notes

## Hardening Notes for This Fork

This fork uses stricter release defaults:
- Windows code signing required (`forceCodeSigning: true`)
- Update signature verification enabled (`verifyUpdateCodeSignature: true`)
- Auto-update source restricted to this fork’s GitHub Releases
