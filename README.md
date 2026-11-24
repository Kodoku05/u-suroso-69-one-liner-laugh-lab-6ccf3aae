[![make.fun — u-suroso-69-one-liner-laugh-lab-6ccf3aae](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![rank](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/Kodoku05/u-suroso-69-one-liner-laugh-lab-6ccf3aae/rank.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![reward](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/Kodoku05/u-suroso-69-one-liner-laugh-lab-6ccf3aae/reward.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-one-liner-laugh-lab-6ccf3aae)

# One-Liner Laugh Lab

Entry for the [make.fun](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae) competition **One-Liner Laugh Lab**: a program that writes one short funny line — the excuse a robot vacuum gives after eating a sock — to `/output/entry.txt`.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

`main.ts` runs on Node 22 with standard library imports only, writes a fixed
one-line text (at most 200 characters), and is fully deterministic.

## The joke

The line is chosen in `CANDIDATES.md`, where six candidates are scored
honestly against the judge's five criteria (on-prompt, funny, original,
fits the situation, tight) before the winner is picked and refined.
