#!/usr/bin/env bash
# 从 berba 主仓同步文档到本仓 docs/（本仓 docs/ 是只读副本，不要手工编辑）。
# 用法: scripts/sync-docs.sh [文档源目录]   默认 ../berba/docs（两仓并列摆放时）
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")/.."

SRC="${1:-../berba/docs}"
[ -d "$SRC" ] || { echo "错误: 找不到文档源 $SRC（把两仓放同一父目录，或传入路径参数）" >&2; exit 1; }
ls "$SRC"/*.md >/dev/null 2>&1 || { echo "错误: $SRC 下没有 *.md" >&2; exit 1; }

rm -rf docs
mkdir -p docs
cp "$SRC"/*.md docs/
echo "已从 $SRC 同步 $(ls docs | wc -l | tr -d ' ') 篇文档到 docs/"
