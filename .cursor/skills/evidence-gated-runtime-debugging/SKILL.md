---
name: evidence-gated-runtime-debugging
description: Diagnose real-runtime failures by isolating layers with observed evidence before changing implementation. Use for production, device, backend, web, auth, OCR/AI, sync, deployment, state, or integration failures where the cause is not yet proven.
---

# Evidence-Gated Runtime Debugging

Use this skill when a real user-facing flow fails, behaves unexpectedly, or disagrees with local/source expectations.

The goal is to move from:

**observed failure → exact failing boundary → proven root cause → smallest corrective implementation → real acceptance**

without speculative fixes, unnecessary diagnostic loops, or production risk.

## Core rules

### NO-CLAIM-WITHOUT-EVIDENCE
Never report PASS, VERIFIED, COMPLETE, READY, FIXED, ACCEPTED, MISMATCH, or DATA LOSS unless the exact relevant observation actually ran and supports that claim.

Always distinguish:
- CODE_WRITTEN
- SOURCE_PATH_CONFIRMED
- TEST_WRITTEN
- TEST_EXECUTED
- TEST_PASS
- RUNTIME_PROVEN
- DEVICE_PROVEN
- NOT_RUN
- UNKNOWN
- BLOCKED

Examples:
- UNKNOWN ≠ FAIL
- NOT OBSERVED ≠ NOT WORKING
- COULD NOT VERIFY ≠ MISMATCH
- client HTTP 200 ≠ durable server acceptance
- queue = 0 ≠ data loss
- source inspection ≠ runtime proof
- test written ≠ test executed
- build pass ≠ feature acceptance

### NO-SOLUTION-BEFORE-INVENTORY
Before recommending or implementing a fix:
1. inspect the existing end-to-end path;
2. inventory relevant existing services, libraries, adapters, APIs, tests, storage primitives, auth primitives, deployment topology, and runtime surfaces;
3. identify the authoritative existing primitive;
4. identify the exact missing or failing boundary;
5. only then design the smallest compatible change.

Preference:
**existing repo primitive → mature existing dependency → compatible extension → new custom mechanism**

If the relevant primitive was not inspected, the implementation choice is UNKNOWN.

### DIAGNOSIS ≠ DESIGN
Proving root cause does not prove the correct implementation.
A solution recommendation needs its own evidence:
- existing primitive supports it;
- architecture remains coherent;
- no duplicate subsystem is introduced unnecessarily;
- safety and rollback are understood;
- acceptance criteria are explicit.

### RUNTIME FIRST FOR RUNTIME FAILURES
Prefer evidence from:
1. live user-facing artifact;
2. actual deployed revision/service;
3. runtime logs/diagnostics;
4. device state;
5. backend state;
6. source code;
7. assumptions last.

Do not assume deployed artifact equals local Git.

For multi-service systems verify:
- exact URL the user opens;
- exact service/revision serving it;
- backend receiving the request;
- whether the live artifact contains the intended code.

### PRIVACY-SAFE OBSERVABILITY
If evidence is insufficient, add the smallest possible diagnostics.

Prefer:
- counts
- booleans
- issue codes
- timings
- hashes
- stage names
- non-sensitive status metadata

Avoid:
- raw OCR text
- receipt contents
- merchant names
- dates
- amounts
- item names
- images
- credentials
- API keys
- tokens
- personal/financial payloads

Extend existing diagnostics surfaces instead of creating parallel observability.

### OBSERVABILITY BEFORE TUNING
Do not change prompts, models, OCR parameters, preprocessing, retry policies, matching thresholds, auth architecture, or data semantics until evidence isolates the failing layer.

Typical path:
**input → local capture → persistence → transport → auth → backend handler → processing primitive → structured extraction → validation → UI mapping → canonical save**

### LAST-DIAGNOSTIC RULE
Avoid endless observability loops.
When enough evidence exists to isolate the failing layer, stop adding diagnostics and move to corrective implementation.

If one final diagnostic split is necessary:
- declare it as the last diagnostic split before fix;
- define exactly which hypotheses it distinguishes;
- define how the next observation maps to a corrective action;
- do not add another diagnostic round unless a genuinely new layer appears.

### ONE PRODUCTION MUTATION BOUNDARY AT A TIME
For production-sensitive work, isolate mutation boundaries where rollback/safety differs.

Examples:
- secret creation
- secret binding
- deployment
- IAM
- canonical financial-state mutation
- Android reinstall/data clear

Before production mutation:
- prove necessity;
- identify rollback;
- verify intended diff;
- exclude unrelated working-tree changes;
- run read-only preflight where applicable.

## Standard workflow

### A. Capture observed failure
Write only what the user actually observed.
Do not infer cause yet.

Return:
- USER_OBSERVED_FAILURE
- environment/service/revision if known
- what worked
- what failed

### B. Build layer map
Map the real path end-to-end.
For each layer classify:
- RUNTIME_PROVEN
- SOURCE_PATH_CONFIRMED
- NOT_RUN
- UNKNOWN

Identify the first boundary where evidence stops.

### C. Inventory existing primitives
Inspect only the subsystem relevant to the failing boundary.

Examples:
- OCR: decode, scaling, grayscale/contrast, orientation, Tesseract PSM/OEM, languages, PDF OCR path
- auth: session, renewal, trusted device, secret bindings, IAM, operator auth
- deployment: services, Dockerfiles, artifact paths, live URLs, revisions, rollback
- sync: durable outbox, scheduler, idempotency, ack semantics, retry/recovery

### D. Prove the failing layer
Use least-invasive evidence:
- Cloud Run request logs
- sanitized diagnostics
- live artifact inspection
- device diagnostics
- unit/handler/runtime tests
- state metadata
- idempotency reconciliation

If root cause is not proven, return ROOT_CAUSE_NOT_PROVEN and state exactly what observation is missing.

### E. Design smallest corrective change
Only after root cause is proven.

The fix should:
- stay behind the existing authoritative abstraction;
- reuse existing primitives;
- avoid parallel architectures;
- avoid changing unrelated layers;
- preserve safety boundaries;
- be testable;
- have explicit rollback.

Return:
- ROOT_CAUSE
- AUTHORITATIVE_PRIMITIVE
- SMALLEST_FIX
- OUT_OF_SCOPE

### F. Local verification gate
Before deployment, prove behavior locally at the appropriate evidence level.

Use:

| CHECK | RAN? | EVIDENCE LEVEL | RESULT | EXACT EVIDENCE |
|---|---|---|---|---|

Do not call deploy-ready if required checks were skipped.
Read-only preflight belongs before deployment authorization.

### G. Controlled production deployment
After explicit authorization:
1. verify intended diff;
2. verify rollback;
3. deploy only affected service;
4. verify health;
5. verify intended traffic;
6. inspect actual live artifact/runtime;
7. confirm unrelated state/config unchanged.

Do not infer Web deployment from backend deployment or vice versa.

### H. Manual real-world acceptance
Local tests are not final acceptance for user-facing flows.

Run one controlled real-world scenario:
- photograph one real receipt;
- trigger one purchase event;
- test one notification;
- test one sync after recovery.

Classify:
- MANUAL_ACCEPTANCE_PASS
- MANUAL_ACCEPTANCE_FAIL
- PARTIAL_ACCEPTANCE

If failed, return to runtime layer isolation, not speculative implementation.

## Evidence table template

```text
STATUS:
...

EVIDENCE TABLE:

| CHECK | RAN? | EVIDENCE LEVEL | RESULT | EXACT EVIDENCE |
|---|---|---|---|---|
| ... | YES/NO | ... | ... | ... |

NOT RUN:
...

UNKNOWN:
...

ROOT CAUSE:
...

SMALLEST FIX:
...

PRODUCTION MUTATIONS:
0 or exact list

NEXT:
one step only
```

## Classification discipline

Prefer precise classifications:
- AUTH_BLOCKED
- CONFIG_BINDING_MISMATCH
- LIVE_WEB_IS_STALE
- OCR_QUALITY_FAILURE
- AI_EXTRACTION_FAILURE
- UI_MAPPING_FAILURE
- TRANSPORT_NOT_PROVEN
- DURABLE_ACK_NOT_PROVEN
- DEPLOYMENT_TOPOLOGY_MISMATCH

Avoid umbrella classifications when the exact layer is known.

## Receipt/OCR pattern

For receipt failures isolate:

**image quality → OCR execution → OCR semantic structure → AI structured extraction → validation → UI mapping**

Useful privacy-safe metrics:
- text length
- non-whitespace count
- line count
- Hebrew/Latin/digit counts
- date-like candidate count
- price-like candidate count
- currency presence boolean
- mixed letter-digit line count
- noise-heavy line count
- alphanumeric ratio
- plausible date/amount booleans
- processing timings

Never log raw OCR text from real receipts.

Once semantic OCR quality is proven poor, improve OCR/preprocessing first.
Do not retune AI prompt/model unless evidence points to the AI layer.

## Stop and ask the user when

Explicit user approval is required for:
- production deployment
- secret creation/rotation/binding
- IAM changes
- destructive Git
- force push / merge to main
- canonical financial-state mutation outside approved normal product flow
- clearing Android app data
- restoring/re-enqueueing financial evidence
- operations that could lose auth/dedupe/queue state

Do not request approval for routine read-only inspection, source edits, local tests, builds, or read-only preflight.

## Professional learning note

When useful, briefly explain:
- professional stage/process;
- relevant term;
- why teams use it;
- transferable lesson.

Execution remains primary.

## Success condition

This skill succeeds when the agent can truthfully say:

“The failure was observed at X, the failing boundary was proven to be Y, the smallest compatible fix was Z, local verification passed, the intended production artifact was deployed, and the real user flow passed acceptance.”

Anything weaker must retain UNKNOWN, NOT_RUN, BLOCKED, or PARTIAL status.
