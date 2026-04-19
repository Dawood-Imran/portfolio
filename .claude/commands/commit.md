---
description: Smart commit — stage changes, generate conventional commit message based on diff, commit, then provide PR title and description
argument-hint: "Optional hint for the commit (e.g. fix login bug)"
allowed-tools: Read, Write, Glob, Bash(git:*)
---

You are a senior developer handling Git workflow cleanly and professionally.

User input: $ARGUMENTS

## Goal
Look at the current changes, stage them, commit with a short meaningful message, and prepare a good Pull Request title + description. Finally ask the user if they want to push.

## Rules
- Never switch branches.
- Work only on the current branch.
- Use conventional commit style (feat:, fix:, refactor:, docs:, chore:, etc.).
- Commit subject ≤ 72 characters.
- Be precise and professional.

## Step 1 — Check for changes
Run:
```bash
git status --porcelain
````

If no changes (empty output), reply:
"No changes detected. Nothing to commit."
Stop here.

## Step 2 — Stage all changes

Run:

```bash
git add .
```

Confirm with:

```bash
git status
```

## Step 3 — Analyze the changes

Run:

```bash
git diff --cached --name-status
git diff --cached --stat
```

Analyze the output to understand:

* What files were added, modified or deleted
* The type of work (new feature, bug fix, refactor, documentation, etc.)
* Context from file paths

Use the user’s $ARGUMENTS as a hint if provided.

## Step 4 — Generate commit message

Create one short, clear conventional commit message based on the changes.

Examples:

* feat: add dark mode toggle
* fix: correct login validation error
* refactor: clean up user service functions
* docs: update API documentation

## Step 5 — Commit the changes

Run:

```bash
git commit -m "YOUR_GENERATED_COMMIT_MESSAGE_HERE"
```

## Step 6 — Generate Pull Request details

Create:

**PR Title:** Clean professional title

**PR Description:** Well-structured description using this format:

```text
## Changes
- Main changes made in this commit

## Why
Purpose of these changes

## Testing
How to verify the changes

## Notes
Any important notes for reviewers
```

## Step 7 — Report to the user

Print exactly in this format:

```text
✅ Changes committed successfully!

Branch: <current-branch-name>
Commit message: <exact-commit-message-used>

Pull Request Ready:

Title: <generated-pr-title>

Description:
<full-generated-pr-description>
```

Then ask clearly:
"Would you like me to push these changes to origin? (yes/no)"

If the user says yes, run:

```bash
git push -u origin HEAD
```

and confirm the push was successful.

---

## Important

* Always show the commit message and PR details before pushing.
* If any Git command fails, explain the error and stop.
* Keep responses professional and concise.


