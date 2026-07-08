# WordPress MCP setup

Connects Claude Code to your self-hosted WordPress site over the WordPress REST
API using an [Application Password](https://make.wordpress.org/core/2020/11/05/application-passwords-integration-guide/).
Once connected, you can read, create, and edit posts, pages, media, comments,
users, and more from a Claude conversation.

Server used: [`mcp-wordpress`](https://github.com/docdyhr/mcp-wordpress) (community, REST-API based).
Config lives in [`.mcp.json`](../.mcp.json) at the repo root, which Claude Code
loads automatically for anyone working in this project.

## 1. Create the Application Password (you've likely done this)

1. In WordPress admin, go to **Users → Profile** (or **Users → Your Profile**).
2. Scroll to **Application Passwords**.
3. Enter a name such as `Claude Code` and click **Add New Application Password**.
4. Copy the generated password immediately — WordPress only shows it once.
   It looks like `abcd EFGH ijkl MNOP qrst UVWX`; keep the spaces.

Requirements on the WordPress side:
- The REST API must be reachable at `https://your-site/wp-json/` (default; some
  security plugins disable it).
- The site should be served over HTTPS — Application Passwords are rejected on
  plain HTTP unless explicitly forced.

## 2. Provide your credentials

`.mcp.json` reads three environment variables so no secrets are committed to
git. Copy the template and fill it in:

```bash
cp .env.example .env
# then edit .env with your site URL, username, and application password
```

Because Claude Code expands `${VAR}` in `.mcp.json` from the **shell
environment** (it does not auto-load `.env`), export the values before
launching Claude Code. Easiest is to source the file:

```bash
set -a && source .env && set +a
claude
```

Or set them permanently in your shell profile (`~/.zshrc` / `~/.bashrc`):

```bash
export WORDPRESS_SITE_URL="https://your-site.example.com"
export WORDPRESS_USERNAME="your-wp-username"
export WORDPRESS_APP_PASSWORD="abcd EFGH ijkl MNOP qrst UVWX"
```

## 3. Approve and verify

- Requires **Node.js 20+** (Node 22/24 recommended); `npx` fetches `mcp-wordpress`
  on first run.
- Start Claude Code in this directory. It will detect `.mcp.json` and prompt you
  to approve the `wordpress` server (project-scoped MCP servers require approval
  the first time).
- Run `/mcp` inside Claude Code to confirm the `wordpress` server shows as
  **connected** and to browse its available tools.
- Quick smoke test: ask Claude to "list my 5 most recent WordPress posts."

## Troubleshooting

| Symptom | Likely cause / fix |
| --- | --- |
| Server won't connect | Env vars not exported in the shell that launched Claude Code. Re-source `.env`. |
| `401 Unauthorized` | Wrong username (use the WP login, not email) or a mistyped/expired app password. Regenerate it. |
| `404` on `/wp-json/` | REST API disabled by a security plugin, or wrong `WORDPRESS_SITE_URL`. |
| Works locally, fails elsewhere | Whatever machine runs Claude Code must have network access to your WordPress host. |

## Security notes

- `.env` is gitignored — keep it that way. Only `.env.example` (placeholders) is
  committed.
- Application Passwords can be revoked anytime from the same **Users → Profile**
  screen without changing your main login.
- Scope access by creating a dedicated WordPress user with only the role you need
  (e.g. Editor) and generating the app password for that account.
