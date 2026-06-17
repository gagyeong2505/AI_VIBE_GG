---
name: gh-cli
description: >
  Execute and guide GitHub CLI (`gh`) commands to manage repositories, pull requests, issues, releases,
  workflows, and any other GitHub resource from the terminal. Use this skill whenever the user wants to
  interact with GitHub via the command line — creating or reviewing PRs, filing or triaging issues,
  checking CI/workflow run status, cloning or forking repos, managing releases, working with gists,
  configuring SSH/GPG keys, querying the GitHub API, or automating any GitHub operation with `gh`.
  Trigger this skill even when the user doesn't mention "gh" explicitly — if they say "create a PR",
  "merge this", "check CI", "label this issue", "publish a release", "search GitHub", or anything
  that points to a GitHub operation, this skill is the right tool.
---

# GitHub CLI (`gh`) Skill

`gh` is GitHub's official command-line tool. It brings pull requests, issues, GitHub Actions, releases,
and the full GitHub API directly into the terminal, so you never have to leave your editor to manage
a project.

## Guiding principles

- **Prefer `gh` over raw `git` for GitHub-specific operations.** `git push origin main` opens a branch;
  `gh pr create` opens a pull request. Use the right tool for the job.
- **Always check auth first** if a command fails with a 401/403. Run `gh auth status` and, if needed,
  `gh auth login`.
- **Use `--json` + `--jq` for scripting.** Most `gh` commands accept `--json <fields>` for machine-
  readable output and `--jq <expr>` to filter it on the fly. Prefer this over parsing plain text.
- **Explain what will happen before running destructive commands** (merging, closing, deleting). Give
  the user a chance to confirm.
- **Windows note:** `gh` works the same on Windows. Use PowerShell or cmd — the commands are identical.
  Pipe characters (`|`) and `--jq` work fine in PowerShell 5+.

---

## Authentication

```bash
gh auth login          # interactive login (browser or token)
gh auth login --with-token <<< "$TOKEN"   # non-interactive, token from env
gh auth status         # check current login and scopes
gh auth refresh -s repo,workflow          # add missing OAuth scopes
gh auth logout
```

If the user has multiple GitHub accounts, `gh` supports account-switching via `gh auth switch`.

---

## Repositories

```bash
gh repo create my-repo --public --clone     # create + clone in one step
gh repo clone owner/repo                    # clone with SSH or HTTPS (respects gh config)
gh repo fork owner/repo --clone            # fork then clone
gh repo view                                # view current repo in terminal
gh repo view --web                          # open in browser
gh repo list                                # list your repos
gh repo list org --limit 100               # list org repos
gh repo set-default owner/repo             # set default repo for gh commands
gh repo archive owner/repo                 # archive a repo
gh repo delete owner/repo --confirm        # permanent deletion — confirm first!
gh repo sync                               # sync fork with upstream
```

---

## Pull Requests

```bash
# Creating
gh pr create                                       # interactive — prompts for title, body, base
gh pr create --title "fix: login bug" --body "..." --base main --draft
gh pr create --fill                                # auto-fill title+body from commits

# Viewing and listing
gh pr list                                         # open PRs in current repo
gh pr list --state all --author @me
gh pr view 42                                      # view PR #42 in terminal
gh pr view 42 --web                                # open in browser
gh pr diff 42                                      # show the diff
gh pr checks 42                                    # CI status for all checks

# Reviewing
gh pr review 42 --approve
gh pr review 42 --request-changes --body "Please add tests"
gh pr review 42 --comment --body "Looks good overall"

# Merging
gh pr merge 42                                     # interactive (merge/squash/rebase)
gh pr merge 42 --squash --delete-branch           # squash + cleanup
gh pr merge 42 --auto                              # auto-merge when checks pass

# Checkout
gh pr checkout 42                                  # checkout branch locally

# Other
gh pr close 42
gh pr reopen 42
gh pr edit 42 --title "new title" --add-label bug
gh pr ready 42                                     # mark draft as ready
gh pr lock 42 --reason resolved
```

### Getting structured output

```bash
gh pr list --json number,title,state,author --jq '.[] | "\(.number) \(.title)"'
gh pr view 42 --json mergeable,reviewDecision,statusCheckRollup
```

---

## Issues

```bash
gh issue create --title "Bug: X is broken" --body "Steps to repro..." --label bug --assignee @me
gh issue list                                      # open issues
gh issue list --label "priority:high" --assignee @me
gh issue view 99
gh issue view 99 --web
gh issue edit 99 --add-label "wontfix" --remove-label "bug"
gh issue close 99 --comment "Fixed in #42"
gh issue reopen 99
gh issue pin 99
gh issue transfer 99 owner/other-repo
gh issue develop 99                                # create a branch linked to the issue
```

---

## GitHub Actions / Workflows

```bash
# Listing and triggering
gh workflow list
gh workflow run deploy.yml                         # trigger workflow
gh workflow run deploy.yml --ref feature-branch -f env=staging

# Monitoring runs
gh run list
gh run list --workflow deploy.yml --branch main
gh run view 1234567890                             # view run summary
gh run view 1234567890 --log                       # stream full logs
gh run watch 1234567890                            # live status updates

# Control
gh run rerun 1234567890
gh run rerun 1234567890 --failed-only              # re-run only failed jobs
gh run cancel 1234567890

# Workflow enable/disable
gh workflow enable deploy.yml
gh workflow disable old-cron.yml
```

---

## Releases

```bash
gh release create v1.2.0 --title "v1.2.0" --notes "Changelog..." --draft
gh release create v1.2.0 dist/*.tar.gz            # attach build artifacts
gh release create v1.2.0 --generate-notes         # auto-generate release notes from PRs
gh release list
gh release view v1.2.0
gh release upload v1.2.0 dist/app-linux-amd64
gh release download v1.2.0 --dir ./downloads
gh release edit v1.2.0 --title "v1.2.0 — Stable" --draft=false
gh release delete v1.2.0 --yes
```

---

## GitHub API (raw access)

`gh api` lets you call any GitHub REST or GraphQL endpoint with your current credentials:

```bash
# REST
gh api repos/owner/repo/issues --method POST --field title="Bug" --field body="..."
gh api repos/owner/repo/collaborators --jq '.[].login'
gh api /user

# GraphQL
gh api graphql -f query='
  query($owner:String!, $repo:String!, $num:Int!) {
    repository(owner:$owner, name:$repo) {
      pullRequest(number:$num) { title state mergeable }
    }
  }
' -f owner=myorg -f repo=myrepo -F num=42

# Pagination
gh api /repos/owner/repo/issues --paginate
```

---

## Gists

```bash
gh gist create file.py --desc "helper script" --public
gh gist create - <<< "echo hello"             # from stdin
gh gist list
gh gist view <id> --raw
gh gist edit <id>
gh gist clone <id>
gh gist delete <id>
```

---

## Search

```bash
gh search repos "machine learning" --language python --sort stars
gh search issues "memory leak" --repo owner/repo --state open
gh search prs "auth refactor" --author octocat
gh search commits "fix null pointer" --repo owner/repo
gh search code "TODO: remove" --repo owner/repo --language go
```

---

## SSH & GPG keys

```bash
gh ssh-key list
gh ssh-key add ~/.ssh/id_ed25519.pub --title "Work laptop"
gh ssh-key delete <id>

gh gpg-key list
gh gpg-key add public.asc
gh gpg-key delete <key-id>
```

---

## Organizations

```bash
gh org list
gh org view myorg
gh api orgs/myorg/members --jq '.[].login'     # list members
```

---

## Config & Extensions

```bash
gh config set git_protocol ssh                 # use SSH for git operations
gh config set editor "code --wait"             # VS Code as editor
gh config get git_protocol

gh extension list
gh extension install owner/gh-notify           # community extension
gh extension upgrade --all
gh extension remove gh-notify
```

---

## Common workflows

### Open a PR from the current branch
```bash
git add -A && git commit -m "feat: add login page"
git push -u origin HEAD
gh pr create --fill --base main
```

### Review and merge a PR
```bash
gh pr list                                     # find the number
gh pr checkout 42
gh pr diff 42
gh pr review 42 --approve
gh pr merge 42 --squash --delete-branch
```

### Triage issues
```bash
gh issue list --label bug --state open
gh issue edit 77 --add-assignee @me --add-label "priority:high"
gh issue close 78 --comment "Duplicate of #77"
```

### Watch a deployment
```bash
gh run list --branch main --workflow deploy.yml --limit 1
gh run watch $(gh run list --branch main --limit 1 --json databaseId -q '.[0].databaseId')
```

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| `gh: command not found` | Install: https://cli.github.com — on Windows, `winget install GitHub.cli` |
| 401 Unauthorized | `gh auth login` |
| Missing scope error | `gh auth refresh -s <scope>` |
| Wrong repo targeted | `gh repo set-default owner/repo` or run from the correct directory |
| Rate limit hit | Use `--paginate` carefully; check `gh api rate_limit` |
| JSON parse error | Verify field names with `gh pr view --json` (no value = list all fields) |
