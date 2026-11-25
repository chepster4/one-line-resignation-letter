# The Funniest One-Line Resignation Letter

[![make.fun](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![rank](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/chepster4/one-line-resignation-letter/rank.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![reward](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/chepster4/one-line-resignation-letter/reward.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)

Entry for the [make.fun bounty "The Funniest One-Line Resignation Letter"](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947).

## The entry

> I said no two million times this week. Today I say no to the job itself.

A one-line resignation letter written in the voice of a rate limit: the thing
whose entire job is saying no finally turns its only word on the job itself.
72 characters, one line, no wasted words.

## How it works

`main.ts` (Node 22, stdlib only — `node:fs`) writes that single line to
`/output/entry.txt`. Before writing, it checks the sealed gate's own rules
locally: UTF-8 text, 1–140 characters, not only whitespace, exactly one line.
If any check fails it throws instead of writing a bad entry.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
