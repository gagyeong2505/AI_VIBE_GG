# AI_VIBE_GG 프로젝트 가이드

## 기본 규칙

- 한국어로 응답한다.
- 유저가 요청한 것만 수행하고, 요청하지 않은 파일 생성 및 작업은 하지 않는다.
- 모든 GitHub 작업은 **gh CLI** 로 수행한다 (`gh-cli/SKILL.md` 스킬 참조).

---

## GitHub 리포지터리 정보

- **원격 저장소**: `https://github.com/gagyeong2505/AI_VIBE_GG`
- **기본 브랜치**: `main`
- **로컬 경로**: `C:\Users\SBS\Desktop\AI_VIBE_GG`

---

## 작업 완료 후 GitHub 업로드 규칙

**모든 작업이 끝날 때마다 아래 흐름으로 리포지터리에 업로드한다.**

### 최초 1회 — Git 초기화 (로컬에 .git이 없는 경우)

```powershell
git init
git branch -M main
git remote add origin https://github.com/gagyeong2505/AI_VIBE_GG.git
```

### 매 작업 완료 후 — 커밋 & 푸시

```powershell
git add .
git commit -m "{작업 내용 요약}"
git push -u origin main   # 첫 푸시는 -u, 이후엔 git push
```

### 주의사항

- `.env` 파일 등 민감한 파일은 절대 커밋하지 않는다 (`.gitignore` 에 포함).
- `node_modules/` 는 커밋하지 않는다 (`.gitignore` 에 포함).
- 커밋 메시지는 **한국어** 로 작성한다. 예: `feat: 랜딩 페이지 Hero 섹션 추가`
- gh 인증 오류 시: `gh auth status` 로 확인 후 `gh auth login` 실행.

---

## 디렉토리 구조

```
AI_VIBE_GG/
├── CLAUDE.md              ← 이 파일 (루트 가이드)
├── .claude/
│   └── settings.local.json
├── gh-cli/
│   └── SKILL.md           ← gh CLI 스킬 참조 문서
└── lecture1/              ← 강의별 프로젝트 폴더
    ├── CLAUDE.md          ← lecture1 전용 가이드 (로키 역할)
    └── ...
```

---

## gh CLI 스킬 활용

`/gh-cli` 스킬을 호출하면 GitHub CLI 관련 모든 작업(PR 생성, 이슈, 릴리즈, API 등)을 처리한다.
스킬 상세 내용은 `gh-cli/SKILL.md` 참조.

**자주 쓰는 명령어:**

```powershell
gh auth status                          # 인증 상태 확인
gh repo view gagyeong2505/AI_VIBE_GG    # 리포지터리 정보 확인
gh repo view --web                      # 브라우저에서 리포지터리 열기
```
