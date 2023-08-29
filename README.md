# Sandbox

> required `nodejs` = 18.16.0, `pnpm` = 8.6.0

## Instructions

### Install dependencies

```bash
pnpm i
```

### Install dependencies depend on workspaces

```bash
pnpm --filter <workspace> {add|run} <npm|cmd>
```

### Install dependencies base on sub workspace

```bash
pnpm --filter <workspace> {add} <workspace name> --workspace
```

## Ui-react (shared ui)

### Running storybook

```bash
pnpm ui:storybook
```

### Build ui

```bash
pnpm build:ui
```

## Run react (csr)

```bash
pnpm dev:csr
```
