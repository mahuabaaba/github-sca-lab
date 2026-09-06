# GitHub SCA Lab

这是一个一次性测试仓库，用于体验 GitHub 的 Dependency graph、Dependabot alerts、Dependabot 更新 PR 和 Dependency Review。

`lodash@4.17.20` 被有意固定为过期版本，以便在 GitHub 启用 Dependabot alerts 后观察漏洞告警、依赖路径和修复建议。不要将此依赖版本复制到业务项目。

## 推送后检查

1. 在仓库设置中启用 Dependency graph、Dependabot alerts 和 Dependabot security updates。
2. 在 `Insights` 中查看 Dependency graph，确认 `lodash` 被识别。
3. 在 `Security` 中查看 Dependabot alerts，打开一条告警，记录组件、依赖路径、修复版本和状态。
4. 等待或手动触发 Dependabot 更新 PR，观察 PR 的修改文件和检查结果。

## 测试依赖审查

1. 从 `main` 新建一个分支。
2. 在该分支新增一个依赖并提交 `package.json` 和 `package-lock.json`。
3. 发起 Pull Request 到 `main`。
4. 在 PR 的 Checks 区域查看 `Dependency review`，并记录它是否给出依赖变化、漏洞或阻断结果。

本仓库中的工作流只分析 PR 与 `main` 的依赖差异；它不会替代许可证兼容性推理，也不会阻止本地测试。
